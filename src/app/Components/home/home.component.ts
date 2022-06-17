import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/student-service.service';
import { Student } from '../registration/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentData!:Student[];

  constructor(private service:StudentServiceService) { }


  ngOnInit(): void {
    this.service.getStudent().subscribe(
      (data:any)=>{
      this.studentData=data;
      },
      (error)=>{
        alert("something went wrong");
      }
    )
  }

}
