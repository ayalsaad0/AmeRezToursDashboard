import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { IconContext } from "react-icons";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { setUser } = useStateContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleShow = () => {
    setPasswordShown(!passwordShown);
  };

  const onLoggedIn = (token) => {
    fetch(`http://localhost:3001/private`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            window.localStorage.setItem("isLoggedIn", true);
            navigate("ecommerce");
            window.localStorage.setItem("currentUser", token.dbUser);
            setUser(token.dbUser);
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            alert(jsonRes.message);
          } else {
            onLoggedIn(jsonRes);
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col text-sm shadow-2xl rounded-2xl justify-center pt-10 pb-10 ml-auto mr-auto mt-40 align-middle w-96 border-slate-600 dark:text-white">
      <h5 className="ml-auto mr-auto">LOGIN</h5>
      <form className="ml-auto mr-auto w-4/5" onSubmit={handleSubmit}>
        <div className="ml-auto mr-auto flex flex-col">
          <label className="w-full mt-5">Email / username</label>
          <input
            className="dark:text-black border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md"
            required
            placeholder="Email / username"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <label className="w-full mt-5">Password</label>
          <input
            className="dark:text-black border ml-auto mr-auto border-slate-400 w-full p-2 rounded-md"
            required
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <button className="mt-4" type="button">
              {passwordShown ? (
                <BiHide onClick={handleShow} />
              ) : (
                <BiShow onClick={handleShow} />
              )}
            </button>
          </IconContext.Provider>
        </div>
        <div className="ml-auto mr-auto flex flex-col w-full">
          <a
            className="w-full text-sm underline text-right mb-5 mt-5"
            href="/reset-password"
          >
            Forgot your password?
          </a>
          <button
            type="submit"
            style={{ color: "white", backgroundColor: "#fb4e29" }}
            className="w-full h-12 rounded-xl hover:drop-shadow-xl"
          >
            Login
          </button>
          <a className="text-center mt-8" href="/register">
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
