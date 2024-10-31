import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
})
export class TestCreateComponent {
  test: Test = new Test();

  constructor(private testService: TestService, private router: Router) {}

  createTest() {
    this.testService.createTest(this.test).subscribe(
      (response) => {
        console.log('Test created successfully!', response);
        this.router.navigate(['/tests']);
      },
      (error) => {
        console.error('Error creating test:', error);
      }
    );
  }
}
