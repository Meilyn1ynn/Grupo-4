import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Propiedadlistar } from './propiedadlistar/propiedadlistar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-propiedades',
  imports: [RouterOutlet, Propiedadlistar,Menu],
  templateUrl: './propiedades.html',
  styleUrl: './propiedades.css',
})
export class Propiedades {
  constructor(public route:ActivatedRoute){}

}
