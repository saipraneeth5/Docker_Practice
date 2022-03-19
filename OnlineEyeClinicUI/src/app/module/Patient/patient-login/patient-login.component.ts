import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Patient,
  PatientLogin,
  PatientServeService,
} from 'src/app/service/patient-serve.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css'],
})
export class PatientLoginComponent implements OnInit {
  constructor(
    private patientServe: PatientServeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  patient: Patient;
  onSubmit(patientLogin: PatientLogin): any {
    console.log(patientLogin.username);
    console.log(patientLogin.password);
    this.patientServe
      .validatePatient(patientLogin.username, patientLogin.password)
      .subscribe((data: any) => {
        this.patient = data;
        if (this.patient == null) {
          alert('Invalid Credentails');
          // console.log(doc.username);
          // this.router.navigate(['/doctor', doc.username]);
        } else {
          alert('Login Successful');
          console.log(this.patient);
          let newPatient = JSON.stringify(this.patient);
          this.router.navigate(['/patienthome', newPatient]);
        }
      });
  }
}
