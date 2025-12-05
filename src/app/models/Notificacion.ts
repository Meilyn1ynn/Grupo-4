import { Usuario } from "./Usuario"

export class Notificacion{
id:number=0
usuario:Usuario=new Usuario()
titulo:string=""
mensaje:string=""
fecha:Date=new Date()
leida:string=""
}