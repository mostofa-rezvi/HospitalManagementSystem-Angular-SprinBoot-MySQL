import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorshome',
  templateUrl: './doctorshome.component.html',
  styleUrl: './doctorshome.component.css'
})
export class DoctorshomeComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['doctorshome']);
  }
}
