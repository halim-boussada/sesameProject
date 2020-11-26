import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-student-login",
  templateUrl: "./student-login.component.html",
  styleUrls: ["./student-login.component.css"],
})
export class StudentLoginComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login(email, password) {
    var obj = { email, password };
    this._http.loginStudent(obj).subscribe((data) => {
      if (data) {
        this.local.userConnectedEmail = email;
        this.router.navigateByUrl("/profile/student");
      } else {
        alert("mot de pass ou email est incorrect");
      }
    });
  }
}
