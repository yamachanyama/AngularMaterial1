import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { FireComponent } from './fire/fire.component';

var config = {
  apiKey: "AIzaSyCfHzSySGPvfhehkjzDzMQIdH7tWPNT1Pg",
  authDomain: "test-7c672.firebaseapp.com",
  databaseURL: "https://test-7c672.firebaseio.com",
  projectId: "test-7c672",
  storageBucket: "test-7c672.appspot.com",
  messagingSenderId: "168025708100",
  appId: "1:168025708100:web:aab2bcac717f23aa"
}


const routes:Routes = [
  { path: 'fire', component: FireComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'msg', component: MessageComponent },
  { path: 'add', component: AddComponent },
  { path: 'show/:inum', component: ShowComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HelloComponent,
    MessageComponent,
    HomeComponent,
    ShowComponent,
    AddComponent,
    FireComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule, // この文を追加
    MatIconModule, // この文を追加
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
