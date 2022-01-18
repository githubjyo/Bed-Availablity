import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
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

  updateEmploye(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
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
  updatefood(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/food/"+id,data)
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
  updateroom(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/room/"+id,data)
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
  
  // getCon(){
  //   return this.http.get<any>("http://localhost:3000/contact")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // postCont(data : any){
  //   return this.http.post<any>("http://localhost:3000/contact",data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // updateCont(date : any, id: number){
  //   return this.http.put<any>("http://localhost:3000/contact/"+id,date)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteCont(id : number){
  //   return this.http.delete<any>("http://localhost:3000/contact/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  

  getdrin(){
    return this.http.get<any>("http://localhost:3000/drink")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postdrink(data : any){
    return this.http.post<any>("http://localhost:3000/drink",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updatedrink(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/drink/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletedrink(id : number){
    return this.http.delete<any>("http://localhost:3000/drinkt/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}