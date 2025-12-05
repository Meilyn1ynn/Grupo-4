import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Favorito } from '../../../models/Favorito';
import { favoritoservice } from '../../../services/favoritoservice';

@Component({
  selector: 'app-favoritoslistar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './favoritoslistar.html',
  styleUrl: './favoritoslistar.css',
})
export class Favoritoslistar implements OnInit{
  dataSource: MatTableDataSource<Favorito> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private fS: favoritoservice) {}

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
