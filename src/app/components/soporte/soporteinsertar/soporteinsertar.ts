import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Soporte } from '../../../models/Soporte';
import { Usuario } from '../../../models/Usuario';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { soporteservice } from '../../../services/soporteservice'; // Importar tu servicio

@Component({
  selector: 'app-soporteinsertar',
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
  templateUrl: './soporteinsertar.html',
  styleUrl: './soporteinsertar.css',
  standalone: true, // Asegúrate de que esto esté presente si usas 'imports'
})
export class Soporteinsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  sop: Soporte = new Soporte();
  id: number = 0;
  listaUsuario: Usuario[] = []; // Para el dropdown de usuarios

  edicion: boolean = false;

  constructor(
    private sS: soporteservice, // Servicio de Soporte
    private uS: usuarioservice,  // Servicio de Usuario
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Cargar lista de usuarios
    this.uS.list().subscribe((data) => {
      this.listaUsuario = data;
    });

    // 2. Cargar parámetros de ruta y modo edición
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    // 3. Inicializar formulario
    this.form = this.formBuilder.group({
      idSoporte: [0], 
      fkUsuario: ['', Validators.required], 
      mensaje: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.sop.idSoporte = this.form.value.idSoporte;
      this.sop.mensaje = this.form.value.mensaje;
      this.sop.fecha = this.form.value.fecha;
      this.sop.estado = this.form.value.estado;
      this.sop.usuario = new Usuario(); 
      this.sop.usuario.idUsuario = this.form.value.fkUsuario;

      if (this.edicion) {
        this.sS.update(this.sop).subscribe(() => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data); 
          });
        });
      } else {
        this.sS.insert(this.sop).subscribe(() => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data);
          });
        });
      }
       this.router.navigate(['soporte']);
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
      this.sS.listId(this.id).subscribe((data: any) => {
        this.form = new FormGroup({
          idSoporte: new FormControl(data.idSoporte),
          mensaje: new FormControl(data.mensaje),
          estado: new FormControl(data.estado),
          fecha: new FormControl(data.fecha),
          usuario: new FormControl(data.usuario.idUsuario),
        });
      });
    }
  }
}