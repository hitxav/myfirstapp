import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {  Page2Page } from '../page2/page2';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }
  nextPage2(){this.navCtrl.setRoot(Page2Page);}
}