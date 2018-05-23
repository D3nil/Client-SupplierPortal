import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import personals components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TempFornitoreComponent } from './temp-fornitore/temp-fornitore.component';


@NgModule({
  declarations: [
    AppComponent,
    TempFornitoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
