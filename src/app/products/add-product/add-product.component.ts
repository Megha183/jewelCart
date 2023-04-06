import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder,private ps:ProductService,private router:Router) { }
  ngOnInit(): void {

  }

  // model form
  // addProductForm = this.fb.group({
  //   id: [[""], [Validators.required, Validators.pattern('[0-9]+')]],
  //   productName: [[""], [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  //   categoryId: [[""], [Validators.required, Validators.pattern('[0-9]+')]],
  //   description: [[""], [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  //   price: [[""], [Validators.required, Validators.pattern('[0-9]+')]],
  //   isAvailable: [[""], [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  //   productImage: [""],
  //   rating: [""],
  //   review: [[""], [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  //   vendorName: [""],
  //   warranty: [""]
  // })
  addProductForm = this.fb.group({
    id: [""],
    productName:  [""],
    categoryId:  [""],
    description:  [""],
    price:  [""],
    isAvailable: [""],
    productImage: [""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warranty: [""]
  })


  addProduct() {
    
      let Pdata = {
        id: this.addProductForm.value.id,
        productName: this.addProductForm.value.productName,
        categoryId: this.addProductForm.value.categoryId,
        description: this.addProductForm.value.description,
        price: this.addProductForm.value.price,
        isAvailable: this.addProductForm.value.isAvailable,
        productImage: this.addProductForm.value.productImage,
        rating: this.addProductForm.value.rating,
        review: this.addProductForm.value.review,
        vendorName: this.addProductForm.value.vendorName,
        warranty: this.addProductForm.value.warranty
      }
      this.ps.addNewProduct(Pdata).subscribe((item:any)=>{
        alert("newproduct added")
        this.router.navigateByUrl("products")
      })

    }
   
  }

