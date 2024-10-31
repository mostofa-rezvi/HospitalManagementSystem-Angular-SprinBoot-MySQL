import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './shared/activities/activities.component';
import { BodyhomeComponent } from './Home-Page/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './Home-Page/appointmenthome/appointmenthome.component';
import { LoginComponent } from './Login-Page/login/login.component';
import { DepartmenthomeComponent } from './Home-Page/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './Home-Page/DoctorsDepartment/doctorshome/doctorshome.component';
import { CardiacdepartmentComponent } from './Home-Page/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { ChilddepartmentComponent } from './Home-Page/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './Home-Page/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { NeurodepartmentComponent } from './Home-Page/DoctorsDepartment/neurodepartment/neurodepartment.component';
import {
  OrthopedicsdepartmentComponent
} from './Home-Page/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import { AuthGuard } from './security/guard/authguard.guard';
import { WelcomepageComponent } from './Login-Page/welcomepage/welcomepage.component';
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RegisterComponent } from './Login-Page/register/register.component';
import { AppointmentCreateComponent } from './Component/receptionist/appointment/appointment-create/appointment-create.component';
import { SalarysettingsComponent } from "./shared/Settings/salarysettings/salarysettings.component";
import { LeavetypeComponent } from "./shared/Settings/leavetype/leavetype.component";
import { ChngpassComponent } from "./shared/Settings/chngpass/chngpass.component";
import { AdminpayrollComponent } from "./shared/payroll/adminpayroll.component";
import { MyprofilenrsComponent } from "./Component/nurse/NurseProfile/myprofilenrs/myprofilenrs.component";
import { EditprofilenrsComponent } from "./Component/nurse/NurseProfile/editprofilenrs/editprofilenrs.component";
import { MyprofilepntComponent } from "./Component/patient/PatientProfile/myprofilepnt/myprofilepnt.component";
import {
  EditprofilepntComponent
} from "./Component/patient/PatientProfile/editprofilepnt/editprofilepnt.component";
import {
  MyprofilerecepComponent
} from "./Component/receptionist/ReceptionistProfile/myprofilerecep/myprofilerecep.component";
import {
  EditprofilerecepComponent
} from "./Component/receptionist/ReceptionistProfile/editprofilerecep/editprofilerecep.component";
import { AppointmentListComponent } from './Component/receptionist/appointment/appointment-list/appointment-list.component';
import { DepartmentUpdateComponent } from "./Component/admin/department/department-update/department-update.component";
import { DepartmentAddComponent } from "./Component/admin/department/department-add/department-add.component";
import { DepartmentListComponent } from "./Component/admin/department/department-list/department-list.component";
import {
  ManufacturerListComponent
} from "./Component/admin/manufacturer/manufacturer-list/manufacturer-list.component";
import {
  ManufacturerUpdateComponent
} from "./Component/admin/manufacturer/manufacturer-update/manufacturer-update.component";
import {
  ManufacturerAddComponent
} from "./Component/admin/manufacturer/manufacturer-add/manufacturer-add.component";
import { MedicineListComponent } from "./Component/pharmacist/medicine/medicine-list/medicine-list.component";
import { MedicineAddComponent } from "./Component/pharmacist/medicine/medicine-add/medicine-add.component";
import { MedicineUpdateComponent } from "./Component/pharmacist/medicine/medicine-update/medicine-update.component";
import {
  MedicineBillCreateComponent
} from "./Component/pharmacist/medicine-bill/medicine-bill-create/medicine-bill-create.component";
import {
  MedicineBillPdfComponent
} from "./Component/pharmacist/medicine-bill/medicine-bill-pdf/medicine-bill-pdf.component";
import {
  MedicineBillListComponent
} from "./Component/pharmacist/medicine-bill/medicine-bill-list/medicine-bill-list.component";
import { ReportCreateComponent } from './Component/laboratorist/report/report-create/report-create.component';
import { ReportListComponent } from './Component/laboratorist/report/report-list/report-list.component';
import { ReportUpdateComponent } from './Component/laboratorist/report/report-update/report-update.component';
import { TestCreateComponent } from './Component/laboratorist/test/test-create/test-create.component';
import { TestListComponent } from './Component/laboratorist/test/test-list/test-list.component';
import { TestUpdateComponent } from './Component/laboratorist/test/test-update/test-update.component';
import { ReportViewComponent } from './Component/laboratorist/report/report-view/report-view.component';
import { PrescriptionCreateComponent } from './Component/doctor/prescription/prescription-create/prescription-create.component';
import { PrescriptionListComponent } from './Component/doctor/prescription/prescription-list/prescription-list.component';
import { PrescriptionViewComponent } from './Component/doctor/prescription/prescription-view/prescription-view.component';
import { DepartmentComponent } from './Component/receptionist/department/department.component';

