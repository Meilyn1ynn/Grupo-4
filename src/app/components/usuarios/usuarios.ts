import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Usuariolistar } from './usuariolistar/usuariolistar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-usuarios',
  imports: [RouterOutlet,Usuariolistar,Menu],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  constructor(public route:ActivatedRoute){}

}
