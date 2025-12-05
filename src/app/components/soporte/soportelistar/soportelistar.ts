import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Soporte } from '../../../models/Soporte';
import { soporteservice } from '../../../services/soporteservice';

@Component({
  selector: 'app-soportelistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './soportelistar.html',
  styleUrl: './soportelistar.css',
  standalone: true, // Asegúrate de que esto esté presente si usas 'imports'
})
export class Soportelistar implements OnInit {
  dataSource: MatTableDataSource<Soporte> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private sS: soporteservice) {}

  ngOnInit(): void {
    this.sS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.sS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.sS.delete(id).subscribe(() => {
      this.sS.list().subscribe((data) => {
        this.sS.setList(data);
      });
    });
  }
}