const routes: Routes = [



  // Receptionist Curd
  // {
  //   path: 'viewrecep', component: ViewReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['ADMIN']}
  // },
  // {
  //   path: 'updaterecep/:id', component: UpdateReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['ADMIN']}
  // },
  // {
  //   path: 'addrecep', component: AddReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['ADMIN']}
  // },
  // {
  //   path: 'receplistadmin', component: ReceptionistlistadminComponent, canActivate: [AuthGuard]
  // },


  // Patient Part
  // {
  //   path: 'addpatient', component: AddpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['DOCTOR']}
  // },
  // {
  //   path: 'updatepatient/:id', component: UpdatepatientdocComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['DOCTOR']}
  // },
  // {
  //   path: 'viewpatient', component: ViewpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: {roles: ['DOCTOR']}
  // },
  // {path: 'patientlist', component: ListofpatientComponent},





  // Profile Part


  // Doctor

  // Nurse
  {
    path: 'nurseprofile', component: MyprofilenrsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'nurseprofileedit', component: EditprofilenrsComponent, canActivate: [AuthGuard]
  },

  // Patient
  {
    path: 'patientprofile', component: MyprofilepntComponent, canActivate: [AuthGuard]
  },
  {
    path: 'patientprofileedit', component: EditprofilepntComponent, canActivate: [AuthGuard]
  },

  // Receptionist
  {
    path: 'receptionist-profile', component: MyprofilerecepComponent, canActivate: [AuthGuard]
  },
  {
    path: 'receptionist-profile-edit', component: EditprofilerecepComponent, canActivate: [AuthGuard]
  },









  // Department Home Routing
  { path: 'cardiac', component: CardiacdepartmentComponent },
  { path: 'childdepart', component: ChilddepartmentComponent },
  { path: 'generaldepart', component: GeneraldepartmentComponent },
  { path: 'neurodepart', component: NeurodepartmentComponent },
  { path: 'orthodepart', component: OrthopedicsdepartmentComponent },

  // Home or Landing Page
  { path: 'home', component: BodyhomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'appointment', component: AppointmenthomeComponent },
  { path: 'departmenthome', component: DepartmenthomeComponent },
  { path: 'doctorshome', component: DoctorshomeComponent },
  { path: 'welcome', component: WelcomepageComponent },

  // Common
  { path: 'salary', component: SalarysettingsComponent, canActivate: [AuthGuard] },
  { path: 'leave', component: LeavetypeComponent, canActivate: [AuthGuard] },
  { path: 'changepassword', component: ChngpassComponent, canActivate: [AuthGuard] },
  { path: 'payroll', component: AdminpayrollComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] },

  // For All
  { path: 'doappointment', component: AppointmentCreateComponent },
  { path: 'departmentR', component: DepartmentComponent },







  // Admin part
  {
    path: 'user-add', component: UserFormComponent
  },
  {
    path: 'user-update/:id', component: UserFormComponent
  },
  {
    path: 'user-list', component: UserListComponent
  },
  {
    path: 'userForm', component: UserFormComponent
  },

  // Department Part
  {
    path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'departments/add', component: DepartmentAddComponent, canActivate: [AuthGuard]
  },
  {
    path: 'departments/update/:id', component: DepartmentUpdateComponent, canActivate: [AuthGuard]
  },





  // Auth Part
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },



  // Multiple

  {
    path: 'appointment-list', component: AppointmentListComponent, canActivate: [AuthGuard]
  },







  { path: 'manufacturers', component: ManufacturerListComponent },
  { path: 'manufacturers/add', component: ManufacturerAddComponent },
  { path: 'manufacturers/update/:id', component: ManufacturerUpdateComponent },

  { path: 'medicines', component: MedicineListComponent },
  { path: 'medicines/add', component: MedicineAddComponent },
  { path: 'medicines/update/:id', component: MedicineUpdateComponent },

  { path: 'medicine-bill', component: MedicineBillCreateComponent },
  { path: 'medicine-bill-list', component: MedicineBillListComponent },
  { path: 'medicine-bill/invoice/:id', component: MedicineBillPdfComponent },

  { path: 'reports', component: ReportListComponent },
  { path: 'reports/create', component: ReportCreateComponent },
  { path: 'reports/update/:id', component: ReportUpdateComponent },
  { path: 'reports/:id', component: ReportViewComponent },

  { path: 'tests', component: TestListComponent },
  { path: 'tests/create', component: TestCreateComponent },
  { path: 'tests/update/:id', component: TestUpdateComponent },

  { path: 'prescriptions/create', component: PrescriptionCreateComponent },
  { path: 'prescriptions', component: PrescriptionListComponent },
  { path: 'prescriptions/:id', component: PrescriptionViewComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
