import { Propiedad } from "./Propiedad"
import { Usuario } from "./Usuario"

export class Visita{
idVisita:number=0
usuario:Usuario=new Usuario()
propiedad:Propiedad=new Propiedad()
fecha:Date=new Date()
estado:string=""
}