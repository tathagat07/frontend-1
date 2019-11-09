import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate([''])
  }
}
