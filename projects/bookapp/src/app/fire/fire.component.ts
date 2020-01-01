import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  message:string = 'wait...';


  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection('items')
      .doc('sampledoc')
      .valueChanges()
      .subscribe((value)=>{
        if (value != null) {
          this.message = value['message'];
        }
      });
  }

}

