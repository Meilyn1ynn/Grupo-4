import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Usuario } from '../../../models/Usuario';
import { usuarioservice } from '../../../services/usuarioservice';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-usuarioinsertar',
  imports: [ MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,],
  templateUrl: './usuarioinsertar.html',
  styleUrl: './usuarioinsertar.css',
})
export class Usuarioinsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  usu: Usuario = new Usuario();
  id: number = 0;
  today = new Date();

  edicion: boolean = false;


  constructor(
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

    this.form = this.formBuilder.group({

      idUsuario: [''],
      username: ['', Validators.required],
      apellidoUsuario: ['', Validators.required],
      dniUsuario: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      edadUsuario:['', Validators.required],
      fotoUsuario:['', Validators.required],
      estadoCivilUsuario:['', Validators.required],
      enabled:[false, Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.usu.idUsuario = this.form.value.idUsuario;
      this.usu.username = this.form.value.username;
      this.usu.apellidoUsuario = this.form.value.apellidoUsuario;
      this.usu.dniUsuario = this.form.value.dniUsuario;
      this.usu.correo = this.form.value.correo;
      this.usu.password = this.form.value.password;
      this.usu.edadUsuario = this.form.value.edadUsuario;
      this.usu.fotoUsuario = this.form.value.fotoUsuario;
      this.usu.estadoCivilUsuario = this.form.value.estadoCivilUsuario;
      this.usu.enabled = this.form.value.enabled;
 

      if (this.edicion) {
        this.uS.update(this.usu).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.usu).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['usuarios']);
    }
  }
  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idUsuario: new FormControl(data.idUsuario),
          username: new FormControl(data.username),
          apellidoUsuario: new FormControl(data.apellidoUsuario),
          dniUsuario: new FormControl(data.dniUsuario),
          correo: new FormControl(data.correo),
          password:new FormControl(data.password),
          edadUsuario:new FormControl(data.edadUsuario),
          fotoUsuario: new FormControl(data.fotoUsuario),
          estadoCivilUsuario: new FormControl(data.estadoCivilUsuario),
          enabled:new FormControl(data.enabled),
          
        });
      });
    }
  }

}
