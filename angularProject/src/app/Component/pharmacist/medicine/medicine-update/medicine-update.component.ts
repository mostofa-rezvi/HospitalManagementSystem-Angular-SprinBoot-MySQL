import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from "../medicine.model";
import { MedicineService } from "../medicine.service";
import {ApiResponse} from "../../../../util/api.response.model";

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
})
export class MedicineUpdateComponent implements OnInit {
  medicine: Medicine = new Medicine(); // Ensure this is correctly typed based on your model
  private errorMessage: string | undefined = '';
  successMessage: string = '';

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadMedicine(id);
  }

  loadMedicine(id: number): void {
    this.medicineService.getMedicineById(id).subscribe({
      next: (response) => {
        // Ensure the response structure is correct
        this.medicine = response.data['medicine'];
      },
      error: () => {
        alert('Failed to load medicine details');
        this.router.navigate(['/medicines']); // Redirect if there is an error
      }
    });
  }

  onSubmit(): void {
    this.medicineService.updateMedicine(this.medicine.id, this.medicine).subscribe({
      next: () => {
        alert('Medicine updated successfully!');
        this.router.navigate(['/medicines']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to update medicine.');
      },
    });
  }

}
