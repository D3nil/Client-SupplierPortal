import { CreateTempFornitoreComponent } from './../create-temp-fornitore/create-temp-fornitore.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FornitoretempModel } from './../model/fornitore-temp.model';
import { TempFornitoreService } from './temp-fornitore.service';

@Component({
  selector: 'app-temp-fornitore',
  templateUrl: './temp-fornitore.component.html',
  styleUrls: ['./temp-fornitore.component.css'],
  providers:[TempFornitoreService]
})
export class TempFornitoreComponent implements OnInit {
  
  public tempFornitori : Array <FornitoretempModel>;

  constructor(private tempFornitoreService :TempFornitoreService , private router: Router ) 
  {
  }

  ngOnInit() 
  {
    this.loadTempFornitori();
  }

  private loadTempFornitori(): void 
  {
    this.tempFornitoreService.getTempFornitori().subscribe(
      res => { this.tempFornitori= res; 
              console.log(res);
            });
  }
  public edit(fornitoreTemp: FornitoretempModel): void
   {
      sessionStorage.setItem('fornitoreTemp', JSON.stringify(fornitoreTemp));
      this.router.navigate(['/CreateTempFornitoreComponent']);
    }

}
