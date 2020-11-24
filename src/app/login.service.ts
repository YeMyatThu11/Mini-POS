import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
export interface UserId{
  userID:string
}
const USERID_KEY="userId";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId:UserId[]=[];
  
  constructor(
    private storage: Storage,
  ) 
  {
      
   }
   addUserId(userId:UserId){
      this.storage.get(USERID_KEY).then(userIds=>{
        if(userIds){
          userIds.push(userId);
          return this.storage.set(USERID_KEY,userIds);
        }
        else{
          userIds.push("A001");
          return this.storage.set(USERID_KEY,userIds);
        }
      })
   }
   getUserId(){
     return this.storage.get(USERID_KEY).then((userIds)=>{
       return userIds;
     })
   }
}
