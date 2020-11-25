import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-item-home',
  templateUrl: './add-item-home.page.html',
  styleUrls: ['./add-item-home.page.scss'],
})
export class AddItemHomePage implements OnInit {
  addItemToCart:FormGroup;
  
  constructor(
    public modalController:ModalController,
    private formBuilder:FormBuilder,
   
  ) { }

  ngOnInit() {
    this.addItemToCart=this.formBuilder.group({
      code:new FormControl ("",[
        // Valida
      ])
    })
  }

}
