import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'          
})
export class SharedService {

   readonly Apiurl= "http://localhost:5000/api"; 
   //readonly Apiphoto= "http://localhost:5000/api"; 
  constructor(private http: HttpClient) { }
   
  GetListProducts():Observable<any[]>{
    // const httpOptions = {
    //     headers: new HttpHeaders(
    //     { 
    //       'Authorization': 'Your Token',
    //       'Content-Type': 'application/json'
    //     })
    //   }
    return this.http.get<any>(this.Apiurl+'/Products')
  }

  AddProduct(val:any){
    return this.http.post(this.Apiurl+'/Products',val)
  }

}
