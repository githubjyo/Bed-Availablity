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

    deletefoods(row : any){
      this.api.deletefood(row.id)
      .subscribe(res=>{
        alert("food deleted");
        this.getfood();
      })
    }

    onEditf(row : any){
      this.showAdd = false;
      this.showUpdate = true;
      this.FoodModelObj.id =  row.id
      this.myReactiveForm.controls['foodname'].setValue(row.foodname);
      this.myReactiveForm.controls['description'].setValue(row.description);
      this.myReactiveForm.controls['price'].setValue(row.price);
      this.myReactiveForm.controls['image'].setValue(row.image);
      
    }

    updatefoodDetails(){
      this.FoodModelObj.foodname = this.myReactiveForm.value.foodname;
      this.FoodModelObj.description = this.myReactiveForm.value.description;
      this.FoodModelObj.price = this.myReactiveForm.value.price;
      this.FoodModelObj.image = this.myReactiveForm.value.image;
  
      this.api.updatefood(this.FoodModelObj,this.FoodModelObj.id)
      .subscribe(res=>{
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
      ref?.click();
      this.myReactiveForm.reset();
      this.getfood();
      })
    }
}