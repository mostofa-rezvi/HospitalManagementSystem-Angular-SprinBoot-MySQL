import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childdepartment',
  templateUrl: './childdepartment.component.html',
  styleUrl: './childdepartment.component.css'
})
export class ChilddepartmentComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['childdepart']);
  }
}
