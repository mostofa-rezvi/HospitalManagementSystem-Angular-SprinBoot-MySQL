import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { DepartmentModel } from '../department.model';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html'
})
export class DepartmentUpdateComponent implements OnInit {
  department: DepartmentModel = new DepartmentModel();

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.departmentService.getDepartmentById(id).subscribe(response => {
      if (response.successful) {
        this.department = response.data.department;
      } else {
        alert('Error fetching department: ' + response.message);
      }
    });
  }

  // Submit updated department details
  onSubmit(): void {
    this.departmentService.updateDepartment(this.department.id, this.department).subscribe(response => {
      if (response.successful) {
        this.router.navigate(['/departments']);
      } else {
        alert('Error updating department: ' + response.message);
      }
    });
  }

  // Navigate back to Department List
  navigateToList(): void {
    this.router.navigate(['/departments']);
  }
}
