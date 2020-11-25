import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

export interface Item{
  code: string,
  name: string,
  price:number,
}
const ITEMS_KEY = 'items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  // Create
  addItem( item:Item):Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
         return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  // Read
  getItems():Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }
  
  // Update
  updateItem( item:Item) : Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items|| items.length===0) {
        return null;
      }
      let newItems: Item[] = [];
      for (let i of items) {
        if (i.code === item.code) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
  // Delete
  deleteItem( code:string):Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];
      for (let i of items) {
        if (i.code !== code) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
