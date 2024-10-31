import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { UserService } from '../../../../user/user.service';
import { AuthService } from '../../../../security/service/auth.service';
import { AppointmentModel } from '../appointment.model';
import { UserModel } from '../../../../user/user.model';
import { ApiResponse } from '../../../../util/api.response.model';
import {app} from "../../../../../../server";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'] 
})

export class AppointmentListComponent implements OnInit {
  appointments: AppointmentModel[] = [];
  filteredAppointments: AppointmentModel[] = [];
  doctors: UserModel[] = [];
  isLoading = true;
  searchTerm: string = ''; 

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchAppointments();
    this.fetchDoctors();
  }

  fetchAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          this.appointments = response.data['appointments'];
          this.filteredAppointments = this.appointments; 
        } else {
          alert(response.message || 'Failed to load appointments');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Error fetching appointments');
        this.isLoading = false;
      }
    });
  }

  fetchDoctors(): void {
    this.userService.findUsersByRole('DOCTOR').subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          this.doctors = response.data['users'];
        } else {
          alert(response.message || 'Failed to load doctors');
        }
      },
      error: (err: ApiResponse) => {
        console.error(err);
        alert('Error fetching doctors');
      }
    });
  }

  onDoctorSelect(appointment: AppointmentModel, event: any) {
    const selectedDoctorId = event.target.value;
    let doctor = new UserModel();
    doctor.id = selectedDoctorId;
    appointment.doctor = doctor;
  }

  assignDoctor(appointment: AppointmentModel): void {
    if (!appointment.doctor || !appointment.doctor.id) {
      alert('Please select a doctor');
      return;
    }
    this.appointmentService.updateAppointment(appointment).subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          alert('Doctor assigned successfully');
          this.fetchAppointments();
        } else {
          alert(response.message || 'Failed to assign doctor');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error assigning doctor');
      }
    });
  }

  searchAppointments(): void {
    if (this.searchTerm) {
      this.filteredAppointments = this.appointments.filter(appointment =>
        appointment.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (appointment.doctor?.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) || false)
      );
    } else {
      this.filteredAppointments = this.appointments; 
    }
  }
}
