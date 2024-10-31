import { Component, OnInit } from '@angular/core';
import { MedicineBillService } from '../medicine-bill.service';
import { Router } from '@angular/router';
import { ApiResponse } from "../../../../util/api.response.model";
import { MedicineBill } from "../medicine-bill.model";
import { Medicine } from "../../medicine/medicine.model";
import { MedicineService } from "../../medicine/medicine.service";

@Component({
  selector: 'app-medicine-bill-create',
  templateUrl: './medicine-bill-create.component.html',
  styleUrls: ['./medicine-bill-create.component.css']
})
export class MedicineBillCreateComponent implements OnInit {


  bill: MedicineBill = new MedicineBill();
  availableMedicines: Medicine[] = [];  // All available medicines
  selectedMedicines: Medicine[] = [];  // Medicines selected for the bill
  selectedMedicineId: number | null = null; // Holds the selected medicine ID temporarily
  totalAmount: number = 0;
  apiError: string | undefined = '';

  constructor(
    private billService: MedicineBillService,
    private medicineService: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Load available medicines from the service
    this.medicineService.getAllMedicines().subscribe({
      next: (response: ApiResponse) => {
        this.availableMedicines = response.data['medicines'];
      },
      error: (err) => {
        console.error(err);
        this.apiError = 'Failed to load medicines';
      }
    });
  }

  addMedicine() {
    let medicine: Medicine = new Medicine();
    this.selectedMedicines.push(medicine);
    this.calculateTotal();  // Update the total amount after adding the medicine
  }

  onMedicineSelect(selectedMedicine: Medicine, event: Event) {
    const selectedMedicineId = (event.target as HTMLSelectElement).value;
    const availableMedicine = this.availableMedicines.find(med => med.id === +selectedMedicineId);
    if (availableMedicine) {
      selectedMedicine.price = availableMedicine.price;
    }
    this.calculateTotal();
  }



  removeMedicine(index: number) {
    // Remove the selected medicine from the list
    this.selectedMedicines.splice(index, 1);
    this.calculateTotal();  // Update the total after removing the medicine
  }

  calculateTotal() {
    this.totalAmount = this.selectedMedicines.reduce((sum, medicine) => {
      const price = medicine.price || 0; // Default to 0 if price is undefined
      return sum + price;
    }, 0);
    this.bill.totalAmount = this.totalAmount;
    console.log(this.totalAmount);
    console.log(this.bill.totalAmount);
  }

  calculateBalance() {
    // Calculate balance due based on total amount and amount paid
    return this.bill.totalAmount - this.bill.amountPaid;
  }

  getSelectedMedicinePrice(): number | undefined {
    const selectedMedicine = this.availableMedicines.find(med => med.id === this.selectedMedicineId);
    return selectedMedicine ? selectedMedicine.price : undefined;
  }

  onSubmit() {
    // Set selected medicines to the bill before submitting
    this.bill.medicineList = [...this.selectedMedicines];

    console.log(this.bill);

    this.billService.createBill(this.bill).subscribe({
      next: (response: ApiResponse) => {
        if (response.message) {
          this.router.navigate(['/medicine-bill-list']);
        } else {
          this.apiError = response.message;
        }
      },
      error: (err) => {
        this.apiError = 'Error connecting to the server';
      }
    });
  }

  isMedicine(): boolean {
    return true;
  }
}
