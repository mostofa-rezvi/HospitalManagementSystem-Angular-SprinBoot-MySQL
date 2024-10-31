import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardiacdepartment',
  templateUrl: './cardiacdepartment.component.html',
  styleUrl: './cardiacdepartment.component.css'
})
export class CardiacdepartmentComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['cardiac']);
  }
}

