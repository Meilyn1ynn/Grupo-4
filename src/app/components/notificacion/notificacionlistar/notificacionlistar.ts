import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { notificacionservice } from '../../../services/notificacionservice';
import { Notificacion } from '../../../models/Notificacion';

@Component({
  selector: 'app-notificacionlistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './notificacionlistar.html',
  styleUrl: './notificacionlistar.css',
})
export class Notificacionlistar implements OnInit{
  dataSource: MatTableDataSource<Notificacion> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7','c8'];

  constructor(private nS: notificacionservice) {}

  ngOnInit(): void {
    this.nS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.nS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.nS.delete(id).subscribe((data) => {
      this.nS.list().subscribe((data) => {
        this.nS.setList(data);
      });
    });
  }

}
