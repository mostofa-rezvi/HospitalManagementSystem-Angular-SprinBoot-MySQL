import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../security/service/auth.service";

@Component({
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrl: './navbarhome.component.css'
})
export class NavbarhomeComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  navigateToAppointment(event: Event){
    event.preventDefault();
    this.router.navigate(["/appointment"]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
