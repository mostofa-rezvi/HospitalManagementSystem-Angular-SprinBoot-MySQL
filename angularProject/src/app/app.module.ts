import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Login-Page/navbar/navbar.component';
import {SidebarComponent} from './Login-Page/sidebar/sidebar.component';
import {ActivitiesComponent} from './shared/activities/activities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from '@angular/common/http';
import {LoginComponent} from './Login-Page/login/login.component';
import {AppointmenthomeComponent} from './Home-Page/appointmenthome/appointmenthome.component';
import {BodyhomeComponent} from './Home-Page/bodyhome/bodyhome.component';
import {FooterhomeComponent} from './Home-Page/footerhome/footerhome.component';
import {NavbarhomeComponent} from './Home-Page/navbarhome/navbarhome.component';
import {DepartmenthomeComponent} from './Home-Page/departmenthome/departmenthome.component';
import {DoctorshomeComponent} from './Home-Page/DoctorsDepartment/doctorshome/doctorshome.component';
import {ChilddepartmentComponent} from './Home-Page/DoctorsDepartment/childdepartment/childdepartment.component';
import {GeneraldepartmentComponent} from './Home-Page/DoctorsDepartment/generaldepartment/generaldepartment.component';
import {
  OrthopedicsdepartmentComponent
} from './Home-Page/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import {NeurodepartmentComponent} from './Home-Page/DoctorsDepartment/neurodepartment/neurodepartment.component';
import {CardiacdepartmentComponent} from './Home-Page/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import {WelcomepageComponent} from './Login-Page/welcomepage/welcomepage.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {AuthInterceptor} from "./security/interceptor/auth.interceptor";
import {StorageUtil} from "./util/storage.util";
import {AuthService} from "./security/service/auth.service";
import {RegisterComponent} from './Login-Page/register/register.component';
import {AppointmentCreateComponent} from './Component/receptionist/appointment/appointment-create/appointment-create.component';
import {SalarysettingsComponent} from "./shared/Settings/salarysettings/salarysettings.component";
import {LeavetypeComponent} from "./shared/Settings/leavetype/leavetype.component";
import {ChngpassComponent} from "./shared/Settings/chngpass/chngpass.component";
import {AdminpayrollComponent} from "./shared/payroll/adminpayroll.component";
import {
  EditprofilerecepComponent
} from "./Component/receptionist/ReceptionistProfile/editprofilerecep/editprofilerecep.component";
import {
  MyprofilerecepComponent
} from "./Component/receptionist/ReceptionistProfile/myprofilerecep/myprofilerecep.component";
import {
  EditprofilepntComponent
} from "./Component/patient/PatientProfile/editprofilepnt/editprofilepnt.component";
import {MyprofilepntComponent} from "./Component/patient/PatientProfile/myprofilepnt/myprofilepnt.component";
import {EditprofilenrsComponent} from "./Component/nurse/NurseProfile/editprofilenrs/editprofilenrs.component";
import {MyprofilenrsComponent} from "./Component/nurse/NurseProfile/myprofilenrs/myprofilenrs.component";
import { AppointmentListComponent } from './Component/receptionist/appointment/appointment-list/appointment-list.component';
import { DepartmentListComponent } from './Component/admin/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Component/admin/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './Component/admin/department/department-update/department-update.component';
import { ManufacturerAddComponent } from './Component/admin/manufacturer/manufacturer-add/manufacturer-add.component';
import { ManufacturerListComponent } from './Component/admin/manufacturer/manufacturer-list/manufacturer-list.component';
import { ManufacturerUpdateComponent } from './Component/admin/manufacturer/manufacturer-update/manufacturer-update.component';
import { MedicineAddComponent } from './Component/pharmacist/medicine/medicine-add/medicine-add.component';
import { MedicineListComponent } from './Component/pharmacist/medicine/medicine-list/medicine-list.component';
import { MedicineUpdateComponent } from './Component/pharmacist/medicine/medicine-update/medicine-update.component';
import { MedicineBillCreateComponent } from './Component/pharmacist/medicine-bill/medicine-bill-create/medicine-bill-create.component';
import { MedicineBillListComponent } from './Component/pharmacist/medicine-bill/medicine-bill-list/medicine-bill-list.component';
import { MedicineBillPdfComponent } from './Component/pharmacist/medicine-bill/medicine-bill-pdf/medicine-bill-pdf.component';
import { ReportUpdateComponent } from './Component/laboratorist/report/report-update/report-update.component';
import { ReportCreateComponent } from './Component/laboratorist/report/report-create/report-create.component';
import { ReportListComponent } from './Component/laboratorist/report/report-list/report-list.component';
import { TestCreateComponent } from './Component/laboratorist/test/test-create/test-create.component';
import { TestListComponent } from './Component/laboratorist/test/test-list/test-list.component';
import { TestUpdateComponent } from './Component/laboratorist/test/test-update/test-update.component';
import { AdminProfileComponent } from './Component/admin/Profile/admin-profile/admin-profile.component';
import { AdminProfileUpdateComponent } from './Component/admin/Profile/admin-profile-update/admin-profile-update.component';
import { ReportViewComponent } from './Component/laboratorist/report/report-view/report-view.component';
import { PrescriptionCreateComponent } from './Component/doctor/prescription/prescription-create/prescription-create.component';
import { PrescriptionListComponent } from './Component/doctor/prescription/prescription-list/prescription-list.component';
import { PrescriptionViewComponent } from './Component/doctor/prescription/prescription-view/prescription-view.component';
import { DepartmentComponent } from './Component/receptionist/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActivitiesComponent,
    LoginComponent,
    AppointmenthomeComponent,
    BodyhomeComponent,
    FooterhomeComponent,
    NavbarhomeComponent,
    SalarysettingsComponent,
    LeavetypeComponent,
    ChngpassComponent,
    AdminpayrollComponent,
    DepartmenthomeComponent,
    DoctorshomeComponent,
    MyprofilenrsComponent,
    EditprofilenrsComponent,
    MyprofilepntComponent,
    EditprofilepntComponent,
    MyprofilerecepComponent,
    EditprofilerecepComponent,
    ChilddepartmentComponent,
    GeneraldepartmentComponent,
    OrthopedicsdepartmentComponent,
    NeurodepartmentComponent,
    CardiacdepartmentComponent,
    WelcomepageComponent,
    UserFormComponent,
    UserListComponent,
    RegisterComponent,
    AppointmentCreateComponent,
    AppointmentListComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    ManufacturerAddComponent,
    ManufacturerListComponent,
    ManufacturerUpdateComponent,
    MedicineAddComponent,
    MedicineListComponent,
    MedicineUpdateComponent,
    MedicineBillCreateComponent,
    MedicineBillListComponent,
    MedicineBillPdfComponent,
    ReportUpdateComponent,
    ReportCreateComponent,
    ReportListComponent,
    TestCreateComponent,
    TestListComponent,
    TestUpdateComponent,
    AdminProfileComponent,
    AdminProfileUpdateComponent,
    ReportViewComponent,
    PrescriptionCreateComponent,
    PrescriptionListComponent,
    PrescriptionViewComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthService,
    StorageUtil,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
