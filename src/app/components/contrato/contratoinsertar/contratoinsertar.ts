import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Contrato } from '../../../models/Contrato';
import { Usuario } from '../../../models/Usuario';
import { Propiedad } from '../../../models/Propiedad';
import { contratoservice } from '../../../services/contratoservice';
import { usuarioservice } from '../../../services/usuarioservice';
import { propiedadservice } from '../../../services/propiedadservice';

@Component({
  selector: 'app-contratoinsertar',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './contratoinsertar.html',
  styleUrl: './contratoinsertar.css',
})
export class contratoinsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  cont: Contrato = new Contrato();
  id: number = 0;
  today = new Date();
  listaUsuario: Usuario[] = [];
  listaPropiedad: Propiedad[] = [];

  edicion: boolean = false;

  constructor(
    private cS: contratoservice,
    private uS: usuarioservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pS: propiedadservice
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

    this.pS.list().subscribe((data) => {
      this.listaPropiedad = data;
    });

    this.form = this.formBuilder.group({
      fk: ['', Validators.required],
      fk2: ['', Validators.required],
      idContrato: [0],  
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      pdf: ['', Validators.required],
      estado: [false, Validators.required],
    });
  }

  aceptar(): void {
if (this.form.valid) {

      this.cont.idContrato = this.form.value.idContrato;
      this.cont.fechaInicio = this.form.value.fechaInicio;
      this.cont.fechaFin = this.form.value.fechaFin;
      this.cont.pdf = this.form.value.pdf;
      this.cont.estado = this.form.value.estado;
      this.cont.usuario = new Usuario(); 
      this.cont.usuario.idUsuario = this.form.value.fk; // Aquí toma el valor del Select
      this.cont.propiedad = new Propiedad();
      this.cont.propiedad.idPropiedad = this.form.value.fk2; // Aquí toma el valor del Select

      if (this.edicion) {
        this.cS.update(this.cont).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.cont).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['contratos']);
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idContrato: new FormControl(data.idContrato),
          fechaInicio: new FormControl(data.fechaInicio),
          fechaFin: new FormControl(data.fechaFin),
          pdf: new FormControl(data.pdf),
          estado: new FormControl(data.estado),
          fk: new FormControl(data.usuario.idUsuario),
          fk2: new FormControl(data.propiedad.idPropiedad),
        });
      });
    }
  }
}