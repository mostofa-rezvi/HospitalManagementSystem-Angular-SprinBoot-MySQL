import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AppointmentModel} from "../../Component/receptionist/appointment/appointment.model";
import {Root} from "./appointmenthome.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmenthomeService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departments`);
  }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/doctors`);
  }

  getDoctorsByDepartment(departmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/doctors?departmentId=${departmentId}`);
  }

  createAppointment(appointment: Root): Observable<AppointmentModel> {
    return this.http.post<AppointmentModel>(`${this.apiUrl}/appointments`, appointment);
  }
}
