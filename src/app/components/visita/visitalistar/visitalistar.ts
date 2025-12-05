import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Visita } from '../../../models/Visita';
import { visitaservice } from '../../../services/visitaservice';

@Component({
  selector: 'app-visitalistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './visitalistar.html',
  styleUrl: './visitalistar.css',
  standalone: true,
})
export class Visitalistar implements OnInit {
  dataSource: MatTableDataSource<Visita> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private vS: visitaservice) {}

  ngOnInit(): void {
    this.vS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.vS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.vS.delete(id).subscribe(() => {
      this.vS.list().subscribe((data) => {
        this.vS.setList(data);
      });
    });
  }
}