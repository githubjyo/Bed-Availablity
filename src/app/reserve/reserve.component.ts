import { Component, OnInit } from '@angular/core';
import { ReserveModel } from './reserve.model';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  myReactiveForm!: FormGroup;
  
  
  ReserveModel !: any;
  
  ReserveModelObj : ReserveModel = new ReserveModel();
  constructor(private formbuilder: FormBuilder,
    private api :ApiService,private router:Router) { }

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

  get f(){

    return this.myReactiveForm.controls;

  }

  

  onSubmit(){

    console.log(this.myReactiveForm.value);
    this.myReactiveForm.reset();

  }
  



  postContactDetails(){
    this.ReserveModelObj.description = this.myReactiveForm.value.description;
    this.ReserveModelObj.firstName = this.myReactiveForm.value.firstName;
    this.ReserveModelObj.lastName = this.myReactiveForm.value.lastName;
    this.ReserveModelObj.sdate = this.myReactiveForm.value.sdate;
    this.ReserveModelObj.edate = this.myReactiveForm.value.edate;
    this.ReserveModelObj.email = this.myReactiveForm.value.email;
    this.ReserveModelObj.mobile = this.myReactiveForm.value.mobile;
    
  
  this.api.postContactUs(this.ReserveModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Contact added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.myReactiveForm.reset();
    // this.router.navigate(['reserve-detail'])
    this.getAllEmployee();
    
   
  },
  err=>{
    alert("Something went wrong");
  })
  }
  
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
   this.ReserveModel = res;
    })
  }
  }