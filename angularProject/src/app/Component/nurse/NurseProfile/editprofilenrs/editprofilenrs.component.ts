import { Component, OnInit } from '@angular/core';
import { NurseprofileService } from '../../nurseprofile.service';
import { Router } from '@angular/router';
import { NurseProfileModel } from '../../nurseprofile.model';

@Component({
  selector: 'app-editprofilenrs',
  templateUrl: './editprofilenrs.component.html',
  styleUrl: './editprofilenrs.component.css'
})
export class EditprofilenrsComponent implements OnInit {
  profile!: NurseProfileModel;

  constructor(private profileService: NurseprofileService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: NurseProfileModel) => {
      this.profile = data;
    });
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['nurseprofile']);
    });
  }
}
