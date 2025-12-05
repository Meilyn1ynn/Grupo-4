import { Contrato } from "./Contrato"

export class Pago{
idPago:number=0
contrato:Contrato=new Contrato()
monto:number=0
fecha:Date=new Date()
metodo:string=""
estado:string=""
}