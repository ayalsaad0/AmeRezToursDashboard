import React from "react";

// This is the "reset password" page
const ResetPassword = () => {
  return (
    <div className="flex flex-col text-sm shadow-2xl rounded-2xl justify-center pt-10 pb-10 ml-auto mr-auto mt-40 align-middle w-96 border-slate-600">
      <form className="ml-auto mr-auto w-4/5">
        <p>
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </p>
        <div className="ml-auto mr-auto flex flex-col">
          <label className="w-full mt-5">Email</label>
          <input
            className="border ml-auto mr-auto mt-5 border-slate-400 w-full p-2 rounded-md"
            required
            placeholder="Email"
            type="email"
          ></input>
        </div>
        <div className="ml-auto mt-5 mr-auto flex flex-col w-full">
          <button
            type="button"
            style={{ color: "white", backgroundColor: "#fb4e29" }}
            className="w-full h-12 rounded-xl hover:drop-shadow-xl"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
