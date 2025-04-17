import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';

export const tokenGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //esto debe estar en otro lado
    // sessionStorage.setItem('token', 'abc123');
    // no existe

    console.log('tokenGuard');
    const router = inject(Router);

    const token = sessionStorage.getItem('token');

    if (token == null) {
      router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
