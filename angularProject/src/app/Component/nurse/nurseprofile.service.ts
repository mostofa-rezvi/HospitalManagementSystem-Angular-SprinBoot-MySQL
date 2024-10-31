import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NurseProfileModel } from './nurseprofile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseprofileService {
  private apiUrl = 'http://localhost:3000/nurseprofile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<NurseProfileModel> {
    return this.http.get<NurseProfileModel>(this.apiUrl);
  }

  updateProfile(profile: NurseProfileModel): Observable<NurseProfileModel> {
    return this.http.put<NurseProfileModel>(this.apiUrl, profile);
  }
}
