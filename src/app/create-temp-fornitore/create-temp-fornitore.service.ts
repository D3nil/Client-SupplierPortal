import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { FornitoretempModel } from './../model/fornitore-temp.model';
import { RestResponse } from './../model/restResponse.model';

@Injectable()
export class CreateTempFornitoreService {

  constructor(private http : HttpClient) 
  {  }

  
  
  
  public validate(fornitoreTemp : FornitoretempModel) :boolean {
    var isValid = true;
    if(
    ( ! fornitoreTemp.r_D_Sociale )
    ||(! fornitoreTemp.sede_Legale )
    ||(! fornitoreTemp.sede_Operativa )
    ||(! fornitoreTemp.telefono )
    ||(! fornitoreTemp.fax )
    ||(! fornitoreTemp.e_mail )
    ||(! fornitoreTemp.data_inizio )
    ||(! fornitoreTemp.cod_fisc )
    ||(! fornitoreTemp.p_iva ))  
      { isValid=false; }
      return isValid;
   }

  public saveOrUpdate( fornitoreTemp: FornitoretempModel) : Observable <RestResponse>
  {
   return this.http.post< RestResponse >("http://localhost:9093/SoUtemp" , JSON.stringify(fornitoreTemp));
  }
}
