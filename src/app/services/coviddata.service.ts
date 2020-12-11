import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable} from "rxjs";// First you need to import Observable
import { Globaldata } from '../models/globaldata';
import { getLocaleFirstDayOfWeek } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CoviddataService {
  day;
  month;
  year;
  private ext= '.csv';
  
  private globalUrl='';
  // private baseurl =`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-17-2020.csv`;
  private baseurl =`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/`;


  constructor(private http:HttpClient) {
    let todaydate= new Date();
    this.month = todaydate.getMonth();
    this.day= todaydate.getDate();
    this.year= todaydate.getFullYear();

    this.globalUrl = `${this.baseurl}${this.getDate(this.month)}-${this.getDate(this.day)}-${this.year}${this.ext}`;


   }

   getDate(date:number)
   {
     if(date<10){
       return '0'+date
     }
     return date
   }


  getGlobalData()
  {
    return this.http.get(this.globalUrl, {responseType:'text'}).pipe(
      map( result=>{

        let data:Globaldata[];
        let rawdata= {};
        let rows = result.split('\n')
        rows.slice(0,1)
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)
        
         let cs = {
          country:cols[3],
          confirmed:+cols[7],
          death:+cols[8],
          recovered:+cols[9],
          active:+cols[10]
        };

        let temp:Globaldata = rawdata[cs.country];
        if(temp)
        {
          temp.active= cs.active+ temp.active;
          temp.confirmed= cs.confirmed+temp.confirmed;
          temp.death = cs.death+temp.death;
          temp.recovered= cs.recovered+temp.recovered;
          rawdata[cs.country] = temp;

        } else {
          rawdata[cs.country] = cs;
        }


        })
        // console.log(rawdata);
        

        return <Globaldata[]>Object.values(rawdata);

      }),

      catchError((error:HttpErrorResponse)=>{
        if(error.status==404)
        {
          this.day = this.day - 1
          this.globalUrl=`${this.baseurl}${this.getDate(this.month)}-${this.getDate(this.day)}-${this.year}${this.ext}`;
          // console.log(this.globalUrl);
          return this.getGlobalData();
          

        }
      })
    )
  }

}
