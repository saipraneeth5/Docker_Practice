import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report, ReportService } from 'src/app/service/report.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  constructor(private reportservice:ReportService,private router:Router, private _location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(addreport:Report):any{
     this.reportservice.addReport(addreport).subscribe(data => {
       alert("Report Added Successfully");
      this._location.back();
    })
  }

  onBack(){
    this._location.back();
  }
}
