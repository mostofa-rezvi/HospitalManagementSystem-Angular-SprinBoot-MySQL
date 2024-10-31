import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineBill } from './medicine-bill.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class MedicineBillService {
  private apiUrl = 'http://localhost:8080/api/bills'; // Adjust URL to match your Spring Boot API

  constructor(private http: HttpClient) { }

  getAllBills(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getBillById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  createBill(bill: MedicineBill)  : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/create`, bill);
  }

  updateBill(id: number, bill: MedicineBill): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, bill);
  }

  deleteBill(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
