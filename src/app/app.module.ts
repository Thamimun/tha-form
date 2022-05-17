import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {httpService}from './http.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeatailsComponent } from './deatails.component';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import {formComponent}from './form.component';
import {DataService}from './global.service'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClientXsrfModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DeatailsComponent,
    EditComponent,formComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule,
  ],
  providers: [DataService,httpService],
  bootstrap: [  AppComponent
  ]
})
export class AppModule { }
