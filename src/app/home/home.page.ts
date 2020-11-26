import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import {AddItemHomePage} from '../add-item-home/add-item-home.page';
import {EditItemHomePage} from '../edit-item-home/edit-item-home.page';
import {BuyItemService} from '../services/buy-item.service';
import { ActionSheetController } from '@ionic/angular';
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
  constructor(
    private barcodeScanner: BarcodeScanner,
    private modalController: ModalController,
    private buyItemService: BuyItemService,
    private actionSheetController: ActionSheetController) {}

  ngOnInit() {}
  async showModal(){
    const modal=await this.modalController.create({
      component:AddItemHomePage,
      cssClass: 'my-modalCss'
    });
    modal.onDidDismiss().then(data=>{
      this.buyItemList=this.buyItemService.getItemList();
      console.log(this.buyItemList);
    })
    return await modal.present();
  }
  async showEditModal(){
    const modal=await this.modalController.create({
      component:EditItemHomePage,
      cssClass: 'my-modalCss'
    });
    modal.onDidDismiss().then(data=>{
      this.buyItemList=this.buyItemService.getItemList();
      console.log(this.buyItemList);
    })
    return await modal.present();
  }
  async editSaleItem(item){
    
    const actionSheet =await this.actionSheetController.create({
      header:'Options',
      cssClass: 'editText',
      buttons: [
       
        {
          text: 'Edit',
          icon: 'pencil-outline',
          cssClass: 'editIcon',
          handler: () => {
             this.showEditModal()
            }
          },
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash-outline',
            cssClass: 'editIcon',
            handler: () => {
               this.buyItemService.popItem(item); 
              }
            },
      ]
    });
    await actionSheet.present();
   actionSheet.onDidDismiss().then(data=>{
     this.buyItemList=this.buyItemService.getItemList();
     console.log(this.buyItemList);
   })
  }
  
}
