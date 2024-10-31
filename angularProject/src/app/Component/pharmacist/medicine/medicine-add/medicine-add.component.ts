import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from "../medicine.service";
import { ManufacturerService } from '../../../admin/manufacturer/manufacturer.service';
import { Manufacturer } from '../../../admin/manufacturer/manufacturer.model';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
})
export class MedicineAddComponent implements OnInit {
  manufacturer: Manufacturer = new Manufacturer();
  manufacturers: Manufacturer[] = [];

  medicine: {
    medicineStrength: string;
    instructions: string;
    price: number;
    dosageForm: string;
    id: number;
    stock: number;
    medicineName: string;
    manufacturer: { id: number }
  } = {
      id: 0,
      medicineName: '',
      dosageForm: '',
      instructions: '',
      medicineStrength: '',
      price: 0,
      stock: 0,
      manufacturer: { id: 0 }
    };

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private manufacturerService: ManufacturerService
  ) { }

  ngOnInit(): void {
    this.manufacturerService.getManufacturers().subscribe({
      next: (response) => {
        this.manufacturers = response.data['manufacturers']; 
      },
      error: (error) => {
        console.error("Error fetching manufacturers", error);
        alert('Failed to load manufacturers.');
      }
    });
  }

  onSubmit(): void {
    //this.medicine.manufacturer.id = this.manufacturer.id;
    if (!this.medicine.manufacturer.id) {
      alert('Please select a manufacturer.');
      return;
    }

    this.medicineService.addMedicine(this.medicine).subscribe({
      next: () => {
        alert('Medicine added successfully!');
        this.router.navigate(['/medicines']); 
      },
      error: (error) => {
        console.error(error);
        alert('Failed to add medicine.');
      },
    });
  }
}
