
import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginFormData: FormGroup;
  get userId() {
    return this.loginFormData.get("userId");
  }
  public errorMessages = {
    userId: [
      {
        type: "required",
        message: "Please Enter valid User ID",
      },
    ]
  }
  constructor(private FormBuilder:FormBuilder,private router:Router) { 
    this.loginFormData=this.FormBuilder.group({
      userId:["",[Validators.required,Validators.maxLength(20)]]
    });
  }
  public submit(){
    let userId=this.loginFormData.value.name;
    if(this.validateUser(userId)){
      this.router.navigate['home'];
    }
  }
  ngOnInit() {
  }
  validateUser(userId){ 
    return true;
  }
  
}
