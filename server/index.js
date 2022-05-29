const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amereztours",
});

// Add new user's info to the database
app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, 10, (err, passwordHash) => {
    db.query(
      "INSERT INTO admins (username, email, password) VALUES (?, ?, ?)",
      [username, email, passwordHash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

// Get user by username or email to login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var user = "";

  db.query(
    "SELECT * FROM admins WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      else {
        user = result[0].password;
        console.log(user);
      }
    }
  );

  bcrypt.compare(password, user, (err, result) => {
    console.log(user);
    if (err) {
      res.send({ err: err });
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// Get images
// app.post("/images", (req, res) => {
//   const service_id = req.body.service_id;

//   db.query(
//     "SELECT link FROM images WHERE service_id = ?",
//     [service_id],
//     (err, result) => {
//       res.send(result);
//     }
//   );
// });

app.post("/images", (req, res) => {
  db.query("SELECT * FROM images", (err, result) => {
    res.send(result);
  });
});

// Get users info
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    res.send(result);
  });
});

// Get vehicles info
app.get("/vehicles", (req, res) => {
  db.query("SELECT * FROM vehicles", (err, result) => {
    res.send(result);
  });
});

// Get activities info
app.get("/activities", (req, res) => {
  db.query("SELECT * FROM attraction", (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
