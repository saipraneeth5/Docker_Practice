import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  updateappointment: Appointment = new Appointment;
  constructor(private httpService: HttpClient) { }
  public viewAppointments(id:number) {
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Appointment>("http://localhost:7678/onlineeyeclinic/find_appointment_by_patient_id/"+ id);
  }
  public viewAppointmentsByDoctor(id:number) {
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Appointment>("http://localhost:7678/onlineeyeclinic/find_appointment_by_doctor_id/"+ id);
  }
  public bookAppointment(bookapp: Appointment) {
    console.log(bookapp);
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7678/onlineeyeclinic/book_appointment", bookapp,  { headers, responseType: 'text'});
  }
  public update(updateappointment: Appointment) {
    this.updateappointment = updateappointment;
  }
  public updateMethod() {
    return this.updateappointment;
  }
  public onUpdate(updateapp: Appointment) {
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:7678/onlineeyeclinic/update_appointment", updateapp, {headers, responseType: 'text'});
  }
  delete(id: number) {
    const headers= new HttpHeaders().set('content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:7678/onlineeyeclinic/delete_appointment_by_id/" +id, { headers, responseType: 'text'}); 
  }
}
export class Appointment {
  appointmentId: number=0;
  patientId: number=0;
  doctorId: number=0;
  dateOfAppointment: Date=new Date();
  timeOfAppointment: Date=new Date();
  consultationFee: number=1000; 
}

