import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine.model';
import { MedicineService } from '../medicine.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { Manufacturer } from '../../../admin/manufacturer/manufacturer.model';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [];
  manufacturer: Manufacturer = new Manufacturer();
  isLoading = true;

  constructor(private medicineService: MedicineService, private router: Router) {}

  ngOnInit(): void {
    this.fetchMedicines();
  }

  fetchMedicines(): void {
    this.medicineService.getAllMedicines().subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          console.log(this.medicines)
          this.medicines = response.data['medicines'];
        } else {
          alert(response.message || 'Failed to load medicines');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Error fetching medicines');
        this.isLoading = false;
      }
    });
  }

  updateStock(id: number): void {
    const quantity = prompt('Enter the quantity to add/subtract:');
    if (quantity && !isNaN(Number(quantity))) {
      const quantityNumber = Number(quantity);
      if (quantityNumber >= 0) {
        this.medicineService.addStock(id, quantityNumber).subscribe({
          next: (response: ApiResponse) => {
            if (response.successful) {
              alert('Stock updated successfully!');
              this.updateLocalMedicine(id, response.data as Medicine);
            } else {
              alert('Failed to update stock');
            }
          },
          error: (error) => {
            console.error(error);
            alert('Error updating stock');
          }
        });
      } else {
        this.medicineService.subtractStock(id, Math.abs(quantityNumber)).subscribe({
          next: (response: ApiResponse) => {
            if (response.successful) {
              alert('Stock updated successfully!');
              this.updateLocalMedicine(id, response.data as Medicine);
            } else {
              alert('Failed to update stock');
            }
          },
          error: (error) => {
            console.error(error);
            alert('Error updating stock');
          }
        });
      }
    } else {
      alert('Invalid input. Please enter a valid number.');
    }
  }

  updateLocalMedicine(id: number, updatedMedicine: Medicine): void {
    this.medicines = this.medicines.map(med => med.id === id ? updatedMedicine : med);
  }

  navigateToUpdate(id: number): void {
    this.router.navigate([`/medicines/update/${id}`]);
  }
}
