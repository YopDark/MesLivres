import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAfIqzJj1ZYq76ZxnlMct222ux-e-Baufc",
      authDomain: "meslivres-723b3.firebaseapp.com",
      databaseURL: "https://meslivres-723b3.firebaseio.com",
      projectId: "meslivres-723b3",
      storageBucket: "meslivres-723b3.appspot.com",
      messagingSenderId: "122295474315",
      appId: "1:122295474315:web:da34122ed9f53a1c10dc8e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
