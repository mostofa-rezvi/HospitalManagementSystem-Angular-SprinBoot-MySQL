import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientProfileModel } from './patientprofile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientprofileService {
  private apiUrl = 'http://localhost:3000/patientprofile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<PatientProfileModel> {
    return this.http.get<PatientProfileModel>(this.apiUrl);
  }

  updateProfile(profile: PatientProfileModel): Observable<PatientProfileModel> {
    return this.http.put<PatientProfileModel>(this.apiUrl, profile);
  }
}
