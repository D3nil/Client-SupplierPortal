import { Component, OnInit } from '@angular/core';
import { TempFornitoreService } from './temp-fornitore.service';

@Component({
  selector: 'app-temp-fornitore',
  templateUrl: './temp-fornitore.component.html',
  styleUrls: ['./temp-fornitore.component.css'],
  providers:[TempFornitoreService]
})
export class TempFornitoreComponent implements OnInit {

  constructor(private tempFornitoreService :TempFornitoreService ) 
  {
    
   }

  ngOnInit() {
  }

}
