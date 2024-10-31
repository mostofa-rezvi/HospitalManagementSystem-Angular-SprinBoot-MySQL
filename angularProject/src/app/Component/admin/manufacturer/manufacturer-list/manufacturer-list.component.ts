import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../manufacturer.model";
import {ApiResponse} from "../../../../util/api.response.model";
import {ManufacturerService} from "../manufacturer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {
  manufacturers: Manufacturer[] = [];
  errorMessage: string | undefined = '';

  constructor(
    private manufacturerService: ManufacturerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadManufacturers();
  }

  loadManufacturers(): void {
    this.manufacturerService.getManufacturers().subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.manufacturers = response.data.manufacturers; // Adjust based on actual response structure
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Failed to load manufacturers: ' + error.message;
      }
    );
  }

  deleteManufacturer(id: number): void {
    if (confirm('Are you sure you want to delete this manufacturer?')) {
      this.manufacturerService.deleteManufacturer(id).subscribe(
        (response: ApiResponse) => {
          if (response.successful) {
            this.loadManufacturers(); // Reload the list after deletion
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          this.errorMessage = 'Failed to delete manufacturer: ' + error.message;
        }
      );
    }
  }

  editManufacturer(id: number): void {
    this.router.navigate([`/manufacturers/update`, id]);
  }
}
