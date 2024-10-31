import { Component, OnInit } from '@angular/core';
import { Prescription } from '../prescription.model';
import { PrescriptionService } from '../prescription.service';
import { Role, UserModel } from '../../../../user/user.model';
import { Medicine } from '../../../pharmacist/medicine/medicine.model';
import { Test } from '../../../laboratorist/test/test.model';
import { UserService } from '../../../../user/user.service';
import { MedicineService } from '../../../pharmacist/medicine/medicine.service';
import { TestService } from '../../../laboratorist/test/test.service';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.css']
})
export class PrescriptionCreateComponent implements OnInit {

  prescription: Prescription = new Prescription();
  medicines: Medicine[] = [];
  selectedMedicine!: Medicine;
  selectedMedicines: Medicine[] = [];

  selectedTests: Test[] = [];
  selectedTest!: Test;
  tests: Test[] = [];

  patients: UserModel[] = [];
  selectedUser!: UserModel;

  userName!: string;
  userNames: string[] = [];


  constructor(
    private prescriptionService: PrescriptionService,
    private userService: UserService,
    private medicineService: MedicineService,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.loadPatients();
    this.loadMedicines();
    this.loadTests();
  }

  // loadPatients() {
  //   this.userService.findUsersByRole('PATIENT').subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.patients = response.data as UserModel[];
  //       } else {
  //         console.error('Failed to fetch patients:', response.message);
  //       }
  //     }
  //   })
  // }

  // loadMedicines() {
  //   this.medicineService.getAllMedicines().subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.medicines = response.data as Medicine[];
  //       } else {
  //         console.error('Failed to fetch medicines:', response.message);
  //       }
  //     }
  //   })
  // }

  // loadTests() {
  //   this.testService.getAllTests().subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.tests = response.data as Test[];
  //       } else {
  //         console.error('Failed to fetch tests:', response.message);
  //       }
  //     }
  //   })
  // }

  // loadPatients() {
  //   this.userService.findUsersByRole('PATIENT').subscribe({
  //     next: (response: ApiResponse) => {
  //       console.log('Patients API response:', response);  // Log the entire response for debugging
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.patients = response.data as UserModel[];
  //         console.log('Patients fetched successfully:', this.patients);
  //       } else {
  //         console.error('Failed to fetch patients:', response.message || 'Unexpected API response structure');
  //         if (typeof response.data === 'object') {
  //           console.log('Data is not an array, received object:', response.data);  // Debugging line
  //         }
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error fetching patients:', err);
  //     }
  //   });
  // }

  // loadMedicines() {
  //   this.medicineService.getAllMedicines().subscribe({
  //     next: (response: ApiResponse) => {
  //       console.log('Medicines API response:', response);  // Log the entire response for debugging
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.medicines = response.data as Medicine[];
  //         console.log('Medicines fetched successfully:', this.medicines);
  //       } else {
  //         console.error('Failed to fetch medicines:', response.message || 'Unexpected API response structure');
  //         if (typeof response.data === 'object') {
  //           console.log('Data is not an array, received object:', response.data);  // Debugging line
  //         }
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error fetching medicines:', err);
  //     }
  //   });
  // }

  // loadTests() {
  //   this.testService.getAllTests().subscribe({
  //     next: (response: ApiResponse) => {
  //       console.log('Tests API response:', response);  // Log the entire response for debugging
  //       if (response.successful && Array.isArray(response.data)) {
  //         this.tests = response.data as Test[];
  //         console.log('Tests fetched successfully:', this.tests);
  //       } else {
  //         console.error('Failed to fetch tests:', response.message || 'Unexpected API response structure');
  //         if (typeof response.data === 'object') {
  //           console.log('Data is not an array, received object:', response.data);  // Debugging line
  //         }
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error fetching tests:', err);
  //     }
  //   });
  // }

  loadPatients() {
    this.userService.findUsersByRole('PATIENT').subscribe({
      next: (response: ApiResponse) => {
        if (response.successful && response.data) {
          if (Array.isArray(response.data['PATIENT'])) {
            this.patients = response.data['PATIENT'];
          }
          console.log('Patients fetched successfully:', this.patients);
        } else {
          console.error('Failed to fetch patients:', response.message || 'Unexpected API response structure');
        }
      },
      error: (err) => {
        console.error('Error fetching patients:', err);
      }
    });
  }

  loadMedicines() {
    this.medicineService.getAllMedicines().subscribe({
      next: (response: ApiResponse) => {
        if (response.successful && response.data) {
          if (Array.isArray(response.data['medicines'])) {
            this.medicines = response.data['medicines'];
          }
          console.log('Medicines fetched successfully:', this.medicines);
        } else {
          console.error('Failed to fetch medicines:', response.message || 'Unexpected API response structure');
        }
      },
      error: (err) => {
        console.error('Error fetching medicines:', err);
      }
    });
  }

  loadTests() {
    this.testService.getAllTests().subscribe({
      next: (response: ApiResponse) => {
        if (response.successful && response.data) {
          if (Array.isArray(response.data['tests'])) {
            this.tests = response.data['tests'];
          }
          console.log('Tests fetched successfully:', this.tests);
        } else {
          console.error('Failed to fetch tests:', response.message || 'Unexpected API response structure');
        }
      },
      error: (err) => {
        console.error('Error fetching tests:', err);
      }
    });
  }


  // onUserSelect(): void {
  //   this.selectedUser = this.patients.find(patient => patient.id === this.selectedPatientId) || new UserModel();
  // }

  onUserSelect(): void {
    // console.log('Selected user:', this.selectedUser);
    if (this.selectedUser) {
      this.userName = this.selectedUser.role === Role.PATIENT ? this.selectedUser.name : '';
    }
  }

  onMedicineSelect(): void {
    if (this.selectedMedicine && !this.selectedMedicines.includes(this.selectedMedicine)) {
      this.selectedMedicines.push(this.selectedMedicine);
    }
  }

  onTestSelect(): void {
    if (this.selectedTest && !this.selectedTests.includes(this.selectedTest)) {
      this.selectedTests.push(this.selectedTest);
    }
  }

  removeMedicine(index: number) {
    this.selectedMedicines.splice(index, 1);
  }

  removeTest(index: number) {
    this.selectedTests.splice(index, 1);
  }

  createPrescription(prescription: Prescription) {
    this.prescriptionService.createPrescription(prescription).subscribe({
      next: (newPrescription: Prescription) => {
        console.log('Prescription created successfully!', newPrescription);
        alert('Prescription created successfully');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating prescription!', error);
        alert('Failed to create prescription');
      }
    });
  }

  private resetForm() {
    this.prescription = new Prescription();
    this.selectedMedicines = [];
    this.selectedTests = [];
    this.selectedUser = new UserModel();
    this.loadTests();
    this.loadPatients();
    this.loadMedicines();
  }
}
