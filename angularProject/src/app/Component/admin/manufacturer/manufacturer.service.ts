import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from './manufacturer.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  private apiUrl = 'http://localhost:8080/api/manufacturers';

  constructor(private http: HttpClient) {}

  getManufacturers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getManufacturerById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  createManufacturer(manufacturer: Manufacturer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, manufacturer);
  }

  updateManufacturer(id: number, manufacturer: Manufacturer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, manufacturer);
  }

  deleteManufacturer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
