import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterLink
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  private router: Router = inject(Router);

  linkHome(){
    this.router.navigateByUrl('/pages/home');
  }

  linkAbout(){
    this.router.navigateByUrl('/pages/about');
  }

  linkContact(){
    this.router.navigateByUrl('/pages/contact');
  }

  linkForm(){
    this.router.navigateByUrl('/pages/form/1');
  }
}
