import { Component, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Home,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoSI');
}
