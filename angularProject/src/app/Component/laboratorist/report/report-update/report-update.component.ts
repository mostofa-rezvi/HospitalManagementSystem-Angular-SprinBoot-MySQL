import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { UserService } from '../../../../user/user.service';
import { TestService } from '../../test/test.service';
import { UserModel } from '../../../../user/user.model';
import { Test } from '../../test/test.model';

@Component({
  selector: 'app-report-update',
  templateUrl: './report-update.component.html',
  styleUrls: ['./report-update.component.css']
})
export class ReportUpdateComponent implements OnInit {
  report: Report = new Report();
  users: UserModel[] = [];
  tests: Test[] = [];
  reportId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService,
    private userService: UserService,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.reportId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadReport();
    this.loadUsers();
    this.loadTests();
  }

  loadReport(): void {
    this.reportService.getReportById(this.reportId).subscribe(
      (data: Report) => {
        this.report = data;
      },
      error => {
        console.error('Error loading report:', error);
      }
    );
  }

  loadUsers(): void {
    this.userService.findAllUsers().subscribe(
      (response) => {
        this.users = response.data['users'];
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  loadTests(): void {
    this.testService.getAllTests().subscribe(
      (response) => {
        this.tests = response.data['tests'];
      },
      error => {
        console.error('Error fetching tests:', error);
      }
    );
  }

  updateReport(): void {
    this.reportService.updateReport(this.report).subscribe(
      () => {
        console.log('Report updated successfully');
        this.router.navigate(['/reports']);
      },
      error => {
        console.error('Error updating report:', error);
      }
    );
  }
}
