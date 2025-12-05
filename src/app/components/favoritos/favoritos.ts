import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Favoritoslistar } from './favoritoslistar/favoritoslistar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-favoritos',
  imports: [RouterOutlet,Favoritoslistar,Menu],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  constructor(public route:ActivatedRoute){}

}
