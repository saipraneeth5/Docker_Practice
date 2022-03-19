import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report, ReportService } from 'src/app/service/report.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  pId: number;
  report: Report[] = [];
  constructor(private reportservice: ReportService, private router: Router, private activatedRoute: ActivatedRoute, private _location: Location) {
    this.pId = this.activatedRoute.snapshot.params["pId"];
  }

  ngOnInit(): any {
    this.reportservice.viewReports(this.pId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response:any) {
    this.report = response;
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
  
  