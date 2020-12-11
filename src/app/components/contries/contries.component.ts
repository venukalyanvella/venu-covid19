import { Component, OnInit } from '@angular/core';
import { Globaldata } from 'src/app/models/globaldata';
import { CoviddataService } from 'src/app/services/coviddata.service';

@Component({
  selector: 'app-contries',
  templateUrl: './contries.component.html',
  styleUrls: ['./contries.component.css']
})
export class ContriesComponent implements OnInit {

  data :Globaldata[];
  countries: String[] = [];
  Allcontries : any[] = [];
  totalConfirmed = 0;
  totalDeath=0;
  totalActive=0;
  totalRecovered=0;
  p:number = 1;
  constructor( private covidservice:CoviddataService) { }

  ngOnInit() {

    this.covidservice.getGlobalData().subscribe(result=>{
      this.data = result;
      this.Allcontries = result;
      // console.log(this.Allcontries);
      
      this.data.forEach(cs=>{
        this.countries.push(cs.country)
        // this.Allcontries.push(cs.country, cs.death, cs.recovered,cs.confirmed)
      })
    })

  }


  updateValues(country:string)
  {

    // console.log(country);
    this.data.forEach(cs=>{
      if(cs.country == country)
      {
        this.totalActive = cs.active
        this.totalConfirmed= cs.confirmed
        this.totalDeath= cs.death
        this.totalRecovered= cs.recovered
      }
    })
    

  }

}
