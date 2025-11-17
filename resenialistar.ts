import { Component, OnInit, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { reseñaservice } from '../../../services/reseñaservice';
import { Reseña } from '../../../models/Reseña';

@Component({
  selector: 'app-resenialistar',
  imports: [],
  templateUrl: './resenialistar.html',
  styleUrl: './resenialistar.css',
})
export class Resenialistar implements OnInit {

  datasource:MatTableDataSource<Reseña>;
  displayed:string[]=['idReseña','autor','receptor','puntaje','comentario','fecha'];

  @viewChild(MatPaginator) paginator!:MatPaginator;
  @viewChild(MatSort) matsort!:MatSort;

  constructor(private Reseñaservice:reseñaservice){
    this.datasource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.cargarReseñas();
  }

  cargarReseñas():void{
    this.Reseñaservice.list().subscribe({
      next:(data)=>{
        this.datasource.data=data;
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.matsort;
      },
      error:(err)=>console.error('Error al cargar las reseñas', err)
    });
  }

  eliminar(id:number):void{
    if(confirm('¿Esta seguro de eliminar esta reseña?')){
      this.Reseñaservice.delete(id).subscribe({
        next:()=>{
          alert('Resela eliminada');
          this.cargarReseñas();
        },

        error:(err)=>{
          alert('Error al eliminar la reseña');
        }
      });
    }
  }

  filtrar(event:Event):void{
    const filterValue= (event.target as HTMLInputElement).value
    this.datasource.filter=filterValue.trim().toLowerCase();
  }

  getEstrella(puntaje:number):string{
    return '⭐'.repeat(puntaje);
  }

}
