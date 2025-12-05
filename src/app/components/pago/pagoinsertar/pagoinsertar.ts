import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Pago } from '../../../models/Pago';
import { Contrato } from '../../../models/Contrato';
import { Pagoservices } from '../../../services/pagoservice';
import { contratoservice } from '../../../services/contratoservice';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pagoinsertar',
  imports: [MatFormFieldModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatRadioModule,
    ],
  templateUrl: './pagoinsertar.html',
  styleUrl: './pagoinsertar.css',
})
export class Pagoinsertar implements OnInit{
  form: FormGroup = new FormGroup({});
  pago: Pago = new Pago();
  id: number = 0;
  today = new Date();
  listaContrato:Contrato[]=[]

  edicion: boolean = false;


  constructor(
    private pS: Pagoservices,
    private cS: contratoservice,
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

    this.cS.list().subscribe(data=>{
      this.listaContrato=data;
    });





    this.form = this.formBuilder.group({
      fkContrato:['', Validators.required],
      idPago: [0],
      monto: ['', Validators.required],
      fecha: ['', Validators.required],
      metodo: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.pago.idPago = this.form.value.idPago;
      this.pago.monto = this.form.value.monto;
      this.pago.contrato = new Contrato();
      this.pago.contrato.idContrato = this.form.value.fkContrato;
      this.pago.fecha = this.form.value.fecha;
      this.pago.metodo = this.form.value.metodo;
      this.pago.estado = this.form.value.estado;
      


      

      if (this.edicion) {
        this.pS.update(this.pago).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.pago).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pagos']);
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
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idPago: new FormControl(data.idPago),
          monto: new FormControl(data.monto),
          contrato: new FormControl(data.contrato.idContrato),
          fecha: new FormControl(data.fecha),
          metodo: new FormControl(data.metodo),
          estado: new FormControl(data.estado)
        });
      });
    }
  }

}
