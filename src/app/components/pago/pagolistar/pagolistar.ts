import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Pago } from '../../../models/Pago';
import { Pagoservices } from '../../../services/pagoservice';

@Component({
  selector: 'app-pagolistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './pagolistar.html',
  styleUrl: './pagolistar.css',
})
export class Pagolistar implements OnInit{
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(private pS: Pagoservices) {}

  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }

}
