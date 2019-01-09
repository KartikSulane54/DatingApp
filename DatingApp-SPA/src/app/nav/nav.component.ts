import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authservice: AuthService, private alertif: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model).subscribe(
      next => { this.alertif.success('Logged in Successfully'); },
      error => { this.alertif.error('Failed To Login'); }
    );
  }

  loggedIn() {
    return this.authservice.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertif.message('Logging Out');
  }
}
