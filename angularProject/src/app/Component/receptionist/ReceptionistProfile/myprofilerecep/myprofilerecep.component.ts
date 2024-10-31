import { Component, OnInit } from '@angular/core';
import { ReceptionistprofileService } from '../../receptionistprofile.service';
import { ReceptionistProfileModel } from '../../receptionistprofile.model';

@Component({
  selector: 'app-myprofilerecep',
  templateUrl: './myprofilerecep.component.html',
  styleUrl: './myprofilerecep.component.css'
})
export class MyprofilerecepComponent implements OnInit {
  profile!: ReceptionistProfileModel;

  constructor(private profileService: ReceptionistprofileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: ReceptionistProfileModel) => {
      this.profile = data;
    });
  }
}
