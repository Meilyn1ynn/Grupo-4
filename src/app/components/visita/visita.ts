import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Visitalistar } from './visitalistar/visitalistar'; // Asegúrate de importar
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-visita',
  imports: [RouterOutlet, Visitalistar, Menu],
  templateUrl: './visita.html',
  standalone: true,
})
export class Visita {
  constructor(public route: ActivatedRoute) {}
}