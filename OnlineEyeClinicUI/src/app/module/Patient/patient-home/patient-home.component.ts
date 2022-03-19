import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Patient,
  PatientServeService,
} from 'src/app/service/patient-serve.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css'],
})
export class PatientHomeComponent implements OnInit {
  patients: Patient[] = [];
  data: Patient;
  constructor(
    private patientServe: PatientServeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): any {
    this.data = JSON.parse(this.activatedRoute.snapshot.params['newPatient']);
    console.log(this.data);
    this.patients.push(this.data);
  }

  update(updatepatient: Patient) {
    this.patientServe.update(updatepatient);
    this.router.navigate(['/updatepatient']);
  }

  onViewReport() {
    let pId = this.data.patientId;
    this.router.navigate(['/viewreport', pId]);
  }

  onBookAppointment() {
    let pId = this.data.patientId;
    this.router.navigate(['/bookappointment', pId]);
  }

  onViewAppointment() {
    let pId = this.data.patientId;
    this.router.navigate(['/viewpatientappointment', pId]);
  }

  onViewDoctors() {
    this.router.navigate(['/viewdoctors']);
  }

  onViewSpectacles() {
    this.router.navigate(['/viewspectacles']);
  }
}
