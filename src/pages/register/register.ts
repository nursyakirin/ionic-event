import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
email = ''
password =''

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  openRegister(){
  	this.authProvider.signupUser(this.email,this.password)
  	.then(()=>{

 	}).catch((err)=>{
 		console.log(err);
 	})
  }
}
