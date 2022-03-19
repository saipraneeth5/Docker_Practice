import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  obj1: any;
   appointment: Appointment[] = [];
  constructor(private appointmentservice:AppointmentService,private router:Router) {
    this.obj1 = this.appointmentservice.updateMethod();
   }
   onUpdate(uappointment: Appointment): any {
    return this.appointmentservice.onUpdate(uappointment).subscribe(data => {
      this.router.navigate(['/viewpatientappointment',this.obj1.patientId])
    });
  }
  ngOnInit(): void {
  }

}

