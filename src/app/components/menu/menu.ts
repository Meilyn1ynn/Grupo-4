import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Loginservice } from '../../services/loginservice';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule,MatToolbarModule,MatMenuModule,MatButtonModule,RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  role: string = '';
  usuario: string = '';

  constructor(private loginService: Loginservice) {}

  // Verifica si el usuario está logueado y actualiza el rol
  verificar() {
    this.role = this.loginService.showRole(); // Obtiene el rol actual
    return this.loginService.verificar(); // Retorna true si está logueado
  }

  cerrar() {
    sessionStorage.clear();
  }

  // --- Helpers de Roles ---

  isAdmin() {
    return this.role?.toUpperCase().trim() === 'ADMIN';
  }

  isPropietario() {
    return this.role?.toUpperCase().trim() === 'PROPIETARIO';
  }

  isInquilino() {
    return this.role?.toUpperCase().trim() === 'INQUILINO';
  }
 
}
