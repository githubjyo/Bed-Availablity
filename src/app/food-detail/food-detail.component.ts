import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FoodModel } from '../food/food.model'; 
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  myReactiveForm !: FormGroup;
  FoodModelObj : FoodModel = new FoodModel();
  FoodModel !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
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
  // postfooddetail(){
  //   this.FoodModelObj.description = this.myReactiveForm.value.description;
  //   this.FoodModelObj.image = this.myReactiveForm.value.image;
  //   this.api.postfood(this.FoodModelObj)
  //   .subscribe(res=>{
  //     console.log(res);
  //     alert("food added successfully")
  //     let ref = document.getElementById('cancel')
  //     ref?.click();
  //     this.myReactiveForm.reset();
  //     this.getfood();
     
  //   },
  //   err=>{
  //     alert("Something went wrong");
  //   })
  //   }

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
      this.myReactiveForm.controls['description'].setValue(row.description);
      this.myReactiveForm.controls['image'].setValue(row.image);
      
    }

    updatefoodDetails(){
      this.FoodModelObj.description = this.myReactiveForm.value.description;
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
