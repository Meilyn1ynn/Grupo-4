import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import{pagoservice} from '../../../pagoservice'
import { Pago } from '../../../models/Pago';

@Component({
  selector: 'app-pagosearcf',
  imports: [],
  templateUrl: './pagosearcf.html',
  styleUrl: './pagosearcf.css',
})
export class Pagosearcf {
  searchForm: FormGroup;
  pagos:Pago=[];
  resultadosvisibles=false;

  constructor(
    private fb:FormBuilder,
    private Pagoservice:pagoservice
  ){
    this.searchForm=this.fb.group({
      criterio:['estado'],
      valor:['']
    });
  }

  buscar():void{
    const criterio=this.searchForm.value.criterio;
    const valor=this.searchForm.value.valor;

    if(!valor){
      alert('Ingrese un valor para buscar');
      return;
    }

    switch(criterio){
      case 'estado':
        this.buscarPorEstado(valor);
        break;
      case 'metodo':
        this.buscarPorMetodo(valor);
      case 'monto':
        this.buscarPorMontoMinimo(parseFloat(valor));
        break;
      default:
        this.cargarTodos();
    }
  }

  buscarPorEstado(estado:string):void{
    this.Pagoservice.findByEstado(estado).subscribe({
      next:(data)=>{
        this.pagos=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error en la busqueda',err)
    });
  }

  buscarPorMetodo(metodo:string):void{
    this.Pagoservice.findByEstado(metodo).subscribe({
      next: (data)=>{
        this.pagos=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error en la busqueda',err)
    });
  }

  buscarPorMontoMinimo(monto:number):void{
    this.Pagoservice.findByEstado(monto).suscribe({
      next:(data)=>{
        this.pagos=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error en la busqueda',err)
    });

  }

  cargarTodos():void{
    this.Pagoservice.list().suscribe({
      next:(data)=>{
        this.pagos=data;
        this.resultadosvisibles=true;
      },
      error:(err)=>console.error('Error al cargar',err)
    });
  }

  limpiar():void{
    this.searchForm.reset({criterio:'estado',valor:''});
    this.pagos=[];
    this.resultadosvisibles=false;
  }
}
