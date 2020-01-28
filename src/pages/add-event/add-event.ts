import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventProvider} from '../../providers/event/event';
/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

	eventName: string =''
	eventPrice: number = 0
	eventCost: number = 0
	eventDate: string = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public eventProvider:EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }
  createEvent(){
  	this.eventProvider.createEvent(this.eventName,
  		this.eventDate,
  		this.eventPrice,
  		this.eventCost)
  	.then(() =>{
  		this.navCtrl.pop()
  	})
  }
}
