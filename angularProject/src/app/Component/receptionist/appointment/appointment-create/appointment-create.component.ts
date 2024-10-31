import { Component, OnInit } from '@angular/core';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';
import { AuthService } from "../../../../security/service/auth.service";
import { UserModel } from "../../../../user/user.model";

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  appointmentModel: AppointmentModel = new AppointmentModel();

  availableDates: Date[] = [];
  availableTimes: string[] = [];
  selectedDate?: Date;
  selectedTime?: string;

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.generateAvailableDates();
  }

  generateAvailableDates(): void {
    const today = new Date();
    for (let i = 1; i <= 5; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.availableDates.push(date);
    }
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    this.generateAvailableTimes();
  }

  generateAvailableTimes(): void {
    this.availableTimes = [];
    const intervals = [
      { start: 9, end: 12 },
      { start: 15, end: 18 }
    ];

    intervals.forEach(interval => {
      for (let hour = interval.start; hour < interval.end; hour++) {
        this.availableTimes.push(`${hour}:00`);
        this.availableTimes.push(`${hour}:30`);
      }
    });
  }

  onTimeSelect(time: string): void {
    this.selectedTime = time;
  }

  createAppointment(): void {
    if (!this.selectedDate) {
      alert('Please select a date');
      return;
    }
    if (!this.selectedTime) {
      alert('Please select a time');
      return;
    }
    this.appointmentModel.date = this.selectedDate;
    this.appointmentModel.time = this.selectedTime + ":00";
    if (this.authService.isLoggedIn()) {
      let storedUser = this.authService.getStoredUser();
      if (storedUser) {
        let userModel = new UserModel();
        userModel.id = storedUser.id;
        this.appointmentModel.requestedBy = userModel;
      }
    }
    this.appointmentService.createAppointment(this.appointmentModel).subscribe({
      next: response => {
        if (response && response.successful) {
          alert(response.message);
        } else {
          alert(response.message || 'Error creating appointment.');
        }
      },
      error: (error: any) => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }
}
