import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DataService}from './global.service'


@Injectable()

export class httpService{
URL="http://localhost:3000/employees"
constructor(public http:HttpClient,public da:DataService){

}

getcurrentdata(){
return this.http.get(this.URL)
}
addform(data:any){
    return this.http.post(this.URL,data)
}
editcurrent(id:any){
    return this.http.get(`${this.URL}/${id}`)
}
delete(id:any){
    return this.http.delete(`${this.URL}/${id}`)
}
update(id:any,data:any){
    return this.http.put(`${this.URL}/${id}`,data)
}
}