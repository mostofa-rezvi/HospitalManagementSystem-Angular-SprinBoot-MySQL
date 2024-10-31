import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { Role, UserModel } from '../../../../user/user.model';
import { ApiResponse } from '../../../../util/api.response.model';
import { Test } from '../../test/test.model';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  reports: Report = new Report();
  user: UserModel = new UserModel();
  test: Test = new Test();

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    const reportId = this.route.snapshot.params['id'];

    this.reportService.getById(reportId).subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          this.reports = response.data.report;
          console.log('Report fetched:', this.reports);
        } else {
          console.error(response.data);

        }
      },
      error: (error) => {
        console.error('Error fetching reports!', error);

      }
    });
  }

  printReport() {
    const printContents = document.getElementById('printable-report')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    setTimeout(() => {
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }, 500);
  }

  protected readonly Role = Role;
}
