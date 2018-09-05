import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  userInfo: any;
  parameter1: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.userInfo = navParams.get('data');
  this.parameter1 = navParams.get('name');
  console.log(this.navParams.get('name')); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
