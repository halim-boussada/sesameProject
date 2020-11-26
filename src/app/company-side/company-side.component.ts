import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";

@Component({
  selector: "app-company-side",
  templateUrl: "./company-side.component.html",
  styleUrls: ["./company-side.component.css"],
})
export class CompanySideComponent implements OnInit {
  constructor(private _http: HttpService) {}
  times: any;
  date: any;
  company: any;
  bookedcomp: number;
  mybookedTimes: any;
  test: any;
  rooms: any;
  boli = false;
  ngOnInit(): void {
    this._http.getTimes().subscribe((data) => {
      this.times = data;
      console.log(data);
    });
    this._http.getRooms().subscribe((data) => {
      this.rooms = data;
      console.log(this.rooms);
      console.log(typeof this.rooms);
      console.log(this.rooms[0]);
    });
  }
  Booknow(date, company) {
    var obj = { time: date, companyBooked: company };
    var obj1 = { companyBooked: company };
    var n = { companyBooked: this.bookedcomp - 1, time: date };
    this._http.CompanyBookedTime(obj1).subscribe((data) => {
      this.test = data;
      this.test.map((element) => {
        this.boli = this.boli || element.time === date;
      });
      if (this.boli) {
        alert("already booked");
      } else {
        this._http.postRooms(obj).subscribe((data) => {
          this.ngOnInit;
          for (let elem of this.times) {
            if (elem.time === date) {
              console.log("elemdddaf  azfa", elem.companyBooked - 1);
              var newCb = elem.companyBooked - 1;
              var obje = {
                companyBooked: newCb,
                time: date,
              };
              this._http.getupdateBookedTime(obje).subscribe((data) => {
                console.log("ahaha");
              });
              break;
            }
          }
        });
      }
    });
  }
  showcompanyBooked(name) {
    var n = { companyBooked: name };
    this._http.CompanyBookedTime(n).subscribe((data) => {
      this.test = data;
      console.log(data);
      this.ngOnInit();
    });
  }
}
