import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Soportelistar } from './soportelistar/soportelistar'; // Asegúrate de importar
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-soporte',
  imports: [RouterOutlet, Soportelistar,Menu],
  templateUrl: './soporte.html',
  // No necesita styleUrl si no tiene estilos específicos
  standalone: true, // Asegúrate de que el componente padre sea standalone
})
export class Soporte {
  constructor(public route: ActivatedRoute) {}
}