import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spectacles, SpectaclesService } from 'src/app/service/spectacles.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-spectacles',
  templateUrl: './view-spectacles.component.html',
  styleUrls: ['./view-spectacles.component.css']
})
export class ViewSpectaclesComponent implements OnInit {

  imageWidth: number = 150;
  imageMargin: number = 5;

  spectacle: Spectacles[] = [];
  constructor(private spectaclesservice: SpectaclesService, private router: Router, private _location: Location) {
  }

  ngOnInit(): any {
    this.spectaclesservice.getspectacles().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: any) {
    this.spectacle = response;
  }
  // update(updatespectacles: spectacles) {
  //   this.spectacle.update(updatespectacles);
  //   this.router.navigate(['/updatespecs']); //updating the employee
  // }
  // delete(deletespectacles: spectacles): any {
  //   this.spectacle.splice(this.spectacle.indexOf(deletespectacles), 1);
  //   this.spectaclesservice.delete(deletespectacles.id).subscribe(data => {
  //     alert(data);

  //   });
  //   this.router.navigate(['/listspecs']);
  // }
  column: string = "spectaclesId";
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


