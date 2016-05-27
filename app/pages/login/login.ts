import {Page, NavController} from 'ionic-angular';
import {CheckinPage} from '../checkin/checkin';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(public nav: NavController) {
  	this.nav = nav;

  }goToCheckin(){
  		this.nav.push(CheckinPage);
  	}
  
}
