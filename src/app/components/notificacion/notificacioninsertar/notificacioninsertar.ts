import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Notificacion } from '../../../models/Notificacion';
import { Usuario } from '../../../models/Usuario';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { notificacionservice } from '../../../services/notificacionservice';

@Component({
  selector: 'app-notificacioninsertar',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './notificacioninsertar.html',
  styleUrl: './notificacioninsertar.css',
})
export class Notificacioninsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  not: Notificacion = new Notificacion();
  id: number = 0;
  today = new Date();
  listaUsuario:Usuario[]=[]

  edicion: boolean = false;


  constructor(
    private uS: usuarioservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private nS: notificacionservice
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.uS.list().subscribe(data=>{
    this.listaUsuario=data;
    });

    this.form = this.formBuilder.group({

      id: [0],
      titulo: ['', Validators.required],
      mensaje: ['', Validators.required],
      leida: ['', Validators.required],
      fecha:['', Validators.required],
      fkUsuario:['',Validators.required]
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.not.id = this.form.value.id;
      this.not.titulo = this.form.value.titulo;
      this.not.mensaje = this.form.value.mensaje;
      this.not.leida = this.form.value.leida;
      this.not.fecha = this.form.value.fecha;
      this.not.usuario = new Usuario();
      this.not.usuario.idUsuario = this.form.value.fkUsuario; 

      

      if (this.edicion) {
        this.nS.update(this.not).subscribe(() => {
          this.nS.list().subscribe((data) => {
            this.nS.setList(data);
          });
        });
      } else {
        this.nS.insert(this.not).subscribe((data) => {
          this.nS.list().subscribe((data) => {
            this.nS.setList(data);
          });
        });
      }
      this.router.navigate(['notificaciones']);
    }
    else {
        // Muestra en consola por qué falla si el botón no hace nada
        console.log("Formulario inválido", this.form.errors);
        Object.keys(this.form.controls).forEach(key => {
            if (this.form.get(key)?.invalid) console.log("Campo invalido:", key);
        });
    }
  }
  init() {
    if (this.edicion) {
      this.nS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          titulo: new FormControl(data.titulo),
          mensaje: new FormControl(data.mensaje),
          leida: new FormControl(data.leida),
          fecha: new FormControl(data.fecha),
          usuario: new FormControl(data.usuario.idUsuario),
        });
      });
    }
  }

}
