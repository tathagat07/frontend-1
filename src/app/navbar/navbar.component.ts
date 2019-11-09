import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private productName: string;

  constructor(private router: Router) { }

  ngOnInit() {
      
  }

  toSearch(event){
    this.productName = event.target.value;
    this.router.navigate(['./search',{name:this.productName}]);
  }

}
