import { Component, OnInit } from '@angular/core';
import { DrinkModel } from './drink-detail.model'; 
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {
  myReactiveForm!: FormGroup;
  DrinkModel !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
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

  getdrink(){
    this.api.getdrin()
    .subscribe(res=>{
   this.DrinkModel = res;
    })
  }

  deletedrinks(row : any){
    this.api.deletedrink(row.id)
    .subscribe(res=>{
      alert("food deleted");
      this.getdrink();
    })
  }

  onEditd(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.DrinkModelObj.id =  row.id
    this.myReactiveForm.controls['drink'].setValue(row.drink);
    this.myReactiveForm.controls['Dprice'].setValue(row.Dprice);
    this.myReactiveForm.controls['image'].setValue(row.image);
    
    
  }

  updatedrinkDetails(){
    this.DrinkModelObj.drink = this.myReactiveForm.value.drink;
    this.DrinkModelObj.Dprice = this.myReactiveForm.value.Dprice;
    this.DrinkModelObj.image = this.myReactiveForm.value.image;
   
    this.api.updatedrink(this.DrinkModelObj,this.DrinkModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.getdrink();
    })
  }
}
