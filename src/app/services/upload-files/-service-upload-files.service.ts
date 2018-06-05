import { SupplierTemp } from './../../model/tempSupplier-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServiceUploadFilesService {

  private uploadUrl = 'http://localhost:8080/fornitoriTemp';

  constructor(private http: HttpClient) { }

  uploadForm(data: FormData) {
    return this.http.post(this.uploadUrl, data, {observe: 'events'});
  }

  saveFORM(suppTempModel: SupplierTemp) {
		console.log('------------SUPPLIER------------');
		console.log('r_D_Sociale: '+ suppTempModel.r_D_Sociale);
		console.log('sede_Legale: '+ suppTempModel.sede_Legale);
		console.log('sede_Operativa : '+ suppTempModel.sede_Operativa);
		console.log('telefono : '+ suppTempModel.telefono);
		console.log('fax : '+ suppTempModel.fax);
		console.log('e_mail : '+ suppTempModel.e_mail);
		console.log('data_inizio : '+ suppTempModel.data_inizio);
		console.log('cod_fisc : '+ suppTempModel.cod_fisc);
    console.log('p_iva : '+ suppTempModel.p_iva);
    console.log('tipoFornitore : '+ suppTempModel.tipoFornitore);
    console.log('DOCS : '+ suppTempModel.DOCS);
		
  }

}
