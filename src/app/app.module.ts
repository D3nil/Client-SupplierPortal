import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";

// import personals components

import { ServiceUploadFilesService } from './services/upload-files/-service-upload-files.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TempFornitoreComponent } from './temp-fornitore/temp-fornitore.component';
import { CreateTempFornitoreComponent } from './create-temp-fornitore/create-temp-fornitore.component';
import { CreateSupplierComponent } from './Components/create-supplier/create-supplier.component';
@NgModule({
  declarations: [
    AppComponent,
    TempFornitoreComponent,
    CreateTempFornitoreComponent,
    CreateSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
