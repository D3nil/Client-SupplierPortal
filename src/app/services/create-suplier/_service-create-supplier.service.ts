import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SupplierTemp } from "./../../model/tempSupplier-model";
import { RestResponse } from './../../model/restResponse.model';
@Injectable()
export class ServiceCreateSupplierService {

  constructor(private http : HttpClient) 
  {  }

  public validate(fornitoreTemp : SupplierTemp) :boolean {
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
    ||(! fornitoreTemp.p_iva )
    ||(! fornitoreTemp.tipoFornitore)
  )  
      { isValid=false; }
      return isValid;
   }

  public saveOrUpdate( fornitoreTemp: SupplierTemp) : Observable <RestResponse>
  {
   return this.http.post< RestResponse >("http://localhost:9093/Save" , JSON.stringify(fornitoreTemp));
  }
}
