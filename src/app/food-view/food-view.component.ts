import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FoodModel } from '../food/food.model'; 
@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.css']
})
export class FoodViewComponent implements OnInit {

  myReactiveForm !: FormGroup;
  FoodModelObj : FoodModel = new FoodModel();
  FoodModel !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

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
  

    getfood(){
      this.api.getfoo()
      .subscribe(res=>{
     this.FoodModel = res;
      })
    }

   
}