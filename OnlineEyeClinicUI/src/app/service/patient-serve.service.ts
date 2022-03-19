import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientServeService {

  updatepatient: Patient;

  constructor(private httpService: HttpClient) { }

  public addPatient(addpatient: Patient): any {
    console.log("in service add");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7678/onlineeyeclinic/add_patient", addpatient,  { headers, responseType: 'text'});
  }
 
  public update(updatepatient: Patient) {
    this.updatepatient = updatepatient;
  }
  public updateMethod() {
    return this.updatepatient;
  }

  public onUpdate(updatepatient: Patient) {
    console.log("in service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:7678/onlineeyeclinic/update_patient", updatepatient,  { headers, responseType: 'text'});
  }

  validatePatient(username: string, password: string) {
    const headers = new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.get('http://localhost:7678/onlineeyeclinic/validate_patient/' +username +'/' +password,{ headers });
  }

  public getPatientById(id:number){
    const headers = new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.get('http://localhost:7678/onlineeyeclinic/find_patient_by_id/'+id);
  }
  
}

export class Patient{
  patientId: number;
  patientName: string;
  patientAge: number;
  patientMobile: number;
  patientEmail: string;
  patientDOB: Date;
  patientUserName: string;
  patientPassword: string;
  patientAddress: string;
}

export class PatientLogin {
  username: string;
  password: string;
}