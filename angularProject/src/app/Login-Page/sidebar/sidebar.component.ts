import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/service/auth.service';
import {Role} from "../../user/user.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(
    protected authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  protected readonly Role = Role;
}
