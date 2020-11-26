import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";

@Component({
  selector: "app-student-profile",
  templateUrl: "./student-profile.component.html",
  styleUrls: ["./student-profile.component.css"],
})
export class StudentProfileComponent implements OnInit {
  constructor(private _http: HttpService, private local: LocalService) {}
  userInfo: any;
  name: any;
  lastname: any;
  email: any;
  password: any;
  imageUrl: any;
  class: any;
  phoneNumber: any;
  user: any;
  ngOnInit(): void {
    console.log(this.local.userConnectedEmail);
    var obj = { email: this.local.userConnectedEmail };
    this._http.getstudentbymail(obj).subscribe((data) => {
      console.log(data);
      this.userInfo = data;
      let user = this.userInfo[0];
      this.name = user.name;
      this.lastname = user.lastname;
      this.email = user.email;
      this.imageUrl = user.imageUrl;
      this.class = user.class;
      this.phoneNumber = user.phoneNumber;
    });
  }
}
