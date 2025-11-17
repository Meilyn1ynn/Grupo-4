import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{pago} from '../../../pagoservice';
import { contratoservice } from '../../,,/services/contratoservice';
import { Pago } from '../../../models/Pago';
import { Contrato } from '../../../models/Contrato';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-pagoinsertar',
  imports: [],
  templateUrl: './pagoinsertar.html',
  styleUrl: './pagoinsertar.css',
})
export class Pagoinsertar implements OnInit {
  pagoForm: FormGroup;
  contratos:Contrato[]=[];
  metodospago=['Tarjeta','Transferencia','Efectivo','Yape','Plin'];
  estados=['Pendiente','Completado','Rechazado'];

  constructor(
    private fb:FormBuilder,
    private pagoservice:Pago,
    private contratoservice:contratoservice,
    private router:Router
  ){
    this.pagoForm=this.fb.group({
      contratos:[null,Validators.required],
      monto:[0,[Validators.required,Validators.min(0.01)]],
      fecha:[new Date().toISOString().split('T')[0],Validators.required],
      metodo:['',Validators.required],
      estados:['Pendiente',Validators.required]
    });

  }

  ngOnInit(): void {
      this.cargarContratos();
  }

  cargarContratos():void{
    this.contratoservice.list().subscribe({
      next:(data)=>this.contratos=data,
      error:(errr)=>console.error('Error al cargar contratos',errr)
    });
  }

  guardar():void{
    if(this.pagoForm.invalid){
      this.pagoForm.markAllAsTouched();
      return;
    }
    
    const pago:Pago={
      idPago:0,
      contrato:this.pagoForm.value.contrato,
      monto:this.pagoForm.value.fecha,
      metodo:this.pagoForm.value.metodo,
      estado:this.pagoForm.value.estados
    };

    this.pagoservice.insert(pago).subscribe({
      next:()=>{
        alert('Pago registrado exitosamente');
        this.router.navigate(['/pagos']);
      },
      error:(err)=>{
        console.error('Error al registrar el pago',err);
        alert('Error al registrar pago');
      }
    });
  }

  cancelar():void{
    this.router.navigate(['/pagos']);
  }

}
