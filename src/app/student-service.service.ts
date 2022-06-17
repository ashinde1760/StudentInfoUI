import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Student } from './Components/registration/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  addStudent(student:Student)
  {
    return this.http.post(`${environment.url}/student`,student)
  }

  getStudent()
  {
    return this.http.get(`${environment.url}/students`)
  }

}
