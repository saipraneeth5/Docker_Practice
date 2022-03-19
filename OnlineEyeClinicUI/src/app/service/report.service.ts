import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  pId:number;
  constructor(private httpservice: HttpClient) { }
  public viewReports(pId){
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpservice.get<Report>("http://localhost:7678/onlineeyeclinic/view_report_by_patient-id/"+pId);
  }

  public addReport(addreport: Report) {
    console.log(addreport);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpservice.post("http://localhost:7678/onlineeyeclinic/add_report", addreport,  { headers, responseType: 'text'});
  }
}


export class Report{
  reportId:number=0;
  patientId:number=0;
  dateOfReport:Date =new Date;
  descriptionOfReport: string='';
  visualAcuity:string='';
  visualAcuityDistance='';
  visualAcuityNear='';
}
  