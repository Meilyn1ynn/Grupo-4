import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { soporteservice } from '../../../services/soporteservice';
import { usuarioservice } from '../../../services/usuarioservice';
import { Soporte } from '../../../models/Soporte';
import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'app-soporteinsertar',
  imports: [],
  templateUrl: './soporteinsertar.html',
  styleUrl: './soporteinsertar.css',
})
export class Soporteinsertar implements OnInit {
  soporteform:FormGroup;
  usuarios:Usuario[]=[];

  constructor(
    private fb:FormBuilder,
    private soporteService:soporteservice,
    private usuarioService:usuarioservice,
    private router:Router
  ){
    this.soporteform=this.fb.group({
      usuario:[null,Validators.required],
      mensaje:['',[Validators.required,Validators.maxLength(1000)]],
      estado:['Pendiente',Validators.required]
    });
  }

  ngOnInit(): void {
      this.cargarUsuarios();
  }

  cargarUsuarios():void{
    this.usuarioService.list().subscribe({
      next:(data)=>this.usuarios=data;
      error:(err)=>console.error('Error al cargar el usuario', err)
    });
  }

  guardar():void{
    if(this.soporteform.invalid){
      this.soporteform.markAllAsTouched();
      return;
    }

    const soporte:Soporte={
      idSoporte:0,
      usuario:this.soporteform.value.usuario,
      mensaje:this.soporteform.value.mensaje,
      estado:this.soporteform.value.estado,
      fecha:new Date()
    };

    this.soporteService.insert(soporte).subscribe({
      next:()=>{
        alert('Ticket de soporte creadp exitosamente'),
        this.router.navigate(['/soporte'])
      },
      error:(err)=>{
        console.error('Error al crear ticket');
      }
    });
  }

  cancelar():void{
    this.router.navigate(['/soporte'])
  }

}
