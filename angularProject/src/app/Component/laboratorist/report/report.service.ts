import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from './report.model';
import { ApiResponse } from '../../../util/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:8080/api/reports'; 

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getReports(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }


  getById(id: string): Observable<any> {

    return this.http.get(this.baseUrl + "/" + id);

  }


  getReportById(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.baseUrl}/${id}`);
  }

  createReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.baseUrl, report, this.httpOptions);
  }

  updateReport(report: Report): Observable<Report> {
    return this.http.put<Report>(`${this.baseUrl}/${report.id}`, report, this.httpOptions);
  }

  deleteReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
