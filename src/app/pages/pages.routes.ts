import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormComponent} from './form/form.component';

export default [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },

  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },

  {
    path: 'form/:id',
    component: FormComponent,
    title: 'Form'
  },
];
