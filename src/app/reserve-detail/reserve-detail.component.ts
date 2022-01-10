import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ReserveModel } from './reseve-detail.model';
@Component({
  selector: 'app-reserve-detail',
  templateUrl: './reserve-detail.component.html',
  styleUrls: ['./reserve-detail.component.css']
})
export class ReserveDetailComponent implements OnInit {

  myReactiveForm !: FormGroup;
  
  ReserveModelObj : ReserveModel = new ReserveModel();
  ReserveModel !: any;
 
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api :ApiService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'sdate': new FormControl(null, Validators.required),
      'edate': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobile': new FormControl(null, Validators.required),
    })
    this.myReactiveForm = this.formbuilder.group({

      description:[''],
      firstName:[''],
      lastName:[''],
      sdate:[''],
      edate:[''],
      email:[''],
      mobile:['']
      
    })
    this.getAllEmployee();
  }

  

  onSubmit(){
    console.log(this.myReactiveForm)
  }

 
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
   this.ReserveModel = res;
    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmploye(row.id)
    .subscribe(res=>{
      alert("Data deleted");
      this.getAllEmployee();
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.ReserveModelObj.id =  row.id
    this.myReactiveForm.controls['description'].setValue(row.description);
    this.myReactiveForm.controls['firstName'].setValue(row.firstName);
    this.myReactiveForm.controls['lastName'].setValue(row.lastName);
    this.myReactiveForm.controls['sdate'].setValue(row.sdate);
    this.myReactiveForm.controls['edate'].setValue(row.edate);
    this.myReactiveForm.controls['email'].setValue(row.email);
    this.myReactiveForm.controls['mobile'].setValue(row.mobile);
   
  }

  updateEmployeeDetails(){
    this.ReserveModelObj.description = this.myReactiveForm.value.description;
    this.ReserveModelObj.firstName = this.myReactiveForm.value.firstName;
    this.ReserveModelObj.lastName = this.myReactiveForm.value.lastName;
    this.ReserveModelObj.sdate = this.myReactiveForm.value.sdate;
    this.ReserveModelObj.edate = this.myReactiveForm.value.edate;
    this.ReserveModelObj.email = this.myReactiveForm.value.email;
    this.ReserveModelObj.mobile = this.myReactiveForm.value.mobile;

    this.api.updateEmploye(this.ReserveModelObj,this.ReserveModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    this.getAllEmployee();
    })
  }



}

