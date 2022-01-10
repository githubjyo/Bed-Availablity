import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
