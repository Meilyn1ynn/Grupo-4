import { Component, OnInit, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { soporteservice } from '../../../services/soporteservice';
import { Soporte } from '../../../models/Soporte';

@Component({
  selector: 'app-soportelistar',
  imports: [],
  templateUrl: './soportelistar.html',
  styleUrl: './soportelistar.css',
})
export class Soportelistar implements OnInit {
  datasource:MatTableDataSource<Soporte>;
  displayedColumns:string[]=['idSoporte','usuario','mensaje','estado','fecha'];

  @viewChild(MatPaginator) paginator:MatPaginator;
  @viewChild(MatSort) sort:MatSort;

  constructor(private soporteservice:soporteservice){
    this.datasource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.cargartickets();
  }

  cargartickets():void{
    this.soporteservice.list().subscribe({
      next:(data)=>{
        this.datasource.data=data;
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.sort;
      },
      error:(err)=>console.error('Error al cargar los tickets', err)
    });
  }

CambiarEstado(id:number, nuevoestado:string):void{
  this.soporteservice.updateEstado(id,nuevoestado).subscribe({
    next:()=>{
      alert('Estado actualizado');
      this.cargartickets();
    },
    error:(err)=>console.error('Error al actualizar el estado',err);
  });
}

eliminar(id:number):void{
  if(confirm('¿Esta seguro de querer eliminar este ticket?')){
    this.soporteservice.delete(id).subscribe({
      next:()=>{
        alert('Ticket eliminado');
        this.cargartickets();
      },
      error:(err)=>{
        console.error('Error al eliminar el ticket',err);
        alert('Error al eliminar el ticker');
      }
    });
  }
}

filtrar(event:Event):void{
  const filterValue=(event.target as HTMLInputElement).value;
  this.datasource.filter=filterValue.trim().toLowerCase();
}

getColorEstado(estado:string):string{
  switch(estado){
    case 'Pendiente': return 'warn';
    case 'En proceso': return 'accent';
    case 'Resuelto': return 'primary';
    default:return '';
  }
}

}
