import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDetails, DoctorService } from 'src/app/service/doctor.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {

  pId :number;
  doctors : DoctorDetails[] = [];

  constructor(private doctorservice:DoctorService,private router: Router, private _location: Location) { 
  }

  ngOnInit(): any {
    this.doctorservice.viewDoctors().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response:any) {
    this.doctors = response;
  }
  column:string="reportId";
  order: string = "ascending";
  sort(column: string, order: string) {
    this.column = column;
    if(this.order == "ascending")
      this.order = "descending";

    else  this.order="ascending";

  }

  onBack(){
    this._location.back();
  }
}
