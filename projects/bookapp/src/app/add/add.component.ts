import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  message:string = 'people data.';
  data:Observable<any[]>;

  name:string;
  mail:string;
  age:number;

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.access();
  }

  access(){
    this.data = this.db.collection('people').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data99 = a.payload.doc.data();
          const id99 = a.payload.doc.id;
          return { id99, ...data99 }
        });
      })
    );
  }
  add() {
    const data1 = {name:this.name, mail:this.mail, age:this.age};
    this.db.collection('people').add(data1);
    this.name = '';
    this.mail = '';
    this.age = 0;
  }
}
  /*
  access() {
    this.db.collection('people')
      .valueChanges()
      .subscribe(value=>{
        this.data = value;
      },
      error=>{
        this.message = "(can't get data...)";
        this.data = null;
      });
  }
  */
