import { Component, OnInit } from "@angular/core";
import { verify } from "crypto";
import { HttpService } from "../http.service";

@Component({
  selector: "app-student-side",
  templateUrl: "./student-side.component.html",
  styleUrls: ["./student-side.component.css"],
})
export class StudentSideComponent implements OnInit {
  rooms: any;
  samy: any;
  mybookings: any;
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getRooms().subscribe((data) => {
      this.rooms = data;
      console.log("samy gj");
    });
    this.samy = "xq";
    let obj = { studentName: this.samy };
    this._http.studentpostBookedTime(obj).subscribe((data) => {
      this.mybookings = data;
    });
  }
  book(half, sname, roomid, cname, time) {
    if (half !== 4) {
      var newtime =
        time.slice(0, 3) +
        (half - 1) * 15 +
        " => " +
        time.slice(0, 3) +
        half * 15;
      if (half === 1) {
        var newtime =
          time.slice(0, 3) + "00" + " => " + time.slice(0, 3) + half * 15;
      }
    }
    if (half === 4) {
      var newtime =
        time.slice(0, 3) + "45" + " => " + time.slice(8, time.length);
    }

    var obj = {
      studentName: sname,
      time: newtime,
      companyBooked: cname,
      roomid: roomid,
    };
    var bolien = false;
    this.mybookings.map((element) => {
      console.log(element);
      bolien =
        bolien || element.time === newtime || element.companyBooked === cname;
    });
    if (bolien) {
      alert("already booked");
    } else if (!bolien) {
      this._http.studentpost(obj).subscribe((data) => {
        alert("booked");
        this.ngOnInit();
      });
    }
  }
  Verify(student, time) {
    var obj = { studentName: student };
    var d: any;
    this._http.getStudentime(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
