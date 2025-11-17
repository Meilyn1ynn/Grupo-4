import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { soporteservice } from '../../../services/soporteservice';
import { usuarioservice } from '../../../services/usuarioservice';
import { Soporte } from '../../../models/Soporte';
import { Usuario } from '../../../models/Usuario';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-soportesearch',
  imports: [],
  templateUrl: './soportesearch.html',
  styleUrl: './soportesearch.css',
})
export class Soportesearch implements OnInit{
  searchform:FormGroup;
  tickets:Soporte[]=[];
  usuario:Usuario[]=[];
  resultadosvisibles=false;

  constructor(
    private fb:FormBuilder,
    private soporteService:soporteservice,
    private UsuarioService:usuarioservice,
  ){
    this.searchform=this.fb.group({
      criterio:['estado'],
      valorEstado:['Pendiente'],
      valorUsuario:[null]
    });
  }

  ngOnInit(): void {
      this.cargarUsuarios();
  }

  cargarUsuarios():void{
    this.UsuarioService.list().subscribe({
      next:(data)=>this.usuario=data;
      error:(err)=>console.error('Error al cargar los usuarios',err)
    });
  }

  buscar():void{
    const criterio=this.searchform.value.criterio;

    switch(criterio){
      case 'Estado':
        const estado=this.searchform.value.valorEstado;
        if(estado) this.BuscarPorEstado(estado);
        break;
      case 'usuario':
        const usuario=this.searchform.value.valorUsuario;
        if(usuario) this.BuscarPorUsuario(usuario.id);
        break;
      default:
        this.cargarTodos();
    }
  }

  BuscarPorEstado(estado:string): void{
    this,soporteservice.findByEstado(estado).subscribe({
      next:(data)=>{
        this.tickets=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error en la busqueda', err)
    });
  }

  BuscarPorUsuario(idusuario:number):void{
    this.soporteService.findByUsuario(idusuario).subscribe({
      Next:(data)=>{
        this.tickets=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error en la busqueda',err)
    });
  }

  cargarTodos():void{
    this.soporteService.list().subscribe({
      next:(data)=>{
        this.tickets=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error al cargar',err)
    });
  }

  Limpiar():void{
    this.searchform.reset({criterio:'estado', valorestado:'Pendiente'});
    this.tickets=[];
    this.resultadosvisibles=false;
  }

}
