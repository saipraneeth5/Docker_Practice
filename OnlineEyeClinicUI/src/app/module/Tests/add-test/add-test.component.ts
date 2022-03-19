import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tests, TestsService } from 'src/app/service/tests.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  constructor(private testservice: TestsService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(addtest:Tests):any{
    console.log(addtest);
     this.testservice.addtest(addtest).subscribe(data  => {
       alert("Test Added Successfully");
      this._location.back();
    });
  }
  
  onBack(){
    this._location.back();
  }
}
