import { Component, OnInit } from '@angular/core';
import { roomModel } from './roomtype-detail.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-roomtype-detail',
  templateUrl: './roomtype-detail.component.html',
  styleUrls: ['./roomtype-detail.component.css']
})
export class RoomtypeDetailComponent implements OnInit {
  myReactiveForm!: FormGroup;
  roomModel !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  roomModelObj : roomModel = new roomModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'roomNo': new FormControl(null, Validators.required),
      'room': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
     
    })
    this.myReactiveForm = this.formbuilder.group({
      roomNo:[''],
      room:[''],
      price:[''],
      status:['']
     
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
      this.showAdd = false;
      this.showUpdate = true;
      this.roomModelObj.id =  row.id
      this.myReactiveForm.controls['roomNo'].setValue(row.roomNo);
      this.myReactiveForm.controls['room'].setValue(row.room);
      this.myReactiveForm.controls['price'].setValue(row.price);
      this.myReactiveForm.controls['status'].setValue(row.status);
      
    }

    updateroomDetails(){
      this.roomModelObj.roomNo = this.myReactiveForm.value.roomNo;
      this.roomModelObj.room = this.myReactiveForm.value.room;
      this.roomModelObj.price = this.myReactiveForm.value.price;
      this.roomModelObj.status = this.myReactiveForm.value.status;
      
      
  
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

