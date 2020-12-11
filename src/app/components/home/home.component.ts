import { Component, OnInit } from '@angular/core';
import { Globaldata } from 'src/app/models/globaldata';
import { CoviddataService } from 'src/app/services/coviddata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalDeath=0;
  totalActive=0;
  totalRecovered=0;
  allData:Globaldata[];


  constructor(private covidservice:CoviddataService) { }

  ngOnInit() {

    this.covidservice.getGlobalData().subscribe( 
      {
        next:(result)=>{
        
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed))
            {
              this.totalActive += cs.active
            this.totalConfirmed+=cs.confirmed
            this.totalDeath+=cs.death
            this.totalRecovered+= cs.recovered
            }
          })
          
        }
      }
    )



  }

}
