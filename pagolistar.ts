import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { pagoservice } from '../services/pago.service';
import { Pago } from '../../../models/Pago';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-listar',
  templateUrl: './pago-listar.component.html'
})
export class PagoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pago>;
  displayedColumns: string[] = ['idPago', 'contrato', 'monto', 'fecha', 'metodo', 'estado'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private PagoService: pagoservice,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.cargarPagos();
  }

  cargarPagos(): void {
    this.PagoService.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => console.error('Error al cargar pagos', err)
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Está seguro de eliminar este pago?')) {
      this.PagoService.delete(id).subscribe({
        next: () => {
          alert('Pago eliminado correctamente');
          this.cargarPagos();
        },
        error: (err) => {
          console.error('Error al eliminar pago', err);
          alert('Error al eliminar el pago');
        }
      });
    }
  }

  editar(id: number): void {
    this.router.navigate(['/pagos/editar', id]);
  }

  nuevo(): void {
    this.router.navigate(['/pagos/insertar']);
  }

  filtrar(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}