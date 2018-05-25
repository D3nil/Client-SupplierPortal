import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FornitoretempModel } from './../model/fornitore-temp.model';

@Injectable()
export class TempFornitoreService {
  //private tempFornitori : Array <FornitoretempModel>;
  constructor(private http: HttpClient) 
  {

  }
  public getTempFornitori() : Observable <FornitoretempModel[]>
  {
      return  this.http.get<FornitoretempModel[]> ("http://localhost:9093/allTemps");
  }
}
