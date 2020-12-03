import { Component, OnInit } from "@angular/core";
import { Console } from "console";
import { HttpService } from "../http.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { url } from "inspector";
import { data } from "jquery";
import { BrowserModule } from "@angular/platform-browser";
import { element } from "protractor";
import { LocalService } from "../local.service";

@Component({
  selector: "app-companybookings",
  templateUrl: "./companybookings.component.html",
  styleUrls: ["./companybookings.component.css"],
})
export class CompanybookingsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private storage: AngularFireStorage,
    private local: LocalService
  ) {}
  test: any;
  times: any;
  students: any;
  user: any;
  company: any;
  arr: any;
  keys: any;
  bookingtimes;
  ngOnInit(): void {
    var user = localStorage.getItem("connected");
    var obj = { email: user };
    this._http.getcompanybymail(obj).subscribe((data) => {
      this.company = data[0].name;
      this.user = data[0];
      console.log(this.user);
      this._http
        .collectroomsFc({ companyBooked: this.company })
        .subscribe((data) => {
          this.bookingtimes = data;
        });
      this._http.collectmin({ company: data[0].name }).subscribe((data) => {
        console.log("this is our data", data);
        this.times = data;
        this._http
          .yourstudents({ companyBooked: this.company })
          .subscribe((data) => {
            this.students = data;
            console.log("data", data);

            var arre = [];
            console.log("toul", this.students.length);
            for (var i = 0; i < this.times.length; i++) {
              arre.push({ time: this.times[i].valeur, students: [] });
              for (var j = 0; j < this.students.length; j++) {
                if (arre[i].time === this.students[j].time) {
                  arre[i].students.push({
                    studentname: this.students[j].studentName,
                    studentcv: this.students[j].resume,
                  });
                }
              }
            }
            console.log("cho hedhy", arre[0].students[0].studentname);
            this.test = arre;
            console.log("this is our matrice", arre);
          });
      });
    });
  }

  viewbookings() {
    this.router.navigateByUrl("/mybookings");
  }
  booknow() {
    this.router.navigateByUrl("/company");
  }
  home() {
    this.router.navigateByUrl("/home/company");
  }
  MyProfile() {
    this.router.navigateByUrl("/profile/company");
  }
  // stud(valeur) {
  //   let arre = [];
  //   for (let element of this.students) {
  //     if (element.time == valeur) {
  //       arre.push(element.studentName);
  //     }
  //   }
  //   return arre;
  // }
  //   this._http
  //   .yourstudents({ companyBooked: data[0].name })
  //   .subscribe((data) => {
  //     var obj = {};
  //     this.students = data;
  //     console.log("data", data);
  //     for (var i = 0; i < this.students.length; i++) {
  //       obj[this.students[i].time] = [];
  //     }
  //     console.log("this is our first", obj);
  //     for (var i = 0; i < this.students.length; i++) {
  //       if (obj[this.students[i].time]) {
  //         obj[this.students[i].time].push(this.students[i].studentName);
  //       }
  //     }
  //     var arr = Object.values(obj);
  //     var keys = Object.keys(obj);
  //     var array = [];
  //     for (var i = 0; i < arr.length; i++) {
  //       for (var j = 0; j < keys.length; j++) {
  //         array.push(arr[i]);
  //         array.push(keys[i]);
  //       }
  //     }
  //     console.log("hahahahaha", array);
  //   });
  // });
  // }
}
