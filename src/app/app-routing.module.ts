import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeatailsComponent } from './deatails.component';
import {formComponent}from './form.component';
import { EditComponent } from './edit.component';

const routes: Routes = [
  {path:'details' ,component:DeatailsComponent},
  {path:'form',component:formComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
