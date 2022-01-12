import { Component, OnInit } from '@angular/core';
import { roomModel } from './roomtype.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {
  myReactiveForm!: FormGroup;
  roomModel !: any;
  roomModelObj : roomModel = new roomModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService , private router:Router) { }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'roomNo': new FormControl(null, Validators.required),
      'room': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
     
    })
    this.myReactiveForm = this.formbuilder.group({
      roomNo:[''],
      room:[''],
      price:['']
     
    })
    this.getroom();
  }
  postroomdetail(){
    this.roomModelObj.roomNo = this.myReactiveForm.value.roomNo;
    this.roomModelObj.room = this.myReactiveForm.value.room;
    this.roomModelObj.price = this.myReactiveForm.value.price;
    
  
  this.api.postroom(this.roomModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Room added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.router.navigate(['roomtype-detail'])
    this.getroom();
   
  },
  err=>{
    alert("Something went wrong");
  })
  }
  getroom(){
    this.api.getroo()
    .subscribe(res=>{
   this.roomModel = res;
    })
  }
  }
