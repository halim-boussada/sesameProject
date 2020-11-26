import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3000";

  getTimes() {
    return this.http.get(this.ROOT_URL + "/app/useres/collectTimes");
  }
  getBooking() {
    return this.http.get(this.ROOT_URL + "/app/useres/bookingTimes");
  }
  postTimes(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/addTime", obj);
  }
  postRooms(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/bookForcompany", obj);
  }
  getupdateBookedTime(a) {
    return this.http.post(this.ROOT_URL + "/app/useres/updateBookedTime", a);
  }
  CompanyBookedTime(a) {
    return this.http.post(this.ROOT_URL + "/app/useres/CompanyBookedTime", a);
  }
  getRooms() {
    return this.http.get(this.ROOT_URL + "/app/useres/collectrooms");
  }
  postRoom(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/updateroom", obj);
  }
  studentpost(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/bookForStudent", obj);
  }
  studentpostBookedTime(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/studentBookedTime", obj);
  }
  getStudentime(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/studentverif", obj);
  }

  signupS(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/signupS", obj);
  }
  signupC(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/signupC", obj);
  }
  getstudentbymail(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/getstudentbymail", obj);
  }
  loginStudent(obj) {
    return this.http.post(this.ROOT_URL + "/app/useres/singinS", obj);
  }
}
