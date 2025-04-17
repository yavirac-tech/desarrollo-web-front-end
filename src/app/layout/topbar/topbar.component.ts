import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {RegisterService} from '../../pages/auth/register/register.service';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterLink
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  private router: Router = inject(Router);
  protected registerService = inject(RegisterService);

  ngOnInit(): void {
    this.test();
  }

  test() {
    console.log(this.registerService.user);
  }

  linkHome() {
    this.router.navigateByUrl('/pages/home');
  }

  linkAbout() {
    this.router.navigateByUrl('/pages/about');
  }

  linkContact() {
    this.router.navigateByUrl('/pages/contact');
  }

  linkForm() {
    this.router.navigateByUrl('/pages/form/list');
  }
}
