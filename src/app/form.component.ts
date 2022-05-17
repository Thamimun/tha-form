import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl,FormGroup } from '@angular/forms';
import {DataService}from './global.service'
import { Router,ActivatedRoute } from '@angular/router';
import {httpService}from './http.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class formComponent  {
  checkoutForm=new FormGroup({
    name : new FormControl(''),
    phone : new FormControl(''),
    location : new FormControl(''),
    email : new FormControl(''),
  })

  constructor(public route: Router,public DataService1:DataService,public rest:ActivatedRoute,public data:httpService) { }


  creatform(){
    this.data.addform(this.checkoutForm.value).subscribe((result)=>{
      console.log("result data",result)
      this.route.navigate(['/details']); 
      this.checkoutForm.reset();
    })
  }

}
