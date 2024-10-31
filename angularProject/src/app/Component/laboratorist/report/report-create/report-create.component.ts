import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { Role, UserModel } from '../../../../user/user.model';
import { Test } from '../../test/test.model';
import { UserService } from '../../../../user/user.service';
import { TestService } from '../../test/test.service';
import { ApiResponse } from '../../../../util/api.response.model';
import { isDate } from 'node:util/types';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {
  users: UserModel[] = [];
  selectedUser!: UserModel;
  userName!: string;
  userNames: string[] = [];

  tests: Test[] = [];  
  selectedTest!: Test;
  
  reportName!: string;
  reportResult: string = '';
  reportResults: string[] = [];

  sampleId: string = '';
  description: string = '';
  interpretation: string = '';

  constructor(
    private userService: UserService,
    private testService: TestService,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadTests();
  }

  loadUsers(): void {
    this.userService.findAllUsers().subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          if (Array.isArray(response.data['users'])) {
            this.users = response.data['users'];
          }
        } else {
          console.error('Error fetching users:', response.data);
        }
      },
      error => {
        console.error('Error fetching users!', error);
      }
    );
  }

  loadTests(): void {
    this.testService.getAllTests().subscribe(
      (response: ApiResponse) => {
        if (Array.isArray(response.data['tests'])) {
          this.tests = response.data['tests'];
        } else {
          console.error('Tests data is not an array:', response.data);
        }
      },
      (error) => {
        console.error('Error fetching tests!', error);
      }
    );
  }
  
  onTestSelect(): void {
    if (this.selectedTest) {
      this.reportName = 'Report - ' + this.selectedTest.testName;
      this.loadReportResults();
    }
  }

  onUserSelect(): void {
    // console.log('Selected user:', this.selectedUser);
    if (this.selectedUser) {
      this.userName = this.selectedUser.role === Role.PATIENT ? this.selectedUser.name : '';
    }
  }

  loadReportResults(): void {
    this.reportResults = [
      'Result 1 - Red Blood Cell Count (RBC): 5.2 million cells/mcL', 
      'Result 2 - Glucose: 90 mg/dL & Calcium: 9.2 mg/dL',
      'Result 3 - Total Cholesterol: 180 mg/dL',
      'Result 4 - Urine Protein: 2.5 g/dL',
      'Result 5 - Blood Urea Nitrogen: 7.0 mg/dL',
      'Result 6 - Serum Creatinine: 0.7 mg/dL',
      'Result 7 - Electrolyte Differentials: 135/90 mmol/L (Na+: 140/13)'
    ];
  }


  createReport(): void {
    const report: Report = {
      id: 0,
      reportName: this.reportName,
      description: this.description,
      sampleId: this.sampleId,
      reportResult: this.reportResult,
      interpretation: this.interpretation,
      testDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: this.selectedUser.id,
        name: '',
        email: '',
        password: '',
        cell: 0,
        age: 0,
        gender: '',
        birthday: new Date(),
        address: '',
        image: '',
        doctorDegree: '',
        doctorSpeciality: '',
        doctorLicense: '',
        nurseDegree: '',
        nurseSpeciality: '',
        nurseLicense: '',
        departmentId: 0,
        role: Role.ADMIN
      },
      test: {
        id: this.selectedTest.id,
        testName: '',
        description: '',
        result: '',
        instructions: ''
      }
    };

    this.reportService.createReport(report).subscribe(
      (newReport: Report) => {
        console.log('Report created successfully!', newReport);
        alert('Report created successfully');
      },
      error => {
        console.error('Error creating report!', error);
      }
    );
  }
}