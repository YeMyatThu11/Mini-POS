import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import {AddItemHomePage} from '../add-item-home/add-item-home.page';
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
  localItems = [
    {
      
      code: "6951334721625",
      name: "Happy Rose Tissue",
      price: 500,
    },
    {
     
      code: "6951334721735",
      name: "Malbro Gold Cigrette",
      price: 3000,
    },
    {
     
      code: "6951334721745",
      name: "Head and Shoulder",
      price: 2500,
    },
    {
      
      code: "10440015",
      name: "Happy Mammy Wet Tissue",
      price: 2500,
    },
  ];
  buyItemList = [];
  buyItem;
  scanData: {};
  options: BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner,private modalController: ModalController) {}

  ngOnInit() {}
  async showModal(){
    const modal=await this.modalController.create({
      component:AddItemHomePage
    });
    return await modal.present();
  }
  scan() {
    this.options = {
      prompt: "Scan your barcode",
    };
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.scanData = barcodeData;
        console.log(this.scanData);
        this.buyItem = this.doesItemExit(this.scanData);
        if (this.buyItem) {
          this.buyItemList.push(this.buyItem);
          let [buyItemObj] = this.buyItemList;
        }
      },
      (err) => {
        console.log("Error occured : " + err);
      }
    );
  }
  doesItemExit(item) {
    return this.localItems.find((i) => i.code == item.text);
  }
}
