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

//#region Authentication
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
        bcrypt.compare(actual_password, user.password, (err, cmpRes) => {
          if (err) {
            res.send({ err: err });
          } else {
            if (cmpRes) {
              const resArray = Object.values(
                JSON.parse(JSON.stringify(result[0]))
              );
              res.send(resArray);
            } else {
              res.send("Incorrect password!");
            }
          }
        });
      }
    }
  );
});
//#endregion

//#region Vehicles
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
      console.log(err);
    }
  );
});

app.post("/delete-vehicle", (req, res) => {
  const id = req.body.id;
  db.query("DELETE FROM vehicles WHERE id=?", [id], (err, result) => {
    console.log(result);
  });
});

app.post("/add-vehicle", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const places = req.body.places;
  const suitcases = req.body.suitcases;
  const price = req.body.price;
  db.query(
    "INSERT INTO vehicles (id, title, places, suitcases, price) VALUES (?,?,?,?,?)",
    [id, title, places, suitcases, price],
    (err, result) => {
      console.log(err);
    }
  );
});

// Get vehicles info
app.get("/vehicles", (req, res) => {
  db.query("SELECT * FROM vehicles", (err, result) => {
    res.send(result);
  });
});

// Get Vehicles images
app.get("/vehicles-images", (req, res) => {
  db.query("SELECT * FROM images WHERE service_id LIKE 'v%'", (err, result) => {
    res.send(result);
  });
});
//#endregion

//#region Activities
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

app.post("/delete-activity", (req, res) => {
  const id = req.body.id;
  db.query("DELETE FROM attraction WHERE id=?", [id], (err, result) => {
    console.log(result);
  });
});

app.post("/add-activity", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  db.query(
    "INSERT INTO attraction (id, title, price, description) VALUES (?,?,?,?)",
    [id, title, price, description],
    (err, result) => {
      console.log(err);
    }
  );
});

// Get activities info
app.get("/activities", (req, res) => {
  db.query("SELECT * FROM attraction", (err, result) => {
    res.send(result);
  });
});
//#endregion

//#region Images
// Get images
app.post("/images-by-id", (req, res) => {
  const service_id = req.body.service_id;
  console.log(req.body.service_id);

  db.query(
    "SELECT link FROM images WHERE service_id = ?",
    [service_id],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/add-image", (req, res) => {
  const service_id = req.body.service_id;
  const link = req.body.link;

  db.query(
    "INSERT INTO images (link, service_id) VALUES (?,?)",
    [link, service_id],
    (err, result) => {
      console.log(err);
    }
  );
});
// app.get("/images", (req, res) => {
//   db.query("SELECT * FROM images", (err, result) => {
//     res.send(result);
//   });
// });
//#endregion

//#region Users
// Get users info
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    res.send(result);
  });
});

// Get user's name by id
app.post("/user-name-by-id", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT first_name, last_name FROM users WHERE id=?",
    [id],
    (err, result) => {
      res.send(result);
    }
  );
});
//#endregion

//#region Admins
// Get employees info
app.get("/admins", (req, res) => {
  db.query("SELECT * FROM admins", (err, result) => {
    res.send(result);
  });
});
//#endregion

//#region Events
app.get("/events", (req, res) => {
  db.query("SELECT * FROM events", (err, result) => {
    res.send(result);
  });
});

app.post("/add-event", (req, res) => {
  const id = req.body.Id;
  const subject = req.body.Subject;
  const status = req.body.EventType;
  const description = req.body.Description;
  const start_time = req.body.StartTime;
  const end_time = req.body.EndTime;

  db.query(
    "INSERT INTO events (id, subject, status, start_time, end_time, description) VALUES (?,?,?,?,?,?)",
    [id, subject, status, start_time, end_time, description],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/update-event", (req, res) => {
  const id = req.body.Id;
  const subject = req.body.Subject;
  const status = req.body.EventType;
  const description = req.body.Description;
  const start_time = req.body.StartTime;
  const end_time = req.body.EndTime;
  console.log("id = " + id);
  console.log("subject = " + subject);
  console.log("status = " + status);
  console.log("description = " + description);
  console.log("start_time = " + start_time);
  console.log("end_time = " + end_time);

  db.query(
    "UPDATE events SET subject=?, status=?, start_time=?, end_time=?, description=? WHERE id=?",
    [subject, status, start_time, end_time, description, id],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/delete-event", (req, res) => {
  const id = req.body.Id;

  db.query("DELETE FROM events WHERE id = ?", [id], (err, result) => {
    console.log(err);
  });
});
//#endregion

//#region Orders
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    res.send(result);
  });
});
//#endregion

app.listen(3001, () => {
  console.log("running on port 3001");
});
