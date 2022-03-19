import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient, PatientServeService } from 'src/app/service/patient-serve.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient;
  constructor(private patientServe: PatientServeService, private router: Router) { 
    this.patient  = this.patientServe.updateMethod();
  }

  onUpdate(updatepatient: Patient): any {
    console.log(updatepatient);
      this.patientServe.onUpdate(updatepatient).subscribe((data: any) => {
      this.patient=data;
      this.router.navigate(['/patienthome',this.patient]);
    });
  }

  ngOnInit(): void {
  }

}
