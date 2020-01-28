
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

loginUser(email: string, password: string): Promise<any> {
return firebase.auth().signInWithEmailAndPassword(email, password);
}

signupUser(email: string, password: string): Promise<any> {
return firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then(newUser => {
firebase
.database()
.ref(`/userProfile/${newUser.uid}/email`)
.set(email);
})
.catch(error => {
console.error(error);
throw new Error(error);
});
}
}
