import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  @Input() prod:any;
  prodid!: string;
  prodname!:string;

  ngOnInit(): void {
    this.prodid= this.prod.ID;
    this.prodname= this.prod.Name;
  }

  AjoutProduit(){
    var objproduct={
      ID: this.prodid,
      Name: this.prodname
    }

    this.service.AddProduct(objproduct).subscribe(res=>{
      alert(res.toString());
      
    });
  }

}
