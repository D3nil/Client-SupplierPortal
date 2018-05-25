import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
// import personals components

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TempFornitoreComponent } from './temp-fornitore/temp-fornitore.component';
import { CreateTempFornitoreComponent } from './create-temp-fornitore/create-temp-fornitore.component';


@NgModule({
  declarations: [
    AppComponent,
    TempFornitoreComponent,
    CreateTempFornitoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
