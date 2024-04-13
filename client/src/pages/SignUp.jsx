import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border-4 p-3 rounded-lg"
          id="username"
        ></input>
        <input
          type="email"
          placeholder="email"
          className="border-4 p-3 rounded-lg"
          id="username"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="border-4 p-3 rounded-lg"
          id="username"
        ></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        <p>Have a account</p>
        <Link to={"/signin"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
