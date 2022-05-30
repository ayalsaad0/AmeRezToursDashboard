import express, { json } from "express";
import { createConnection } from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(json());
app.use(cors());

const db = createConnection({
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
  const full_name = req.body.full_name;
  const phone = req.body.phone;
  const role = req.body.role;

  bcrypt.hash(password, 10, (err, passwordHash) => {
    db.query(
      "INSERT INTO admins (username, role, full_name, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)",
      [username, role, full_name, email, phone, passwordHash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/update-vehicle", (req, res) => {
  const title = req.body.title;
  const places = req.body.places;
  const suitcases = req.body.suitcases;
  const price = req.body.price;
  const id = req.body.id;
  db.query(
    "UPDATE vehicles SET title=?,places=?,suitcases=?,price=? WHERE id=?",
    [title, places, suitcases, price, id],
    (err, result) => {
      console.log(result);
    }
  );
});

app.post("/update-activity", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const id = req.body.id;
  db.query(
    "UPDATE attraction SET title=?,price=?,description=? WHERE id=?",
    [title, price, description, id],
    (err, result) => {
      console.log(result);
    }
  );
});

// Get user by username or email to login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const actual_password = req.body.password;

  var user = "";

  db.query(
    "SELECT * FROM admins WHERE username = ?",
    [username],
    (err, result) => {
      if (err) res.send({ err: err });
      else {
        user = result[0];
        console.log(user.password);
        bcrypt.compare(actual_password, user.password, (err, cmpRes) => {
          console.log(user);
          if (err) {
            res.send({ err: err });
          } else {
            const resArray = Object.values(
              JSON.parse(JSON.stringify(result[0]))
            );
            res.send(resArray);
          }
        });
      }
    }
  );
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

// Get employees info
app.get("/admins", (req, res) => {
  db.query("SELECT * FROM admins", (err, result) => {
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
