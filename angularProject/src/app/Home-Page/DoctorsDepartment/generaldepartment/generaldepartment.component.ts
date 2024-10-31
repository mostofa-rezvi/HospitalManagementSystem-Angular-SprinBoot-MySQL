import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generaldepartment',
  templateUrl: './generaldepartment.component.html',
  styleUrl: './generaldepartment.component.css'
})
export class GeneraldepartmentComponent {
  
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['generaldepart']);
  }
}
