import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Favorito } from '../../../models/Favorito';
import { Usuario } from '../../../models/Usuario';
import { Propiedad } from '../../../models/Propiedad';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { propiedadservice } from '../../../services/propiedadservice';
import { favoritoservice } from '../../../services/favoritoservice';

@Component({
  selector: 'app-favoritosinsertar',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './favoritosinsertar.html',
  styleUrl: './favoritosinsertar.css',
})
export class Favoritosinsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  fav: Favorito = new Favorito();
  id: number = 0;
  today = new Date();
  listaUsuario:Usuario[]=[]
  listaPropiedad:Propiedad[]=[]

  edicion: boolean = false;


  constructor(
    private uS: usuarioservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pS: propiedadservice,
    private fS: favoritoservice
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

    this.pS.list().subscribe(data=>{
    this.listaPropiedad=data;
    });




    this.form = this.formBuilder.group({
      fkUsuario:['', Validators.required,],
      fk2Propiedad:['', Validators.required,],
      idFavorito: [0],
      fecha: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.fav.idFavorito = this.form.value.idFavorito;
      this.fav.fecha = this.form.value.fecha;
      this.fav.usuario = new Usuario();
      this.fav.usuario.idUsuario = this.form.value.fkUsuario; 
      this.fav.propiedad = new Propiedad();
      this.fav.propiedad.idPropiedad = this.form.value.fk2Propiedad; 
      

      if (this.edicion) {
        this.fS.update(this.fav).subscribe(() => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      } else {
        this.fS.insert(this.fav).subscribe((data) => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      }
        this.router.navigate(['favoritos']);
    } else {
        // Muestra en consola por qué falla si el botón no hace nada
        console.log("Formulario inválido", this.form.errors);
        Object.keys(this.form.controls).forEach(key => {
            if (this.form.get(key)?.invalid) console.log("Campo invalido:", key);
        });
    }
  }
  init() {
    if (this.edicion) {
      this.fS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idFavorito: new FormControl(data.idFavorito),
          fecha: new FormControl(data.fecha),
          usuario:new FormControl(data.usuario.idUsuario),
          propiedad:new FormControl(data.propiedad.idPropiedad)
        });
      });
    }
  }

}
