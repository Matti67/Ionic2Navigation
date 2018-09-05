import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoPage2(){ 
  this.navCtrl.push(Page2Page, {
  name: "sundaravel",
  age: "24",
  country: "India",
  profilePic: "https://i1.wp.com/phonegappro.com/wp-content/uploads/2015/02/sundaravel.png"
  });
  }
 
}
