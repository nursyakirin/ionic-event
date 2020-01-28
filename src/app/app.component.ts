import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

 let config ={

    apiKey: "AIzaSyB-s0o9VMuAB7haHFGtHW7w4ewD2VCs8Rc",
    authDomain: "event-app-9455c.firebaseapp.com",
    databaseURL: "https://event-app-9455c.firebaseio.com",
    projectId: "event-app-9455c",
    storageBucket: "event-app-9455c.appspot.com",
    messagingSenderId: "500569675037"
  };

  firebase.initializeApp(config);
  this.rootPage = HomePage
  });
  }
  }
