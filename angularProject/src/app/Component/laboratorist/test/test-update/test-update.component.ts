import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
})
export class TestUpdateComponent implements OnInit {
  test: Test = new Test(); 
  testId!: number; 
  private errorMessage: string | undefined = '';
  successMessage: string = '';

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.test= new Test(); 
    this.testId = this.route.snapshot.params['id'];
    console.log(this.testId );
    this.testService.getTestById(this.testId).subscribe({
      next: response => {
        this.test = response;
       // this.router.navigate(['/tests']);
        console.log(this.test);
      },
      error: () => {
        alert('Failed to load medicine details');
        this.router.navigate(['/tests']); 
      }
    });
  }

  updateTest(): void {
    this.testService.updateTest(this.testId, this.test).subscribe({
      next: () => {
        alert('Test updated successfully!');
        this.router.navigate(['/tests']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to update test.');
      },
    });
  }


}
