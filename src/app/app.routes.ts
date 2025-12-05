import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './components/menu/menu';
import { Caracteristicas } from './pages/caracteristicas/caracteristicas';
import { Precios } from './pages/precios/precios';
import { Testimonios } from './pages/testimonios/testimonios';
import { Login } from './pages/login/login';
import { contratoinsertar } from './components/contrato/contratoinsertar/contratoinsertar';
import { Contratosearch } from './components/contrato/contratosearch/contratosearch';
import { Contrato } from './components/contrato/contrato';
import { Propiedades } from './components/propiedades/propiedades';
import { Usuarios } from './components/usuarios/usuarios';
import { Usuarioinsertar } from './components/usuarios/usuarioinsertar/usuarioinsertar';
import { Propiedadinsertar } from './components/propiedades/propiedadinsertar/propiedadinsertar';
import { Favoritos } from './components/favoritos/favoritos';
import { Favoritosinsertar } from './components/favoritos/favoritosinsertar/favoritosinsertar';
import { Notificacion } from './components/notificacion/notificacion';
import { Notificacioninsertar } from './components/notificacion/notificacioninsertar/notificacioninsertar';
import { Pago } from './components/pago/pago';
import { Pagoinsertar } from './components/pago/pagoinsertar/pagoinsertar';
import { Propiedadfoto } from './components/propiedadfoto/propiedadfoto';
import { Propiedadfotoinsertar } from './components/propiedadfoto/propiedadfotoinsertar/propiedadfotoinsertar';
import { Resenas } from './components/resenas/resenas';
import { Resenasinsertar } from './components/resenas/resenasinsertar/resenasinsertar';
import { Soporte } from './components/soporte/soporte';
import { Soporteinsertar } from './components/soporte/soporteinsertar/soporteinsertar';
import { Visita } from './components/visita/visita';
import { Visitainsertar } from './components/visita/visitainsertar/visitainsertar';
import { SeguridadGuard } from './guard/seguridad-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // páginas públicas
  { path: 'home', component: Home },
  { path: 'caracteristicas', component: Caracteristicas },
  { path: 'precios', component: Precios },
  { path: 'testimonios', component: Testimonios },
  
  { path: 'login', component: Login },


    {
    path: 'contratos',
    component: Contrato,
      children: [
      { path: 'news', component: contratoinsertar},
      { path: 'edits/:id', component: contratoinsertar },
      {path:'searchs',component:Contratosearch}

    ],
    },

    {
       
    path: 'usuarios',
    component: Usuarios,
      children: [
      { path: 'news', component: Usuarioinsertar },
      { path: 'edits/:id', component: Usuarioinsertar },

    ],
    },

    {
       
    path: 'propiedades',
    component: Propiedades,
      children: [
      { path: 'news', component: Propiedadinsertar },
      { path: 'edits/:id', component: Propiedadinsertar },
      {path:'searchs',component:Contratosearch}
    ],
    },

    {
       
    path: 'favoritos',
    component: Favoritos,
      children: [
      { path: 'news', component: Favoritosinsertar },
      { path: 'edits/:id', component: Favoritosinsertar },
    ],
    },

    {   
    path: 'notificaciones',
    component: Notificacion,
      children: [
      { path: 'news', component: Notificacioninsertar },
      { path: 'edits/:id', component: Notificacioninsertar },
    ],
    },


    {  
    path: 'pagos',
    component: Pago,
      children: [
      { path: 'news', component: Pagoinsertar },
      { path: 'edits/:id', component: Pagoinsertar },
    ],
    },

    {  
    path: 'propiedades/fotos',
    component: Propiedadfoto,
      children: [
      { path: 'news', component: Propiedadfotoinsertar },
      { path: 'edits/:id', component: Propiedadfotoinsertar },
    ],
    },

    {  
    path: 'resenas',
    component: Resenas,
      children: [
      { path: 'news', component: Resenasinsertar },
      { path: 'edits/:id', component: Resenasinsertar },
    ],
    },

    {  
    path: 'soporte',
    component: Soporte,
      children: [
      { path: 'news', component: Soporteinsertar },
      { path: 'edits/:id', component: Soporteinsertar },
    ],
    },

    {  
    path: 'visitas',
    component: Visita,
      children: [
      { path: 'news', component: Visitainsertar },
      { path: 'edits/:id', component: Visitainsertar },
    ],
    },
    {path: 'homes',
    component: Home,
        canActivate: [SeguridadGuard],
    },
    {
      path: 'menus',
      component: Menu,
      canActivate: [SeguridadGuard] 
    }
    
];
