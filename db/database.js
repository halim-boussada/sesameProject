const mysql = require("mysql");
const { register } = require("ts-node");
const { user } = require("./config.js");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let addTime = (arr, callback) => {
  var sql = `INSERT INTO times (time) values (?)`;

  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    var sql2 = "delete from bookingTimes where time=?";
    connection.query(sql2, arr, (err, data) => {
      if (err) throw callback(err);
      callback(null, data);
    });
  });
};

let collectTimes = (callback) => {
  var sql = `SELECT * FROM times WHERE companyBooked > 0`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

let collectbooking = (callback) => {
  var sql = `SELECT * FROM bookingTimes`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const bookForcompany = (arr, callback) => {
  let sql = "insert into rooms (time,companyBooked) values(?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const bookForStudent = (arr, callback) => {
  let sql =
    "insert into studentsBooked (studentName  ,time  ,companyBooked,roomid) values ( ?, ?, ?, ?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

const signupStudent = (arr, callback) => {
  let sql = "insert into studentsBooked (studentName  ,time ) values ( ?, ?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
//INSCRIPTION ETUDIANT
const signupS = (arr, callback) => {
  let sql =
    "insert into students (name ,lastname , email , password ,  class , phoneNumber ) values (?,?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const signupC = (arr, callback) => {
  let sql =
    "insert into companies (name,email,password,address,city,zip) values (?,?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

const updateBookedTime = (arr, callback) => {
  let sql = "UPDATE times SET companyBooked = ? WHERE time=?;";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const updateroom = (arr, callback) => {
  let sql = "UPDATE rooms SET roomUrl = ? WHERE id=?;";
  connection.query(sql, arr, (err, data) => {
    if (err) callback(err, null);
    let sql2 = "UPDATE studentsBooked SET roomUrl = ? WHERE roomid=?;";
    connection.query(sql2, arr, (err, data) => {
      err ? callback(err, null) : callback(null, data);
    });
  });
};

let CompanyBookedTime = (arr, callback) => {
  let sql = `SELECT time from rooms WHERE companyBooked=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let studentverif = (arr, callback) => {
  let sql = `SELECT time from studentsBooked WHERE studentName=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let studentBookedTime = (arr, callback) => {
  let sql = `SELECT * from studentsBooked WHERE studentName=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let collectrooms = (callback) => {
  var sql = `SELECT * FROM rooms`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let getstudentbymail = (arr, callback) => {
  let sql = `SELECT * from students WHERE email=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

let loginStudent = (arr, callback) => {
  let sql = `SELECT * from students WHERE email=? and password=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

let loginCompany = (arr, callback) => {
  let sql = `SELECT * from companies WHERE email=? and password=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

module.exports = {
  loginCompany,
  loginStudent,
  signupStudent,
  addTime,
  collectTimes,
  collectbooking,
  bookForcompany,
  updateBookedTime,
  CompanyBookedTime,
  updateroom,
  collectrooms,
  bookForStudent,
  studentBookedTime,
  studentverif,
  signupS,
  signupC,
  getstudentbymail,
};
