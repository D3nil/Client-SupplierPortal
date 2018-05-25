import { TempFornitoreComponent } from './../temp-fornitore/temp-fornitore.component';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FornitoretempModel } from './../model/fornitore-temp.model';
import { CreateTempFornitoreService } from './create-temp-fornitore.service';
import { OK } from '../model/httpStatusModel';

@Component({
  selector: 'app-create-temp-fornitore',
  templateUrl: './create-temp-fornitore.component.html',
  styleUrls: ['./create-temp-fornitore.component.css'],
  providers : [ CreateTempFornitoreService ]
})

export class CreateTempFornitoreComponent implements OnInit {
  public fornitoreTempor : FornitoretempModel;
  public isValid: boolean = true;
  public message: String = "";

  constructor( public createTempFornitoreService : CreateTempFornitoreService ,
    private router : Router) 
  {   if(sessionStorage.getItem("fornitoreTempor"))
      {
        this.fornitoreTempor = JSON.parse (sessionStorage.getItem("fornitoreTempor"));
      }   else{     this.fornitoreTempor = new FornitoretempModel();  }   
}

  ngOnInit() {}

  public saveOrUpdate():void
  {
    this.isValid = this.createTempFornitoreService.validate(this.fornitoreTempor);
  if(this.isValid)
    {
      this.createTempFornitoreService.
      saveOrUpdate(this.fornitoreTempor).subscribe( 
      res =>{
            if(res.responseCode == OK)
            { this.router.navigate(['/tempFornitoreComponent'])}
                    else
                          { this.message =res.message;  
                            this.isValid=false;
                          }
            });
    }
    else  {  this.message ="COMPILARE TUTTI I CAMPI !! SONO OBBLIGATORI !";  }
    sessionStorage.clear();
  }
}