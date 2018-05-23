import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TempFornitoreComponent } from './temp-fornitore/temp-fornitore.component';

const routes : Routes =
[       
        {path:'', redirectTo : '/tempFornitoreComponent', pathMatch: 'full'},
        {path:'appComponent' , component: AppComponent},
        {path:'tempFornitoreComponent', component: TempFornitoreComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule 
{}
