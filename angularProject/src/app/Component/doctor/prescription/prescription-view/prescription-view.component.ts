import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription.model';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.css']
})
export class PrescriptionViewComponent implements OnInit {
  prescription: Prescription | null = null;

  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchPrescription(id);
  }

  fetchPrescription(id: number): void {
    this.prescriptionService.getPrescriptionById(id).subscribe({
      next: (prescription: Prescription) => {
        this.prescription = prescription;
      },
      error: (error) => {
        console.error('Error fetching prescription:', error);
      }
    });
  }
}
