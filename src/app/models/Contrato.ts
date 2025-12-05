import { Propiedad } from "./Propiedad"
import { Usuario } from "./Usuario"

export class Contrato{
idContrato:number=0    
fechaInicio:Date=new Date()
fechaFin:Date=new Date()
pdf:string=""
estado:string=""
usuario:Usuario=new Usuario()
propiedad:Propiedad=new Propiedad()
}