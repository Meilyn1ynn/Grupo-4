import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Loginservice } from '../services/loginservice';

export const SeguridadGuard: CanActivateFn = (route,state) => {
  const lService=inject(Loginservice)
    const router=inject(Router)
    const rpta=lService.verificar();
    if(!rpta){
      router.navigate(['/login']);
      return false;
    }
    return rpta;
}
