import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {DataService}from './global.service'
import { Router,ActivatedRoute } from '@angular/router';
import {httpService}from './http.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  checkoutForm=new FormGroup({
    name : new FormControl(['']),
    phone : new FormControl(''),
    location : new FormControl(''),
    email : new FormControl(''),
  })
  todo:any
constructor(public route: Router,public DataService1:DataService,public rate:ActivatedRoute,public service:httpService) {

 }


  ngOnInit(): void {
this.service.editcurrent(this.rate.snapshot.params['id']).subscribe((result:any): void=>{
  this.checkoutForm=new FormGroup({
    name : new FormControl(result ['name']),
    phone : new FormControl(result ['phone'] ),
    location : new FormControl(result['location'] ),
    email : new FormControl(result ['email']),
  })
})
  }
  update(){
    this.service.update(this.rate.snapshot.params['id'],this.checkoutForm.value).subscribe((result)=>{})
    this.route.navigate(['/details']);
  
  }

}
