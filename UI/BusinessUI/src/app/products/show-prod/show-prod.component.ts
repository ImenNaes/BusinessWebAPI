import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service: SharedService) { }

  ProductList:any=[];

  product:any;

  activateAddComponent: boolean=false;

  ngOnInit(): void {
    this.ReferchListProducts();
  }

  ReferchListProducts(){
    this.service.GetListProducts().subscribe(data=> {
      this.ProductList= data;
    });
  }


  AddProduct(){
    this.product={
      ID: 0,
      Name: ""
    }
    
    this.activateAddComponent= true;
  }

  Closeclick(){
    this.activateAddComponent= false;
    this.ReferchListProducts();
  }

}
