import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { cpuUsage } from "process";
import { HttpService } from "../http.service";
@Component({
  selector: "app-student-sign-up",
  templateUrl: "./student-sign-up.component.html",
  styleUrls: ["./student-sign-up.component.css"],
})
export class StudentSignUpComponent implements OnInit {
  imgSrc: String =
    "https://lh3.googleusercontent.com/proxy/5yS_HPdSHa0rm7NmQ974sebQ9rvOSQHpR_sMEsmgE4CGzjNaUtJrvzSLzhM5vUVQc68bT3uxWfDkHVSZksdPQJKorYABV_ie61cQ1e2vTpLpoSrF0eTiJ2Mm";
  selectedimg: any = null;
  formStudent = new FormGroup({
    caption: new FormControl("", Validators.required),
    category: new FormControl(""),
    imagelink: new FormControl(""),
  });

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  signup(name, lastname, email, password, field, tel) {
    console.log(
      "this is your name",
      name,
      "this is your last name",
      lastname,
      "this is your email",
      email,
      "this is your password sorry",
      password,
      "this is your field",
      field,
      "this is your tel",
      tel
    );
    var Student = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      class: field,
      phoneNumber: tel,
    };
    this._http.signupS(Student).subscribe((data) => {
      console.log("Success");
    });
  }
  show(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimg = event.target.files[0];
    } else {
      this.imgSrc =
        "https://lh3.googleusercontent.com/proxy/5yS_HPdSHa0rm7NmQ974sebQ9rvOSQHpR_sMEsmgE4CGzjNaUtJrvzSLzhM5vUVQc68bT3uxWfDkHVSZksdPQJKorYABV_ie61cQ1e2vTpLpoSrF0eTiJ2Mm";
      this.selectedimg = null;
    }
  }
}
