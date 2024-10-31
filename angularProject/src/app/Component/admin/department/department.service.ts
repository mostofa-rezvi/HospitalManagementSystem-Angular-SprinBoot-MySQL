import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentModel } from './department.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'http://localhost:8080/api/departments';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getDepartmentById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  addDepartment(department: DepartmentModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, department);
  }

  updateDepartment(id: number, department: DepartmentModel): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, department);
  }

  deleteDepartment(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
