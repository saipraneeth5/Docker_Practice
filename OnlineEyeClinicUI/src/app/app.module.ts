import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './module/Patient/patient-login/patient-login.component';
import { AddPatientComponent } from './module/Patient/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { PatientHomeComponent } from './module/Patient/patient-home/patient-home.component';
import { UpdatePatientComponent } from './module/Patient/update-patient/update-patient.component';
import { ForgotPasswordComponent } from './module/Patient/forgot-password/forgot-password.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookAppointmentComponent } from './module/Appointments/book-appointment/book-appointment.component';
import { ViewPatientAppointmentComponent } from './module/Appointments/view-patient-appointment/view-patient-appointment.component';
import { ViewDoctorAppointmentComponent } from './module/Appointments/view-doctor-appointment/view-doctor-appointment.component';
import { ViewReportComponent } from './module/Report/view-report/view-report.component';
import { ViewSpectaclesComponent } from './module/Spectacles/view-spectacles/view-spectacles.component';
import { OrderBy } from './shared/custompipe/OrderBy';
import { UpdateAppointmentComponent } from './module/Appointments/update-appointment/update-appointment.component';
import { ViewDoctorsComponent } from './module/Doctor/view-doctors/view-doctors.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DoctorLoginComponent } from './module/Doctor/doctor-login/doctor-login.component';
import { DoctorHomeComponent } from './module/Doctor/doctor-home/doctor-home.component';
import { AddTestComponent } from './module/Tests/add-test/add-test.component';
import { ViewTestComponent } from './module/Tests/view-test/view-test.component';
import { AddReportComponent } from './module/Report/add-report/add-report.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    AddPatientComponent,
    PatientHomeComponent,
    UpdatePatientComponent,
    ForgotPasswordComponent,
    BookAppointmentComponent,
    ViewPatientAppointmentComponent,
    ViewDoctorAppointmentComponent,
    ViewReportComponent,
    ViewSpectaclesComponent,
    OrderBy,
    UpdateAppointmentComponent,
    ViewDoctorsComponent,
    HomepageComponent,
    AboutusComponent,
    ContactUsComponent,
    DoctorLoginComponent,
    DoctorHomeComponent,
    AddTestComponent,
    ViewTestComponent,
    AddReportComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
