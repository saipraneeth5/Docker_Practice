import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpectaclesService {
  
  constructor(private httpService: HttpClient) { }
  public getspectacles() {
    console.log("ins service get spectacles");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Spectacles>("http://localhost:7678/onlineeyeclinic/view_all_spectacles");
  }
}

export class Spectacles {
  spectaclesId: number = 0;
  spectaclesModel: string = "";
  spectaclesDescription: string = "";
  spectaclesCost: number = 0;
}