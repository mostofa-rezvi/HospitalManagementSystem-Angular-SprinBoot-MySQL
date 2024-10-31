import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../test/test.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private baseUrl = 'http://localhost:8080/api/tests'; // Update the base URL as needed

  constructor(private http: HttpClient) {}

  getAllTests(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getTestById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createTest(test: Test): Observable<any> {
    return this.http.post<any>(this.baseUrl, test);
  }

  updateTest(id: number, test: Test): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, test);
  }

  deleteTest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
