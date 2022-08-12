import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
// import { or } from 'react-native-reanimated';
import Admin from "../models/admin.js";

const signup = async (req, res, next) => {
  // checks if email already exists
  const dbUser = await Admin.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUser) => {
      if (dbUser) {
        return res.status(409).json({ message: "email already exists" });
      } else if (req.body.email && req.body.password) {
        // password hash
        bcrypt.hash(req.body.password, 10, (err, passwordHash) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "could not hash the password" });
          } else if (passwordHash) {
            return Admin.create({
              username: req.body.username,
              role: req.body.role,
              full_name: req.body.fullName,
              email: req.body.email,
              phone: req.body.phone,
              password: passwordHash,
            })
              .then(() => {
                res.status(200).json({ message: "Admin created" });
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(502)
                  .json({ message: "error while creating the admin" });
              });
          }
        });
      } else if (!req.body.password) {
        return res.status(400).json({ message: "password not provided" });
      } else if (!req.body.email) {
        return res.status(400).json({ message: "email not provided" });
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const login = (req, res, next) => {
  // checks if email exists
  Admin.findOne({
    where: {
      // email: req.body.Email
      email: req.body.email,
    },
  })
    .then((dbUser) => {
      if (!dbUser) {
        return res.status(404).json({ message: "user not found" });
      } else {
        // password hash
        bcrypt.compare(
          req.body.password,
          dbUser.password,
          (err, compareRes) => {
            if (err) {
              // error while comparing
              res
                .status(502)
                .json({ message: "error while checking user password" });
            } else if (compareRes) {
              // password match
              const token = jwt.sign({ email: req.body.email }, "secret", {
                expiresIn: "1h",
              });
              res.status(200).json({ message: "user logged in", "token": token, dbUser });
            } else {
              // password doesnt match
              res.status(401).json({ message: "invalid credentials" });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log("error", err.message);
    });
};

const updatedPassword = async (req, res, next) => {
  // checks if email already exists
  const dbUser = User.findOne({
    where: {
      email: req.body.Email,
    },
  })
    .then((dbUser) => {
      if (!dbUser) {
        return res.status(409).json({ message: "email do not exists" });
      } else if (req.body.Email && req.body.Password) {
        // password hash
        bcrypt.hash(req.body.Password, 10, (err, passwordHash) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "couldnt hash the password" });
          } else if (passwordHash) {
            return User.update(
              { password: passwordHash },
              {
                where: { email: dbUser.email },
              }
            )
              .then(() => {
                res.status(200).json({ message: "user password updated" });
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(502)
                  .json({ message: "error while updated the user password" });
                console.log(err.message);
              });
          }
        });
      } else if (!req.body.Password) {
        return res.status(400).json({ message: "password not provided" });
      } else if (!req.body.Email) {
        return res.status(400).json({ message: "email not provided" });
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};
const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "not authenticated" });
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "could not decode the token" });
  }
  if (!decodedToken) {
    res.status(401).json({ message: "unauthorized" });
  } else {
    res.status(200).json({ message: "here is your resource" });
  }
};

export { signup, login, updatedPassword, isAuth };
