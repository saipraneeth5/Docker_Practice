import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { BookAppointmentComponent } from './module/Appointments/book-appointment/book-appointment.component';
import { UpdateAppointmentComponent } from './module/Appointments/update-appointment/update-appointment.component';
import { ViewDoctorAppointmentComponent } from './module/Appointments/view-doctor-appointment/view-doctor-appointment.component';
import { ViewPatientAppointmentComponent } from './module/Appointments/view-patient-appointment/view-patient-appointment.component';
import { DoctorHomeComponent } from './module/Doctor/doctor-home/doctor-home.component';
import { DoctorLoginComponent } from './module/Doctor/doctor-login/doctor-login.component';
import { ViewDoctorsComponent } from './module/Doctor/view-doctors/view-doctors.component';
import { AddPatientComponent } from './module/Patient/add-patient/add-patient.component';
import { ForgotPasswordComponent } from './module/Patient/forgot-password/forgot-password.component';
import { PatientHomeComponent } from './module/Patient/patient-home/patient-home.component';
import { PatientLoginComponent } from './module/Patient/patient-login/patient-login.component';
import { UpdatePatientComponent } from './module/Patient/update-patient/update-patient.component';
import { AddReportComponent } from './module/Report/add-report/add-report.component';
import { ViewReportComponent } from './module/Report/view-report/view-report.component';
import { ViewSpectaclesComponent } from './module/Spectacles/view-spectacles/view-spectacles.component';
import { AddTestComponent } from './module/Tests/add-test/add-test.component';
import { ViewTestComponent } from './module/Tests/view-test/view-test.component';

const routes: Routes = [ 
  {path:'', component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'doctorlogin', component:DoctorLoginComponent},
  {path:'viewtests', component: ViewTestComponent},
  {path:'addreport', component: AddReportComponent},
  {path:'doctorhomepage/:doctor1', component: DoctorHomeComponent},
  {path:'viewdoctorappointment/:dId', component:ViewDoctorAppointmentComponent},
  {path:'addtest',component:AddTestComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'viewdoctors', component:ViewDoctorsComponent},
  {path:'updateapppointment', component:UpdateAppointmentComponent},
  {path:'viewpatientappointment/:pId', component:ViewPatientAppointmentComponent},
  {path:'bookappointment/:pId', component:BookAppointmentComponent},
  {path:'viewreport/:pId', component:ViewReportComponent},
  {path:'viewspectacles', component:ViewSpectaclesComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'updatepatient', component:UpdatePatientComponent},
  {path:'patienthome/:newPatient', component:PatientHomeComponent},
  {path:'patientlogin/:patient', component: PatientLoginComponent},
  {path:'patientlogin', component: PatientLoginComponent},
  {path:'addpatient', component: AddPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
