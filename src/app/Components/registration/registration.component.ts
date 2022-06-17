import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/student-service.service';
import { Student } from './student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  addStudent:boolean=false;
  stdentData!:Student;
  constructor(private service:StudentServiceService, private router:Router) { }

  ngOnInit(): void {

  }


  onRegisterClick(){
    this.stdentData={};
    this.addStudent=true;
  }

  OnClickSubmit(){
    this.service.addStudent(this.stdentData).subscribe(
      (data=>{
        alert("student added successfully")
      }),
      (error)=>{
        alert("something went wrong")
      }
    )
  }

  onClickViewStudent(){
    this.router.navigate(["/home"])
  }
}
