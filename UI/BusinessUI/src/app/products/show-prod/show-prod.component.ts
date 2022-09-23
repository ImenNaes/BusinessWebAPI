import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';

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

  
  showModal: boolean = false;
  content: any;
  title: any;
  config: any; 

  message="";

  ngOnInit(): void {
    this.ReferchListProducts();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.ProductList.count
    };

    this.message='';
  }

  ReferchListProducts(){
    this.service.GetListProducts().subscribe(data=> {
      this.ProductList= data;
    });

   
  }


  AddProduct(){
    // this.product={
    //   ID: 0,
    //   Name: ""
    // }
      this.showModal = true; // Show-Hide Modal Check
      this.title = "Ajouter un nouveau produit";    // Dynamic Data
     
      this.activateAddComponent= true;

  }

  DeleteProduct(id:BigInteger){
   console.log(id);
    this.service.DeleteProd(id).subscribe(
      Response => {
        console.log(Response);
        this.ReferchListProducts();
      }, 
      error => {
        console.log(error);
      }
      
    );

      
  }


  UpdateProduct(id:BigInteger){
    this.service.Update(id, this.product).subscribe(
      Response => {
        console.log(Response);
        this.ReferchListProducts();
        this.message="the product is updated successfully! ";
      }, 
      error => {
        console.log(error);
      }
      
    );

      
  }

  
  //Bootstrap Modal Close event
  hidePopup() {
    this.showModal = false;
    this.ReferchListProducts();

  }

  pageChanged(event: any){
    console.log(event);
    this.config.currentPage = event;
  }


 
}
