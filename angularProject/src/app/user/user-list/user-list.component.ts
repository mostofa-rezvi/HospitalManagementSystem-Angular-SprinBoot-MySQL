import { Component, OnInit } from '@angular/core';
import { UserModel } from "../user.model";
import { UserService } from "../user.service";
import { ApiResponse } from "../../util/api.response.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[] = [];
  searchTerm: string = '';
  nameSearchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;     // Adjust this value for page size

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.findAllUsers().subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          this.users = response.data['users'];
        } else {
          alert(response?.message || 'Not Successful');
        }
      },
      error: error => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }

  paginatedUsers(): UserModel[] {
    // Filter users based on both search terms
    const filteredUsers = this.users.filter(user => {
      const matchesRole = this.searchTerm
        ? user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesName = this.nameSearchTerm
        ? user.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase())
        : true;

      return matchesRole && matchesName;
    });

    const startIndex = (this.currentPage - 1) * this.pageSize;
    return filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }

  totalPages(): number[] {
    const filteredUsers = this.users.filter(user => {
      const matchesRole = this.searchTerm
        ? user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesName = this.nameSearchTerm
        ? user.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase())
        : true;

      return matchesRole && matchesName;
    });

    const totalPages = Math.ceil(filteredUsers.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages().length) return;
    this.currentPage = page;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          this.loadUsers();
          alert(response?.message || 'Successful');
        } else {
          alert(response?.message || 'Not Successful');
        }
      },
      error: error => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }

  editUser(id: number): void {
    this.router.navigate(['user-update', id]);
  }

  // searchUsers() {
  //
  // }
}
