import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from './prescription.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private apiUrl = 'http://localhost:8080/api/prescriptions'; 

  constructor(private http: HttpClient) {}

  getAllPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(this.apiUrl);
  }

  getPrescriptionById(id: number): Observable<Prescription> {
    return this.http.get<Prescription>(`${this.apiUrl}/${id}`);
  }

  createPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(this.apiUrl, prescription);
  }

  updatePrescription(id: number, prescription: Prescription): Observable<Prescription> {
    return this.http.put<Prescription>(`${this.apiUrl}/${id}`, prescription);
  }

  deletePrescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPrescriptionsByDoctor(doctorId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/doctor/${doctorId}`);
  }

  getPrescriptionsByPatient(patientId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/patient/${patientId}`);
  }

  getPrescriptionsByDate(date: Date): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/date?date=${date.toISOString()}`);
  }
}
