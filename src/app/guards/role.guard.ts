import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';

export const roleGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //esto debe estar en otro lado
    // sessionStorage.setItem('role', 'admin');
    // no existe

    const router = inject(Router);
    const myRole = sessionStorage.getItem('role');

    const roles = route.data['roles'];
    console.log('roleGuarda');
    for (const role of roles) {
      if (role === myRole) {
        return true;
      }
    }

    router.navigate(['/forbidden']);
    return false;
  }
