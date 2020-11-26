const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database.js");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/app/useres/collectTimes", (req, res) => {
  db.collectTimes((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/app/useres/bookingTimes", (req, res) => {
  db.collectbooking((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/app/useres/collectrooms", (req, res) => {
  db.collectrooms((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/bookForcompany", (req, res) => {
  var arr = [req.body.time, req.body.companyBooked];
  db.bookForcompany(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/addTime", (req, res) => {
  var arr = [req.body.time];
  db.addTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/updateBookedTime", (req, res) => {
  var arr = [req.body.companyBooked, req.body.time];
  db.updateBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/updateroom", (req, res) => {
  var arr = [req.body.roomUrl, req.body.id];
  db.updateroom(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/CompanyBookedTime", (req, res) => {
  var arr = [req.body.companyBooked];
  console.log(arr);
  db.CompanyBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/getstudentbymail", (req, res) => {
  var arr = [req.body.email];
  console.log(arr);
  db.getstudentbymail(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/studentverif", (req, res) => {
  var arr = [req.body.studentName];
  console.log(arr);
  db.studentverif(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/studentBookedTime", (req, res) => {
  var arr = [req.body.studentName];
  db.studentBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/bookForStudent", (req, res) => {
  var arr = [
    req.body.studentName,
    req.body.time,
    req.body.companyBooked,
    req.body.roomid,
  ];
  db.bookForStudent(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/signupS", (req, res) => {
  var arr = [
    req.body.name,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.class,
    req.body.phoneNumber,
  ];
  db.signupS(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/signupC", (req, res) => {
  var arr = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.address,
    req.body.city,
    req.body.zip,
  ];
  db.signupC(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/singinS", (req, res) => {
  var arr = [req.body.email, req.body.password];
  db.loginStudent(arr, (err, data) => {
    if (err) throw err;
    if (data.length === 0) {
      res.send(false);
    } else if (data.length > 0) {
      res.send(true);
    }
  });
});

app.post("/app/useres/singinC", (req, res) => {
  var arr = [req.body.email, req.body.password];
  db.loginCompany(arr, (err, data) => {
    if (err) throw err;
    if (data.length === 0) {
      res.send(false);
    } else if (data.length > 0) {
      res.send(true);
    }
  });
});
app.listen(port, () => console.log(`server is listening on port ${port}`));
