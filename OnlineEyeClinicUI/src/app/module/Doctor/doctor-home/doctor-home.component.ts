import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorDetails } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  doctor: DoctorDetails[] = [];
  data: DoctorDetails = new DoctorDetails();
  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.data = JSON.parse(atob(this.activatedRoute.snapshot.params['doctor1']));
    this.doctor.push(this.data);
  }

  ngOnInit(): void {
  }

  onViewAppointment(){
    let dId = this.data.doctorId;
    this.router.navigate(['/viewdoctorappointment',dId]); 
  }
}
