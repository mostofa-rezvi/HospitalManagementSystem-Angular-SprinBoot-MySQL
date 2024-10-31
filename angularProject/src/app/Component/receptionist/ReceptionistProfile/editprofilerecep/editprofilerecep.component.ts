import { Component, OnInit } from '@angular/core';
import { ReceptionistprofileService } from '../../receptionistprofile.service';
import { Router } from '@angular/router';
import { ReceptionistProfileModel } from '../../receptionistprofile.model';

@Component({
  selector: 'app-editprofilerecep',
  templateUrl: './editprofilerecep.component.html',
  styleUrl: './editprofilerecep.component.css'
})
export class EditprofilerecepComponent implements OnInit {
  profile!: ReceptionistProfileModel;

  constructor(private profileService: ReceptionistprofileService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: ReceptionistProfileModel) => {
      this.profile = data;
    });
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['receptionist-profile']);
    });
  }
}
