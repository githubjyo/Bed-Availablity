import { Component, OnInit } from '@angular/core';
import { roomModel } from './room-view.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  myReactiveForm!: FormGroup;
  roomModel !: any;
  
  showUpdate !: boolean;
  roomModelObj : roomModel = new roomModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'roomNo': new FormControl(null, Validators.required),
      'room': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required)
     
     
    })
    this.myReactiveForm = this.formbuilder.group({
      roomNo:[''],
      room:[''],
      price:['']
     
    })
    this.getroom();
  }
getroom(){
      this.api.getroo()
      .subscribe(res=>{
     this.roomModel = res;
      })
    }

    
}

