import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../security/service/auth.service';
import { Router } from '@angular/router';
import {Role} from "../../user/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    protected authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  protected readonly Role = Role;
}
