import { Component } from '@angular/core';
import { Contratolistar } from './contratolistar/contratolistar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-contrato',
  imports: [RouterOutlet,Contratolistar,Menu],
  templateUrl: './contrato.html',
  styleUrl: './contrato.css',
})
export class Contrato {
  constructor(public route:ActivatedRoute){}

}
