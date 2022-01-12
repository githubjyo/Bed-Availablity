import { Component, OnInit } from '@angular/core';
import { FoodModel } from './food.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
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
    private api :ApiService, private router:Router) { }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'foodname': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
     
    })
    this.myReactiveForm = this.formbuilder.group({
      foodname:[''],
      description:[''],
      price:[''],
      image:['']
     
    })
    this.getfood();
  }
  postfooddetail(){
    this.FoodModelObj.foodname = this.myReactiveForm.value.foodname;
    this.FoodModelObj.description = this.myReactiveForm.value.description;
    this.FoodModelObj.price = this.myReactiveForm.value.price;
    this.FoodModelObj.image = this.myReactiveForm.value.image;
  
  this.api.postfood(this.FoodModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Food added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.router.navigate(['food-detail'])
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