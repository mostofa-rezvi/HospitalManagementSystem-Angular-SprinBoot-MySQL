import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orthopedicsdepartment',
  templateUrl: './orthopedicsdepartment.component.html',
  styleUrl: './orthopedicsdepartment.component.css'
})
export class OrthopedicsdepartmentComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['orthodepart']);
  }
}
