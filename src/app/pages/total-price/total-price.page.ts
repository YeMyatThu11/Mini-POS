import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.page.html',
  styleUrls: ['./total-price.page.scss'],
})
export class TotalPricePage implements OnInit {
  totalBalance = 0;
  totalResult = 0;
  promotion= 0;
  tax= 340;
  totalData: any;
  constructor() { }

  ngOnInit() {
    
    this.totalData = [
      {
        name: 'Orange',
        qty: 3,
        totalPrice: 2000,
      },
      {
        name: 'Apple',
        qty: 5,
        totalPrice: 4000,
      },
      {
        name: 'Mango',
        qty: 3,
        totalPrice: 5000,
      }
    ]
  
    for (let data of this.totalData) {
      this.totalBalance = this.totalBalance + data.totalPrice;
      this.totalResult = this.totalBalance + this.promotion + this.tax;
    }
    console.log(this.totalBalance);
    console.log(this.totalResult);

  }

}