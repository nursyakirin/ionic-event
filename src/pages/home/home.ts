import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EventProvider} from '../../providers/event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
eventList
  constructor(public navCtrl: NavController, public eventProvider: EventProvider) {

  }

 openLogin(){
 	this.navCtrl.push('LoginPage')
 }
 openRegister(){
 	this.navCtrl.push('RegisterPage')
 }
 openAddEvent(){
 	this.navCtrl.push('AddEventPage')
 }
ionViewDidLoad() {
this.eventProvider.getEventList().on("value", eventListSnapshot => {
this.eventList = [];
eventListSnapshot.forEach(snap => {
this.eventList.push({
id: snap.key,
name: snap.val().name,
price: snap.val().price,
date: snap.val().date
});
return false;
});
});
}

}
