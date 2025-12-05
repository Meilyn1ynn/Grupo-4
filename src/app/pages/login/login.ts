import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Loginservice } from '../../services/loginservice';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtRequestDTO } from '../../models/jwtRequestDTO';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, RouterLink, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  constructor(
    private loginService: Loginservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  username: string = '';
  password: string = '';
  remember: boolean = false;
  mensaje: string = '';
  ngOnInit(): void {}
  login() {
    let request = new JwtRequestDTO();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe(
      (data: any) => {
        sessionStorage.setItem('token', data.jwttoken);
        this.router.navigate(['/menus']);
      },
      (error) => {
        this.mensaje = 'Credenciales incorrectas!';
        this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
      }
    );
  }
}
