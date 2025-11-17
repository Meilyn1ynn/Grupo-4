import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { reseñaservice } from '../../../services/reseñaservice';
import { usuarioservice } from '../../../services/usuarioservice';
import { Reseña } from '../../../models/Reseña';
import { Usuario } from '../../../models/Usuario';
import { S } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-reseniainsertar',
  imports: [],
  templateUrl: './reseniainsertar.html',
  styleUrl: './reseniainsertar.css',
})
export class Reseniainsertar implements OnInit {

  reseñaform:FormGroup;
  usuarios:Usuario[]=[];
  puntajes:[1,2,3,4,5];

  constructor(
    private fb:FormBuilder,
    private ReseñaService:reseñaservice,
    private Usuarioservice:usuarioservice,
    private route:Router
  ){
    this.reseñaform=this.fb.group({
      autor:[null,Validators.required],
      receptor:[null,Validators.required],
      puntaje:[S,[Validators.required,Validators.min(1),Validators.max(5)]],
      comentario:['',[Validators.required,Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
      this.Usuarioservice.list().subscribe({
        next:(data)=>this.usuarios=data,
        error:(err)=>console.error('Error al cargar los usuarios', err)
      });
  }

  guardar():void{
    if(this.reseñaform.invalid){
      this.reseñaform.markAllAsTouched();
      return;
    }

    if(this.reseñaform.value.autor.id === this.reseñaform.value.receptor.id){
      alert('El autor y el receptor no pueden ser el musmo usuario')
      return;
    }

    const reseña:Reseña={
      idreseña:0,
      autor:this.reseñaform.value.autor,
      receptor:this.reseñaform.value.receptor,
      puntaje:this.reseñaform.value.puntaje,
      comentario:this.reseñaform.value.comentario,
      fecha:new Date()
    };

    this.ReseñaService.insert(reseña).subscribe({
      next:()=>{
        alert('Reseña registrada exitosamente');
        this.route.navigate(['/reseñas']);
      },

      error:(err)=>{
        console.error('Error al registrar reseña',err);
        alert('Error al registrar la reseña');
      }
    });
  }

  Cancelar():void{
    this.route.navigate(['/reseñas']);
  }

}
