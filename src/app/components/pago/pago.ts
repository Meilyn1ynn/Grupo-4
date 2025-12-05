import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Pagolistar } from './pagolistar/pagolistar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-pago',
  imports: [RouterOutlet, Pagolistar,Menu],
  templateUrl: './pago.html',
  styleUrl: './pago.css',
})
export class Pago {
  constructor(public route:ActivatedRoute){}

}
