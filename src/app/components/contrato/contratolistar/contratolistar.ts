import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { contratoservice } from '../../../services/contratoservice';
import { Contrato } from '../../../models/Contrato';

@Component({
  selector: 'app-contratolistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './contratolistar.html',
  styleUrl: './contratolistar.css',
})
export class Contratolistar implements OnInit {
  dataSource: MatTableDataSource<Contrato> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6',  'c7','c8','c9'];

  constructor(private cS: contratoservice) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
}

