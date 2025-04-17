import {Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {UnauthorizedComponent} from './common/unauthorized/unauthorized.component';
import {ForbiddenComponent} from './common/forbidden/forbidden.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {tokenGuard} from './guards/token.guard';
import {MainComponent} from './layout/main/main.component';
import {BlankComponent} from './layout/blank/blank.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {UserComponent} from './pages/user/user.component';

export const routes: Routes = [
  //Authorized Routes
  {
    path: '',
    component: MainComponent,
    // canActivateChild: [tokenGuard],
    children: [
      {
        path: 'pages',
        // canActivate: [tokenGuard],
        loadChildren: () => import('./pages/pages.routes'),
      },

      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
    ]
  },

  //Unauthorized Routes
  {
    path: '',
    component: BlankComponent,
    // canActivateChild: [tokenGuard],
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes'),
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },

      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },

      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
    ]
  },

  {
    path: 'login',
    redirectTo: 'children',
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];
