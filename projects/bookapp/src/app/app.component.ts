import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newapp';

  constructor(private router:Router, 
      private afAuth: AngularFireAuth, 
      private ngZone: NgZone) {
  }

  ngOnInit() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    this.afAuth.auth.onAuthStateChanged((usr)=>{
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    });
  }

  loginCheck() {
    if (this.currentUser == '(not logined.)') {
      this.login();
    } else {
      if (confirm('Are you logout now?')) {
        this.logout();
      }
    }
  }

  login(){
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  get currentUser() {
    return this.afAuth.auth != null ?
      this.afAuth.auth.currentUser != null? 
        this.afAuth.auth.currentUser.displayName : 
        '(not logined.)' :
      '(not logined.)';
  }
}
