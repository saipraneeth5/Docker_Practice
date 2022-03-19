import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  updatetest: Tests = new Tests;
  constructor(private httpService:HttpClient){
  }
  public gettests() {
    console.log("ins service get tests");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Tests>("http://localhost:7678/onlineeyeclinic/view_all-tests");
  }
  public addtest(addtest: Tests) {
    console.log("ins service add");
    console.log(addtest);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7678/onlineeyeclinic/add_test", addtest,  { headers, responseType: 'text'});
  }
  
  public update(updatetest: Tests) {
    this.updatetest = updatetest;
  }
  public updateMethod() {
    return this.updatetest;
  }
  public onUpdate(updatetest: Tests) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:7078/update_test", updatetest,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:7078/delete_test_by_id/" + id,  { headers, responseType: 'text'});
  }

}
   
  
export class Tests {
  testId: number=0;
  testName: string="";
  testType: string="";
  testDescription: string="";
  testCost: number=0;
}