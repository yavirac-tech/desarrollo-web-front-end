import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ListComponent} from './form/list/list.component';
import {tokenGuard} from '../guards/token.guard';
import {roleGuard} from '../guards/role.guard';
import {UserComponent} from './user/user.component';

export default [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
    // canActivate: [tokenGuard]
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    // canActivate: [roleGuard],
    data: {roles: ['admin']}
  },

  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
    // canActivate: [tokenGuard,roleGuard],
    data: {roles: ['guess']}
  },

  {
    path: 'form/list',
    component: ListComponent,
    title: 'Form'
  },

  {
    path: 'users',
    component: UserComponent
  },
];
