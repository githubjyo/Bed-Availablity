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

    deleterooms(row : any){
      this.api.deleteroom(row.id)
      .subscribe(res=>{
        alert("room deleted");
        this.getroom();
      })
    }

    onEditr(row : any){
      
      this.showUpdate = true;
      this.roomModelObj.id =  row.id
      this.myReactiveForm.controls['roomNo'].setValue(row.roomNo);
      this.myReactiveForm.controls['room'].setValue(row.room);
      this.myReactiveForm.controls['price'].setValue(row.price);
      
    }

    updateroomDetails(){
      this.roomModelObj.roomNo = this.myReactiveForm.value.roomNo;
      this.roomModelObj.room = this.myReactiveForm.value.room;
      this.roomModelObj.price = this.myReactiveForm.value.price;
      
  
      this.api.updateroom(this.roomModelObj,this.roomModelObj.id)
      .subscribe(res=>{
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
      ref?.click();
      this.myReactiveForm.reset();
      this.getroom();
      })
    }
}

