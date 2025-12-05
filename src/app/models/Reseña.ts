import { Usuario } from "./Usuario"

export class Reseña{
idReseña:number=0
autor:Usuario=new Usuario()
receptor:Usuario=new Usuario()
puntaje:number=0
comentario:string=""
fecha:Date=new Date()
}