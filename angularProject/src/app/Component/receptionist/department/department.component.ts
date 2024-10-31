import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../admin/department/department.model';
import { DepartmentService } from '../../admin/department/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {
  departments: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(response => {
      if (response.successful) {
        this.departments = response.data.departments;
      } else {
        alert('Error fetching departments: ' + response.message);
      }
    });
  }

  // Navigate to Add Department page
  navigateToAddDepartment(): void {
    this.router.navigate(['/departments/add']);
  }

  // Navigate to Edit/Update Department page
  editDepartment(id: number): void {
    this.router.navigate([`/departments/update/${id}`]);
  }

  // Delete Department
  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(response => {
      if (response.successful) {
        this.departments = this.departments.filter(dept => dept.id !== id);
      } else {
        alert('Error deleting department: ' + response.message);
      }
    });
  }
}
