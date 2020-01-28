import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	email = ''
 	password = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 openLogin(){
 	this.authProvider.loginUser(this.email,this.password)
 	.then(()=>{
 		console.log("User successfully logged in!")
 	}).catch((err)=>{

 	})
 }
}
