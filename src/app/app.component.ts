import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyBxHkoDf9FxeQSE9u97lDk4TJ2MrS2SqV8",
      authDomain: "wehelp-fatecid.firebaseapp.com",
      databaseURL: "https://wehelp-fatecid.firebaseio.com",
      projectId: "wehelp-fatecid",
      storageBucket: "wehelp-fatecid.appspot.com",
      messagingSenderId: "577367453031",
      appId: "1:577367453031:web:4a50d014e1124692e253c2",
      measurementId: "G-HX0TXB0VBC"
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}