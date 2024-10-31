import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          this.reports = response.data['reports'];
        } else {
          console.error(response.data);
        }
      },
      error: (error) => {
        console.error('Error fetching reports!', error);
      }
    })
  }


  updateReport(report: Report): void {
    this.reportService.getReportById(report.id).subscribe({
      next: (updatedReport: Report) => {
        this.reports = this.reports.map(r => r.id === updatedReport.id? updatedReport : r);
        console.log('Updated report:', updatedReport);
      },
      error: (error) => {
        console.error('Error updating report!', error);
      }
    })
    console.log('Updating report:', report);
  }


  deleteReport(id: number): void {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe({
        next: () => {
          this.reports = this.reports.filter(report => report.id!== id);
          console.log('Report deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting report!', error);
        }
      })
    }
  }
}
