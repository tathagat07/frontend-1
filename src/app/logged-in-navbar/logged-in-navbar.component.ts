import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {
 
  public notOnPayment:Boolean = false;
  constructor(private authService:AuthenticationService, private router:Router, private payment:PaymentComponent) { }

  ngOnInit() {
    this.notOnPayment = this.payment.notOnPayment;
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate([''])
  }
}
