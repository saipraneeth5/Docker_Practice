import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpService: HttpClient) {}

  public viewDoctors(){
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<DoctorDetails>("http://localhost:7678/onlineeyeclinic/view_doctors_list");
  }

  validateDoctor(username: string, password: string) {
    const headers = new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.get('http://localhost:7678/onlineeyeclinic/validate_doctor/' +username + '/' +password,{ headers });
  }
}

export class Doctor {
  username: string = '';
  password: string = '';
}

export class DoctorDetails {
  doctorId: number = 0;
  doctorName: string = '';
  doctorConsultationTime: string = '';
  doctorMobile: string = '';
  doctorEmail: string = '';
  userName: string = '';
  password: string = '';
  address: string = '';
}
