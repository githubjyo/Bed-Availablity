import { Component, OnInit } from '@angular/core';
import { FoodModel } from './food.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  myReactiveForm!: FormGroup;
  FoodModel !: any;
  FoodModelObj : FoodModel = new FoodModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
     
    })
    this.myReactiveForm = this.formbuilder.group({
      description:[''],
      image:['']
     
    })
    this.getfood();
  }
  postfooddetail(){
    this.FoodModelObj.description = this.myReactiveForm.value.description;
    this.FoodModelObj.image = this.myReactiveForm.value.image;
    
  
  this.api.postfood(this.FoodModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Food added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.getfood();
   
  },
  err=>{
    alert("Something went wrong");
  })
  }
  
  getfood(){
    this.api.getfoo()
    .subscribe(res=>{
   this.FoodModel = res;
    })
  }
  }