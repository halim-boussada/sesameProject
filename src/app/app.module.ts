import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CompanySideComponent } from "./company-side/company-side.component";
import { StudentSideComponent } from "./student-side/student-side.component";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { StudentSignUpComponent } from "./student-sign-up/student-sign-up.component";
import { StudentLoginComponent } from "./student-login/student-login.component";
import { CompanySignupComponent } from "./company-signup/company-signup.component";
import { CompanyLoginComponent } from "./company-login/company-login.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
// firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanySideComponent,
    StudentSideComponent,
    AdminSideComponent,
    StudentSignUpComponent,
    StudentLoginComponent,
    CompanySignupComponent,
    CompanyLoginComponent,
    StudentProfileComponent,
    CompanyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
