import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Visita } from '../../../models/Visita';
import { Usuario } from '../../../models/Usuario';
import { Propiedad } from '../../../models/Propiedad';
import { usuarioservice } from '../../../services/usuarioservice';
import { propiedadservice } from '../../../services/propiedadservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { visitaservice } from '../../../services/visitaservice'; 

@Component({
  selector: 'app-visitainsertar',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './visitainsertar.html',
  styleUrl: './visitainsertar.css',
  standalone: true,
})
export class Visitainsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  vis: Visita = new Visita();
  id: number = 0;
  
  listaUsuario: Usuario[] = []; 
  listaPropiedad: Propiedad[] = []; 

  edicion: boolean = false;

  constructor(
    private vS: visitaservice,
    private uS: usuarioservice,
    private pS: propiedadservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Cargar listas foráneas
    this.uS.list().subscribe(data => {
      this.listaUsuario = data;
    });
    this.pS.list().subscribe(data => {
      this.listaPropiedad = data;
    });
    
    // 2. Cargar parámetros de ruta y modo edición
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    // 3. Inicializar formulario
    this.form = this.formBuilder.group({
      idVisita: [0], 
      fkUsuario: ['', Validators.required],
      fkPropiedad: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required], 
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.vis.idVisita = this.form.value.idVisita;
      this.vis.fecha = this.form.value.fecha;
      this.vis.estado = this.form.value.estado;
      this.vis.usuario = new Usuario(); 
      this.vis.usuario.idUsuario = this.form.value.fkUsuario;
      this.vis.propiedad = new Propiedad();
      this.vis.propiedad.idPropiedad = this.form.value.fkPropiedad;

      if (this.edicion) {
        this.vS.update(this.vis).subscribe(() => {
          this.vS.list().subscribe((data) => {
            this.vS.setList(data);
          });
        });
      } else {
        this.vS.insert(this.vis).subscribe(() => {
          this.vS.list().subscribe((data) => {
            this.vS.setList(data);
          });
        });
      }
      this.router.navigate(['visitas']);
    }
  }

  init() {
    if (this.edicion) {
      // Usamos any para evitar problemas de tipos/ñ
      this.vS.listId(this.id).subscribe((data: any) => { 
        this.form = new FormGroup({
          idVisita: new FormControl(data.idVisita),
          fecha: new FormControl(data.fecha),
          usuario:new FormControl(data.usuario.idUsuario),
          propiedad:new FormControl(data.propiedad.idPropiedad) 
        });
      });
    }
  }
}