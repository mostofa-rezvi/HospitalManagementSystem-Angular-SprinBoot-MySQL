import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppointmentModel} from './appointment.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/appointments';

  constructor(private httpClient: HttpClient) {}

  createAppointment(appointment: AppointmentModel): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${this.apiUrl}/save`, appointment);
  }

  getAllAppointments(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getAppointmentById(id: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  updateAppointment(appointment: AppointmentModel): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(`${this.apiUrl}/update`, appointment);
  }

  deleteAppointment(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  getAppointmentsByUserId(userId: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/getAppointmentsByUserId`, {
      params: { userId: userId }
    });
  }

  getAppointmentsByDoctorId(doctorId: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/getAppointmentsByDoctorId`, {
      params: { doctorId: doctorId }
    });
  }
}
