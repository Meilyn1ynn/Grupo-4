import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Reseña } from '../../../models/Reseña';
import { Usuario } from '../../../models/Usuario';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { reseñaservice } from '../../../services/reseñaservice';

@Component({
  selector: 'app-resenasinsertar',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './resenasinsertar.html',
  styleUrl: './resenasinsertar.css',
})
export class Resenasinsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  res: Reseña = new Reseña();
  id: number = 0;
  today = new Date();
  listaUsuario:Usuario[]=[]

  edicion: boolean = false;


  constructor(
    private rS:reseñaservice,
    private uS: usuarioservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
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
      fkAutor:['', Validators.required],
      fkReceptor:['', Validators.required],
      idReseña: [0],
      puntaje: ['', Validators.required],
      fecha: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.res.idReseña = this.form.value.idReseña;
      this.res.fecha = this.form.value.fecha;
      this.res.puntaje = this.form.value.puntaje;
      this.res.comentario = this.form.value.comentario;
      this.res.autor = new Usuario();
      this.res.receptor = new Usuario();
      this.res.autor.idUsuario = this.form.value.fkAutor;
      this.res.receptor.idUsuario = this.form.value.fkReceptor;
      

      if (this.edicion) {
        this.rS.update(this.res).subscribe(() => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.res).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
      this.router.navigate(['resenas']);
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
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idReseña: new FormControl(data.idReseña),
          fecha: new FormControl(data.fecha),
          puntaje: new FormControl(data.puntaje),
          comentario: new FormControl(data.comentario),
          fkAutor:new FormControl(data.autor.idUsuario),
          fkReceptor:new FormControl(data.receptor.idUsuario)
        });
      });
    }
  }

}
