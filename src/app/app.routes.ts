import {Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {NotFoundComponent} from './common/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    title: 'ABC'
  },

  {
    path: 'children',
    loadChildren: () => import('./components/list/list.routes'),
  },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.routes'),
  },

  {
    path: 'login',
    redirectTo: 'children',
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];
