import { Component, OnInit } from '@angular/core';
import { UserModel, UserRoleMap, Role } from "../user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service";
import { Observable } from "rxjs";
import { ApiResponse } from "../../util/api.response.model";
import {DepartmentService} from "../../Component/admin/department/department.service";
import {DepartmentModel} from "../../Component/admin/department/department.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  user: UserModel = new UserModel();
  id?: number;
  imageFile?: File;

  departments: DepartmentModel[] = [];

  userRoleOptions = UserRoleMap;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.userService.findById(this.id).subscribe({
        next: response => {
          if (response && response.successful) {
            this.user = response.data['user'];
            this.user.image = '';
          } else {
            alert(response?.message || 'Not Successful');
          }
        },
        error: error => {
          alert(error.error?.message || `An error occurred`);
        }
      });
    }

    this.fetchDepartments();
  }

  onImagePicked(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageFile = input.files[0];
    }
  }

  createOrUpdateUser(): void {
    const userObservable: Observable<ApiResponse> = this.id
      ? this.userService.updateUser(this.user, this.imageFile)
      : this.userService.saveUser(this.user, this.imageFile);

    userObservable.subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          this.user = new UserModel();
          alert(response?.message || 'Successful');
          this.router.navigate(['/user-list']);
        } else {
          alert(response?.message || 'Not Successful');
        }
      },
      error: error => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }

  isDoctor(): boolean {
    return this.user.role === Role.DOCTOR;
  }

  isNurse(): boolean {
    return this.user.role === Role.NURSE;
  }

  // New method to fetch departments
  fetchDepartments(): void {
    this.departmentService.getDepartments().subscribe(response => {
      if (response.successful) {
        this.departments = response.data.departments; // Store departments
      } else {
        alert('Error fetching departments: ' + response.message);
      }
    });
  }

}
