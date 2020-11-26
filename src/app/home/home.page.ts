import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import {AddItemHomePage} from '../add-item-home/add-item-home.page';
import {BuyItemService} from '../services/buy-item.service';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";
import { ItemsListsPage } from "../items-lists/items-lists.page";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
 
  buyItemList = [];
  scanData: {};
  options: BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner,private modalController: ModalController,private buyItemService: BuyItemService) {}

  ngOnInit() {}
  async showModal(){
    const modal=await this.modalController.create({
      component:AddItemHomePage
    });
    modal.onDidDismiss().then(data=>{
      this.buyItemList=this.buyItemService.getItemList();
      console.log(this.buyItemList);
    })
    return await modal.present();
  }
  
}
