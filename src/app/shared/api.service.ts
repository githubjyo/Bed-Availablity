import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postEmploye(date : any){
    return this.http.post<any>("http://localhost:3000/posts",date)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmploye(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmploye(date : any, id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,date)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmploye(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postContactUs(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getfoo(){
    return this.http.get<any>("http://localhost:3000/food")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postfood(data : any){
    return this.http.post<any>("http://localhost:3000/food",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updatefood(date : any, id: number){
    return this.http.put<any>("http://localhost:3000/food/"+id,date)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletefood(id : number){
    return this.http.delete<any>("http://localhost:3000/food/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getroo(){
    return this.http.get<any>("http://localhost:3000/room")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postroom(data : any){
    return this.http.post<any>("http://localhost:3000/room",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateroom(date : any, id: number){
    return this.http.put<any>("http://localhost:3000/room/"+id,date)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteroom(id : number){
    return this.http.delete<any>("http://localhost:3000/room/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getCon(){
    return this.http.get<any>("http://localhost:3000/contact")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postCont(data : any){
    return this.http.post<any>("http://localhost:3000/contact",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateCont(date : any, id: number){
    return this.http.put<any>("http://localhost:3000/contact/"+id,date)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCont(id : number){
    return this.http.delete<any>("http://localhost:3000/contact/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}