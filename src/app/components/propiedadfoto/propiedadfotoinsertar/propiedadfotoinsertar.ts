import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PropiedadFoto } from '../../../models/PropiedadFoto';
import { Propiedad } from '../../../models/Propiedad';
import { propiedadfotoservice } from '../../../services/propiedadfotoservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { propiedadservice } from '../../../services/propiedadservice';

@Component({
  selector: 'app-propiedadfotoinsertar',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './propiedadfotoinsertar.html',
  styleUrl: './propiedadfotoinsertar.css',
})
export class Propiedadfotoinsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  foto: PropiedadFoto = new PropiedadFoto();
  id: number = 0;
  today = new Date();
  listaPropiedad:Propiedad[]=[]

  edicion: boolean = false;


  constructor(
    private fS:propiedadfotoservice,
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

    this.pS.list().subscribe(data=>{
    this.listaPropiedad=data;
    });




    this.form = this.formBuilder.group({
      fkPropiedad:['',Validators.required],
      idFoto: [0],
      url: ['',Validators.required]
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.foto.idFoto = this.form.value.idFoto;
      this.foto.url = this.form.value.url;
      this.foto.propiedad = new Propiedad();
      this.foto.propiedad.idPropiedad = this.form.value.fkPropiedad;
      

      if (this.edicion) {
        this.fS.update(this.foto).subscribe(() => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      } else {
        this.fS.insert(this.foto).subscribe((data) => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      }
      this.router.navigate(['propiedades/fotos']);
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
      this.fS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idFoto: new FormControl(data.idFoto),
          url: new FormControl(data.url),
          propiedad:new FormControl(data.propiedad.idPropiedad)
        });
      });
    }
  }

}
