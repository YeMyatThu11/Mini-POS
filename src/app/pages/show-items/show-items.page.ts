import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddItemsPage } from "../add-items/add-items.page";
import { UpdateItemsPage } from "../update-items/update-items.page";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-show-items",
  templateUrl: "show-items.page.html",
  styleUrls: ["show-items.page.scss"],
})
export class ShowItemsPage implements OnInit {
  dbData: any;
  updateData: any;
  dataReturned: any;
  constructor(
    public modalController: ModalController,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.storageService.getUserdata().then((res) => {
      this.dbData = res;
    });
  }

  async addItem() {
    const modal = await this.modalController.create({
      component: AddItemsPage,
    });
    await modal.present();
    modal.onDidDismiss().then((data)=> {
      this.storageService.getUserdata().then((res) => {
        this.dbData = res;
      });
    })
  }

  async updateItem(data) {
    const modal = await this.modalController.create({
      component: UpdateItemsPage,
      componentProps: {
        code: data.code,
        name: data.name,
        price: data.price,
      },
    });

     await modal.present();
     modal.onDidDismiss().then((data)=> {
      this.storageService.getUserdata().then((res) => {
        this.dbData = res;
      });
    })
  }
}
