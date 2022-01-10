import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
form !:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({

      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
  
      email: new FormControl('', [Validators.required, Validators.email]),
      mob: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
  
      body: new FormControl('', Validators.required)
  
    })
  }

  get f(){

    return this.form.controls;

  }

  

  submit(){

    console.log(this.form.value);
    this.form.reset();

  }

}
