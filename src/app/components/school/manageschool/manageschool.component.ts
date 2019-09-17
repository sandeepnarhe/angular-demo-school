import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { School } from 'src/app/model/School';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-manageschool',
  templateUrl: './manageschool.component.html',
  styleUrls: ['./manageschool.component.css']
})
export class ManageschoolComponent implements OnInit {

  
  message: string;

  @Output()
  addMsg: EventEmitter<String> = new EventEmitter();

  @Input()
  currentSchool: School;

  @Input()
  isEdit:boolean;

  constructor(private schoolService: SchoolService) {
    this.isEdit = false;
  }

  ngOnInit() {
   
    this.currentSchool = {
      "city": "",
      "name": "",
    }
  }

  addSchool() {
    console.log("Adding School" + this.currentSchool.name)
    this.schoolService.addSchool(this.currentSchool).subscribe(school => {
      this.message = "School has successfully added..";
      this.addMsg.emit("MSG_NEW_POST");
    })
  }

  updateSchool(){
    console.log("Updating School Details!!")

    this.schoolService.updateSchool(this.currentSchool).subscribe(school => {
      this.message = "School details successfully updated..";
     
    })
  }

  clear(){
    console.log("inside clear!")
    this.isEdit = false;
    this.ngOnInit();
  }

}
