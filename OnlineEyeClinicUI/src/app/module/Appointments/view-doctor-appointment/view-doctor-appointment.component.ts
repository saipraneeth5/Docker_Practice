import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/service/appointment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-doctor-appointment',
  templateUrl: './view-doctor-appointment.component.html',
  styleUrls: ['./view-doctor-appointment.component.css']
})
export class ViewDoctorAppointmentComponent implements OnInit {

  dId:number=0;
  appointments: Appointment[] = [];
  constructor(private appointmentservice:AppointmentService, private router:Router, private activatedRoute: ActivatedRoute,  private _location: Location) { 
    this.dId = this.activatedRoute.snapshot.params["dId"];
  }

  ngOnInit(): any {
    this.appointmentservice.viewAppointmentsByDoctor(this.dId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response:any) {
    this.appointments = response;
  }

  onBack(){
    this._location.back();
  }
}
