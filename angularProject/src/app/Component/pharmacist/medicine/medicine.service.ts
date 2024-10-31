import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine.model';
import { ApiResponse } from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  private apiUrl = 'http://localhost:8080/api/medicines';

  constructor(private http: HttpClient) {}

  getAllMedicines(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getMedicineById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  addMedicine(medicine: {
    medicineStrength: string;
    instructions: string;
    price: number;
    dosageForm: string;
    id: number;
    stock: number;
    medicineName: string;
    manufacturer: {id: number }
  }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/`, medicine);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  addStock(id: number, quantity: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}/add-stock?quantity=${quantity}`, {});
  }

  subtractStock(id: number, quantity: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}/subtract-stock?quantity=${quantity}`, {});
  }

  searchMedicinesByName(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/search?name=${name}`);
  }

  getMedicinesByManufacturer(manufacturerId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/manufacturer/${manufacturerId}`);
  }
}
