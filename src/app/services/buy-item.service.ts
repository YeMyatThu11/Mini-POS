import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyItemService {
  itemList=[];
  constructor() { }
  addItemList(item){
    this.itemList=this.itemList.concat(item);
  }
  getItemList(){
    return this.itemList;
  }
}
