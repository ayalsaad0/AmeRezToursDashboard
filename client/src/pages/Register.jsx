import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      passwordConfirmation !== ""
    ) {
      if (password !== passwordConfirmation) {
        alert("Your passwords don't match, try again");
      } else {
        Axios.post("http://localhost:3001/register", {
          username: username,
          email: email,
          password: password,
        }).then((response) => {
          console.log(response);
        });
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col text-sm shadow-2xl rounded-2xl justify-center pt-10 pb-10 ml-auto mr-auto mt-40 align-middle w-96 dark:text-white border-slate-600">
      <h5 className="ml-auto mr-auto">REGISTER</h5>
      <form className="ml-auto mr-auto w-4/5" onSubmit={handleSubmit}>
        <div className="ml-auto mr-auto flex flex-col">
          <label className="w-full mt-5">Username</label>
          <input
            className="border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md dark:text-black"
            required
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label className="w-full mt-5">Email</label>
          <input
            className="border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md dark:text-black"
            required
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="w-full mt-5">Password</label>
          <input
            className="border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md dark:text-black"
            required
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label className="w-full mt-5">Confirm password</label>
          <input
            className="border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md dark:text-black"
            required
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
        </div>
        <div className="ml-auto mr-auto mt-10 flex flex-col w-full">
          <button
            type="submit"
            style={{ color: "white", backgroundColor: "#fb4e29" }}
            className="w-full h-12 rounded-xl hover:drop-shadow-xl"
          >
            Register
          </button>
          <a className="text-center mt-8" href="/">
            Already registered?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
