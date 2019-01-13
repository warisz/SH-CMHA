import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  send(){
    this.navCtrl.parent.select(1);
  }

  answer(num){
    if (num==1){
      console.log("1");
    }
    if (num==2){
      console.log("2");
    }
  }


}


