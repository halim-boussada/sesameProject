import { Component, OnInit } from "@angular/core";
import { Console } from "console";
import { HttpService } from "../http.service";

@Component({
  selector: "app-company-signup",
  templateUrl: "./company-signup.component.html",
  styleUrls: ["./company-signup.component.css"],
})
export class CompanySignupComponent implements OnInit {
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  signup(Cname, email, adresse, password, city, Zip) {
    console.log(
      "nom" +
        Cname +
        "email " +
        email +
        "adresse" +
        adresse +
        "pass" +
        password +
        "city" +
        city +
        "zip" +
        Zip
    );
    var obj = {
      name: Cname,
      email: email,
      password: password,
      address: adresse,
      city: city,
      zip: Zip,
    };
    this._http.signupC(obj).subscribe((data) => {
      console.log("success");
    });
  }
}
