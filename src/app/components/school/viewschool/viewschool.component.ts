import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/model/School';

@Component({
  selector: 'app-viewschool',
  templateUrl: './viewschool.component.html',
  styleUrls: ['./viewschool.component.css']
})
export class ViewschoolComponent implements OnInit {

  schools: School[];
  currentSchool: School;
  deleteMsg: string;
  isEdit:boolean =false;

  constructor(private schoolService: SchoolService) {  this.getAllSchools();}

  ngOnInit() {

   
  }

  getAllSchools() {
    this.schoolService.getAllSchools().subscribe(
      schools => {
        this.schools = schools;
      }
    )
  }

  addNewSchoolNotification() {
    console.log("Add School Notification received!!")
    this.getAllSchools();
  }

  deleteSchool(id: string) {
    this.schoolService.deleteSchool(id).subscribe(output => {
      this.deleteMsg = "School has successfull removed";
      this.getAllSchools();
    });
  }

  getSchoolDetails(school:School){
    this.currentSchool = school;
    this.isEdit = true;
  }

}
