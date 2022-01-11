import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ReserveModel !: any;
 
 
  //row: any;
  constructor(
    private api :ReservationService) { }
  ngOnInit(): void {
    this.api.getEmploye()
  .subscribe((res: any) => this.ReserveModel = res)
  }

    
    
  
  
  
  }