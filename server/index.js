const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

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

  db.query(
    "INSERT INTO admins (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

// Get user by username or email to login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM admins WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    }
  );
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

// Get images
app.get("/images", (req, res) => {
  db.query("SELECT * FROM images", (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
