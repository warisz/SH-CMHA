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
  added1 = false;
  added2=false;
  added3=false;
  added4=false;
  added5=false;
  score = 0;
  indNum1 = 0;
  indNum2 = 0;
  indNum3 = 0;
  indNum4 = 0;
  indNum5 = 0;

  q1(num){
    this.indNum1 = 1;
    if(this.added1 == false){
      this.score+=num;
      this.added1 = true;
    }
    console.log(this.score);

  }

  q2(num){
    this.indNum2 = 1;
    if(this.added2 == false){
      this.score+=num;
      this.added2 = true;
    }
    console.log(this.score);

  }

  q3(num){
    this.indNum3 = 1;
    if(this.added3 == false){
      this.score+=num;
      this.added3 = true;
    }
    console.log(this.score);

  }

  q4(num){
    this.indNum4 = 1;
    if(this.added4 == false){
      this.score+=num;
      this.added4 = true;
    }
    console.log(this.score);

  }

  q5(num){
    this.indNum5 = 1;
    if(this.added5 == false){
      this.score+=num;
      this.added5 = true;
    }
    console.log(this.score);
  }


}


