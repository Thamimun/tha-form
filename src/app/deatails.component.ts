import { Component, OnInit } from '@angular/core';
import {DataService}from './global.service'
import { Router,ActivatedRoute } from '@angular/router';
import {httpService}from './http.service'
@Component({
  selector: 'app-deatails',
  templateUrl: './deatails.component.html',
})
export class DeatailsComponent implements OnInit {
public collection:any;
  constructor(public route: Router,public DataService1:DataService,public rest:ActivatedRoute,public data:httpService) { }

  ngOnInit(): void {
  this.data.getcurrentdata().subscribe((result)=>{
    this.DataService1.object=result;
  })
  }
delete(id:any){
  this.DataService1.object.splice(id,1)
  this.data.delete(id).subscribe((result)=>{
    console.log(result)
  })
}

}
  



