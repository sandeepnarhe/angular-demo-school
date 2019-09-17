import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '../model/School';


const httpOtions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  shoolServiceURL: string = "http://localhost:3000/schools";


  constructor(private http:HttpClient) { }

  getAllSchools():Observable<School[]>{
    return this.http.get<School[]>(this.shoolServiceURL);
  }

  addSchool(school:School):Observable<School>{
     
    console.log("Adding school details in service.... " + school.name);
    return this.http.post<School>(this.shoolServiceURL,school,httpOtions);
  }

  updateSchool(school:School):Observable<School>{
    console.log("Updating school details in service.... " + school.name + "School id " + school.id);
    const url =  this.shoolServiceURL + "/" + school.id;     
    console.log("URL: " + url);
    return this.http.put<School>(url,school,httpOtions);
  }

  deleteSchool(id:String){
    const url =  this.shoolServiceURL + "/" + id;
    return this.http.delete(url,httpOtions);
  }

}
