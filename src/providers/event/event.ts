
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {
	public eventListRef: firebase.database.Reference;

  constructor() {
    this.eventListRef = firebase
    .database()
    .ref('/eventList');
}
	createEvent(eventName: string, eventDate:string, eventPrice: number, eventCost: number
		):firebase.database.ThenableReference{
		return this.eventListRef.push({ 
			name: eventName, 
			date: eventDate, 
			price: eventPrice * 1,
			cost: eventCost * 1
		});
	}

    getEventDetail(eventId:string): firebase.database.Reference {
    	return this.eventListRef.child(eventId);
    }
    getEventList(): firebase.database.Reference {
    	return this.eventListRef;
    }
  }

