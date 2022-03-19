import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/service/appointment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-patient-appointment',
  templateUrl: './view-patient-appointment.component.html',
  styleUrls: ['./view-patient-appointment.component.css']
})
export class ViewPatientAppointmentComponent implements OnInit {

  pId:number=0;
  appointments: Appointment[] = [];
  constructor(private appointmentservice:AppointmentService, private router:Router, private activatedRoute: ActivatedRoute,  private _location: Location) { 
    this.pId = this.activatedRoute.snapshot.params["pId"];
  }

  ngOnInit(): any {
    this.appointmentservice.viewAppointments(this.pId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response:any) {
    this.appointments = response;
  }
  update(updateappointment: Appointment) {
    this.appointmentservice.update(updateappointment);
    this.router.navigate(['/updateapppointment']); 
  }
  delete(deleteappointment: Appointment): any {
    this.appointments.splice(this.appointments.indexOf(deleteappointment), 1);
    this.appointmentservice.delete(deleteappointment.appointmentId).subscribe(data => {
    });
    this.router.navigate(['/viewpatientappointment',this.pId]);
  }
  onBack(){
    this._location.back();
  }
}
