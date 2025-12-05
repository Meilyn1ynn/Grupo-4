import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { propiedadfotoservice } from '../../../services/propiedadfotoservice';
import { PropiedadFoto } from '../../../models/PropiedadFoto';

@Component({
  selector: 'app-propiedadfotolistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './propiedadfotolistar.html',
  styleUrl: './propiedadfotolistar.css',
})
export class Propiedadfotolistar implements OnInit{
  dataSource: MatTableDataSource<PropiedadFoto> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private fS: propiedadfotoservice) {}

  ngOnInit(): void {
    this.fS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.fS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.fS.delete(id).subscribe((data) => {
      this.fS.list().subscribe((data) => {
        this.fS.setList(data);
      });
    });
  }

}
