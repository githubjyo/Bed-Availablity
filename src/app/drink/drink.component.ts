import { Component, OnInit } from '@angular/core';
import { DrinkModel } from './drink.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  myReactiveForm!: FormGroup;
  DrinkModel !: any;
  DrinkModelObj : DrinkModel = new DrinkModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'drink': new FormControl(null, Validators.required),
      'Dprice': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
     
    })
    this.myReactiveForm = this.formbuilder.group({
      drink:[''],
      Dprice:[''],
      image:['']
     
     
    })
    this.getdrink();
  }
  postdrinkdetail(){
    this.DrinkModelObj.drink = this.myReactiveForm.value.drink;
    this.DrinkModelObj.Dprice = this.myReactiveForm.value.Dprice;
    this.DrinkModelObj.image = this.myReactiveForm.value.image;
    
  this.api.postdrink(this.DrinkModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Drink added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.getdrink();
   
  },
  err=>{
    alert("Something went wrong");
  })
  }
  
  getdrink(){
    this.api.getdrin()
    .subscribe(res=>{
   this.DrinkModel = res;
    })
  }
  }