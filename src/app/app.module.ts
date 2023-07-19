import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CompanyModule}  from './company/company.module';
import { PersonModule } from './person/person.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,//Module Binding
    PersonModule//Module Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
