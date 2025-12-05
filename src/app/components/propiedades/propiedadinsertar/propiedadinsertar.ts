import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Propiedad } from '../../../models/Propiedad';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { propiedadservice } from '../../../services/propiedadservice';
import { Usuario } from '../../../models/Usuario';



@Component({
  selector: 'app-propiedadinsertar',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './propiedadinsertar.html',
  styleUrl: './propiedadinsertar.css',
})
export class Propiedadinsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  pro: Propiedad = new Propiedad();
  id: number = 0;
  today = new Date();
  listaUsuario:Usuario[]=[]

  edicion: boolean = false;


  constructor(
    private pS: propiedadservice,
    private uS: usuarioservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    }); 

    this.uS.list().subscribe((data) => {
      this.listaUsuario = data;
    });

    this.form = this.formBuilder.group({

      idPropiedad: [0],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      distrito: ['', Validators.required],
      precio: ['', Validators.required],
      habitaciones:['', Validators.required],
      fechaPublicacion:['', Validators.required],
      fkUsuario: ['', Validators.required], 
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.pro.idPropiedad = this.form.value.idPropiedad;
      this.pro.titulo = this.form.value.titulo;
      this.pro.descripcion = this.form.value.descripcion;
      this.pro.direccion = this.form.value.direccion;
      this.pro.distrito = this.form.value.distrito;
      this.pro.precio = this.form.value.precio;
      this.pro.habitaciones = this.form.value.habitaciones;
      this.pro.fechaPublicacion = this.form.value.fechaPublicacion;
      this.pro.usuario = new Usuario();
      this.pro.usuario.idUsuario = this.form.value.fkUsuario;

      

      if (this.edicion) {
        this.pS.update(this.pro).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.pro).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['propiedades']);
    }else {
        // Muestra en consola por qué falla si el botón no hace nada
        console.log("Formulario inválido", this.form.errors);
        Object.keys(this.form.controls).forEach(key => {
            if (this.form.get(key)?.invalid) console.log("Campo invalido:", key);
        });
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idPropiedad: new FormControl(data.idPropiedad),
          titulo: new FormControl(data.titulo),
          descripcion: new FormControl(data.descripcion),
          direccion: new FormControl(data.direccion),
          distrito: new FormControl(data.distrito),
          precio:new FormControl(data.precio),
          habitaciones:new FormControl(data.habitaciones),
          fechaPublicacion: new FormControl(data.fechaPublicacion),
          fkUsuario: new FormControl(data.usuario.idUsuario)
        });
      });
    }
  }

}
