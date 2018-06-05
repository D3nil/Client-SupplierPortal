import { CreateSupplierComponent } from './Components/create-supplier/create-supplier.component';
import { CreateTempFornitoreComponent } from './create-temp-fornitore/create-temp-fornitore.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TempFornitoreComponent } from './temp-fornitore/temp-fornitore.component';

const routes : Routes =
[       
        {path:'', redirectTo : '/tempFornitoreComponent', pathMatch: 'full'},
        {path:'appComponent' , component: AppComponent},
        {path:'tempFornitoreComponent', component: TempFornitoreComponent},
        {path:'createTempSupplierComponent', component: CreateSupplierComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule 
{}
