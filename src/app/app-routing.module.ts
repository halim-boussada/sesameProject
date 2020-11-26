import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { HomeComponent } from "./home/home.component";
import { StudentSideComponent } from "./student-side/student-side.component";
import { StudentSignUpComponent } from "./student-sign-up/student-sign-up.component";
import { StudentLoginComponent } from "./student-login/student-login.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { CompanySideComponent } from "./company-side/company-side.component";
import { CompanySignupComponent } from "./company-signup/company-signup.component";
import { CompanyLoginComponent } from "./company-login/company-login.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "company", component: CompanySideComponent },
  { path: "student", component: StudentSideComponent },
  { path: "admin", component: AdminSideComponent },
  { path: "signup/student", component: StudentSignUpComponent },
  { path: "login/student", component: StudentLoginComponent },
  { path: "profile/student", component: StudentProfileComponent },
  { path: "signup/company", component: CompanySignupComponent },
  { path: "login/company", component: CompanyLoginComponent },
  { path: "profile/company", component: CompanyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
