import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './security/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Care Health Center';

  constructor(
    protected authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.authService.logout(); //Jor kore logout koranor zinish
  }

}
