import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafPage } from '../saf/saf';

/**
 * Generated class for the SocietyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-society',
  templateUrl: 'society.html',
})
export class SocietyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietyPage');
  }


  goToSafPage(){
    this.navCtrl.push(SafPage)


  }



}
