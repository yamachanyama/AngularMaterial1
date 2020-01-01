import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
/*
import { map } from 'rxjs/operators';
*/

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  inum:string;
  message:string = 'people data.';

  data:any;

  constructor(
    private route:ActivatedRoute,
    private db:AngularFirestore,
    private location: Location
    ) {
    const param = route.snapshot.paramMap;
    this.inum = param['params']['inum'];
    /*
     this.inum = route.snapshot.paramMap.get('inum');
    */
    }

  ngOnInit() {
    this.access();
  }

  access() {
    this.db.collection('people').doc(this.inum).valueChanges()
    .subscribe(value=>{
      this.data = value;
    });
  }
  delete(){
    this.db.collection('people').doc(this.inum).delete();
    this.location.back();
  };
  
  set() {
    this.db.collection('people').doc(this.inum).set(this.data);
    this.location.back();
  }
  
}
