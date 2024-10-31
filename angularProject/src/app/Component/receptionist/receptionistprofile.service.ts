import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReceptionistProfileModel } from './receptionistprofile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistprofileService {
  private apiUrl = 'http://localhost:3000/receptionistprofile';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<ReceptionistProfileModel> {
    return this.http.get<ReceptionistProfileModel>(this.apiUrl);
  }

  updateProfile(profile: ReceptionistProfileModel): Observable<ReceptionistProfileModel> {
    return this.http.put<ReceptionistProfileModel>(this.apiUrl, profile);
  }
}
