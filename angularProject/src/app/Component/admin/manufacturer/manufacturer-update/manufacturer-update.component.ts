import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from "../manufacturer.service";
import { Manufacturer } from "../manufacturer.model";
import { ApiResponse } from "../../../../util/api.response.model";

@Component({
  selector: 'app-manufacturer-update',
  templateUrl: './manufacturer-update.component.html',
  styleUrls: ['./manufacturer-update.component.css']
})
export class ManufacturerUpdateComponent implements OnInit {
  manufacturer: Manufacturer = new Manufacturer();
  errorMessage: string | undefined = '';
  successMessage: string = '';
  manufacturerId: number;

  constructor(
    private manufacturerService: ManufacturerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.manufacturerId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getManufacturerById();
  }

  getManufacturerById(): void {
    this.manufacturerService.getManufacturerById(this.manufacturerId).subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.manufacturer = response.data.manufacturer;
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Error fetching manufacturer: ' + error.message;
      }
    );
  }

  onSubmit(): void {
    this.manufacturerService.updateManufacturer(this.manufacturerId, this.manufacturer).subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.successMessage = 'Manufacturer updated successfully!';
          setTimeout(() => this.router.navigate(['/manufacturers']), 2000); // Redirect after 2 seconds
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Error updating manufacturer: ' + error.message;
      }
    );
  }
}
