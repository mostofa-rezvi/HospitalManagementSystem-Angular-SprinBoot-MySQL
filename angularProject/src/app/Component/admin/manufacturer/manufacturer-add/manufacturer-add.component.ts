import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturer } from "../manufacturer.model";
import { ManufacturerService } from "../manufacturer.service";
import { ApiResponse } from "../../../../util/api.response.model";

@Component({
  selector: 'app-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.css']
})
export class ManufacturerAddComponent {
  manufacturer: Manufacturer = new Manufacturer();
  errorMessage: string | undefined = '';
  successMessage: string = '';

  constructor(private manufacturerService: ManufacturerService, private router: Router) {}

  onSubmit(): void {
    this.manufacturerService.createManufacturer(this.manufacturer).subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.successMessage = 'Manufacturer added successfully!';
          setTimeout(() => this.router.navigate(['/manufacturers']), 2000); // Redirect after 2 seconds
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Failed to add manufacturer: ' + error.message;
      }
    );
  }
}
