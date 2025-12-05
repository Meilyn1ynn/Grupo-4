import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Propiedadfotolistar } from './propiedadfotolistar/propiedadfotolistar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-propiedadfoto',
  imports: [RouterOutlet,Propiedadfotolistar,Menu],
  templateUrl: './propiedadfoto.html',
  styleUrl: './propiedadfoto.css',
})
export class Propiedadfoto {
  constructor(public route:ActivatedRoute){}

}
