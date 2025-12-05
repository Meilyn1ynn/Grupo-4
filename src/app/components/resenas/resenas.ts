import { Component } from '@angular/core';
import { Resenaslistar } from './resenaslistar/resenaslistar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-resenas',
  imports: [RouterOutlet,Resenaslistar,Menu],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css',
})
export class Resenas {
  constructor(public route:ActivatedRoute){}

}
