import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/service/appointment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  pId:number=0;
  constructor(private appointmentservice: AppointmentService,private router: Router, private activatedRoute: ActivatedRoute,  private _location: Location) {
    this.pId = this.activatedRoute.snapshot.params["pId"];
   }

  ngOnInit(): void {
  }

  onSubmit(bookapp:Appointment):any{
    console.log(bookapp);
    this.appointmentservice.bookAppointment(bookapp).subscribe(data => {
      alert("Appointment created successfully");
      this._location.back();
    });
  }
  
  onBack(){
    this._location.back();
  }
  
}
