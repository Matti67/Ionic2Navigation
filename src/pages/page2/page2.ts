import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

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
  url: string;
  parameter1: string;
  parameter2: string;
  param1: string;
  param2: string;
  browser: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  this.userInfo = navParams.get('data');
  this.parameter1 = navParams.get('name');
  this.parameter2 = navParams.get('age');
  this.param1 = navParams.get('country');
  this.param2 = navParams.get('profilePic');
  console.log(this.navParams.get('name')); 
  }
  openWebpage(url: string) {
  const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
   // browser:InAppBrowser = new InAppBrowser();
    browser = this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
}
