import { Component, OnInit } from '@angular/core';
import { StorageService, Item } from "../../services/storage.service";

import {  ModalController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {

  items: Item[] = [];
  newItem: Item = <Item>{};
  addForm: FormGroup;
  isSubmitted = false;
  constructor(
    private storageService: StorageService,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
  ) {
    
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      code : new FormControl("", [
        Validators.required,
      ]),
      name : new FormControl("", [
        Validators.required,
      ]),
      price : new FormControl("", [
        Validators.required,
      ]),
    });
    
  }
  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  cancel() {
      this.modalCtrl.dismiss();
  }
  async  addItem() {
    this.storageService.addItem(this.newItem).then((item) => {
      this.newItem = <Item>{};
      this.loadItems();
    });
    let alert =await  this.alertCtrl.create({
      header: 'Added Item',
      subHeader: 'successful',
      buttons: ['Save']
    });
    await  alert.present();
    this.modalCtrl.dismiss();
  }
  // Read
  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items;
    });
  }
  get errorControl() {
    return this.addForm.controls;
  }

}
