import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { IncartProducts } from './incartProducts';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-incart-products',
  templateUrl: './incart-products.component.html',
  styleUrls: ['./incart-products.component.css']
})
export class IncartProductsComponent implements OnInit {

  incartProductArray=[];
  productQty=1;
  productTotal=0;
  totalAmount=0;
  emailId;
  private router = ActivatedRoute;
  private i=1;
  private total= [] ;
  constructor(private _productDetailsService: ProductDetailsService,private route:Router) { }

  ngOnInit() {
    
    this.emailId=localStorage.getItem('emailId');
    this._productDetailsService.getInProductList().subscribe(
      list =>{
        this.incartProductArray=list.map(item =>{ 
          return {
            $key:item.key,
          ...item.payload.val()

        };
       });
     });
    //  console.log(this.incartProductArray);
    //  for(var cart of this.incartProductArray){
    //    this.totalAmount+=cart.productPrice;
    //  }
     //console.log(this.totalAmount);
  }
  increase(incart){
    console.log("In function increase()");
    if(incart.productQuantityIncart <5){
      incart.productQuantityIncart++;
      // this.total=this.total+incart.productPrice;
      this._productDetailsService.updateIncartProduct(incart);
    }

  }

  isLogin(){

    let user = localStorage.getItem('emailId');
    console.log(user);
    
    if(user==null)
    this.route.navigate['/login-page'];
  }

  addPrice(incart){
    this.total.push(incart.productPrice*incart.productQuantityIncart);
    console.log(this.total);
   return incart.productPrice*incart.productQuantityIncart;
  }
  
  serialNumber(){
    
    return this.i++;

  }
  getTotal(){
    let sum =0 ;
    if(this.total.length!==0){
      this.total.forEach(element => {
        sum = sum + element;
      });
      this.total = [] ;
    }
    else
      return 0;
    return sum;
  }

  decrease(incart){
    console.log("In function decrease()");
    if(incart.productQuantityIncart >1){
      incart.productQuantityIncart--;
      // this.total=(this.total)-incart.productPrice;
      this._productDetailsService.updateIncartProduct(incart);
    }

  }
  onDelete($key){
    console.log("delete incart",$key);
    
this._productDetailsService.deleteIncartProduct($key);

  }
}
