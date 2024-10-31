import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmenthome',
  templateUrl: './departmenthome.component.html',
  styleUrl: './departmenthome.component.css'
})
export class DepartmenthomeComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['departmenthome']);
  }
}
