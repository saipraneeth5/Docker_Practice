import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Patient,
  PatientServeService,
} from 'src/app/service/patient-serve.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  patient: Patient;
  constructor(
    private patientServe: PatientServeService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {}

  onSubmit(addpatient: Patient): any {
    console.log(addpatient);
    this.patientServe.addPatient(addpatient).subscribe((data: any) => {
      this.patient = data;
      this.router.navigate(['/patienthome', this.patient]);
    });
  }
  onBack() {
    this._location.back();
  }
}
