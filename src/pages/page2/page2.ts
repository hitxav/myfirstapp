import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';
/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
  nextPage3(){this.navCtrl.push(Page3Page);}
  nextPage4(){this.navCtrl.push(Page4Page);}
}
