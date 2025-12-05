import { Usuario } from "./Usuario"

export class Propiedad{
idPropiedad:number=0
titulo:string=""
descripcion:string=""
direccion:string=""
distrito:string=""
precio:number=0
habitaciones:number=0
fechaPublicacion:Date=new Date()
usuario: Usuario = new Usuario();
}