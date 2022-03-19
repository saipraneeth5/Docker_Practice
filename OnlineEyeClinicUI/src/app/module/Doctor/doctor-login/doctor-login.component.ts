import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Doctor,
  DoctorDetails,
  DoctorService,
} from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent implements OnInit {
  constructor(private myservice: DoctorService, private router: Router) {}

  ngOnInit(): void {}

  doctor: DoctorDetails = new DoctorDetails();
  onSubmit(doc: Doctor): any {
    // console.log(doc.username);
    // console.log(doc.password);
    this.myservice
      .validateDoctor(doc.username, doc.password)
      .subscribe((data: any) => {
        this.doctor = data;
        // console.log(this.doctor.address);
        if (this.doctor == null) {
          alert('Invalid Credentails');
        } else {
          alert('Login Successful');
          let doctor1 = btoa(JSON.stringify(this.doctor));
          this.router.navigate(['/doctorhomepage', doctor1]);
        }
      });
  }
}
