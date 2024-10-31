import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { DepartmentModel } from '../department.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html'
})
export class DepartmentAddComponent {

  constructor(private departmentService: DepartmentService, private router: Router) {}

  onSubmit(form: any) {
    const department: DepartmentModel = form.value;
    this.departmentService.addDepartment(department).subscribe(response => {
      if (response.successful) {
        this.router.navigate(['/departments']);
      } else {
        alert('Error adding department: ' + response.message);
      }
    });
  }
}
