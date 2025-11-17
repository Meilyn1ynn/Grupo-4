import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { reseñaservice } from '../../../services/reseñaservice';
import { usuarioservice } from '../../../services/usuarioservice';
import { Reseña } from '../../../models/Reseña';
import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'app-reseniasearch',
  imports: [],
  templateUrl: './reseniasearch.html',
  styleUrl: './reseniasearch.css',
})
export class Reseniasearch implements OnInit {
searchForm:FormGroup;
reseñas:Reseña[]=[];
ususarios:Usuario[]=[];
resultadosVisibles=false;

constructor(
  private fb:FormBuilder,
  private reseñaService:reseñaservice,
  private usuarioService:usuarioservice
){
  this.searchForm=this.fb.group({
    criterio:['receptor'],
    valorususario:[null],
    valorpuntaje:[null]
  });
}

ngOnInit(): void {
    this.cargarUsuarios();
}

cargarUsuarios(){
  this.usuarioService.list().subscribe({
    next:(data)=> this.ususarios=data,
    error:(err)=>console.error('Error al cargar usuario', err)
  });
}

buscar():void{
  const criterio=this.searchForm.value.criterio;

  switch(criterio){
    case 'receptor':
      const receptor=this.searchForm.value.valorususario;
      if(receptor) this.buscarPorReceptor(receptor.id);
      break;
    case 'Autor':
      const autor=this.searchForm.value.valorususario;
      if(autor) this.buscarPorAutor(autor.id);
      break;
    case 'puntaje':
      const puntaje=this.searchForm.value.valorpuntaje;
      if(puntaje) this.buscarPorPuntaje(puntaje);
      break;
  }
}

buscarPorReceptor(idReceptor:number):void{
  this.reseñaService.findByReceptor(idReceptor).subscribe({
    next:(data)=>{
      this.reseñas=data
      this.resultadosVisibles=true;
    },
    error:(err)=>console.error('Error en la busqueda', err)
  });
}

buscarPorAutor(idautor:number):void{
  this.reseñaService.finfByReceptor(idautor).subscribe({
    next:(data)=>{
      this.reseñas=data;
      this.resultadosVisibles=true;
    },
    error:(err)=>console.error('Error en la busqieda',err)
  });
}

buscarPorPuntaje(puntaje:number):void{
  this.reseñaService.findByPuntaje(puntaje).subscribe({
    next:(data)=>{
      this.reseñas=data;
      this.resultadosVisibles=true;
    },
    error:(err)=>console.error('Error en la busqueda',err)
  });
}

Limpiar():void{
  this.searchForm.reset({criterio:'receptor'});
  this.reseñas=[];
  this.resultadosVisibles=false;
}

}
