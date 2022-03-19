import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tests, TestsService } from 'src/app/service/tests.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {

  test: Tests[] = [];

  constructor(private testservice: TestsService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.testservice.gettests().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: any) {
    this.test = response;
  }

  column: string = "testId";
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

