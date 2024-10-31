import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neurodepartment',
  templateUrl: './neurodepartment.component.html',
  styleUrl: './neurodepartment.component.css'
})
export class NeurodepartmentComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['neurodepart']);
  }
}
