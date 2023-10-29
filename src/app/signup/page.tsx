"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignUPpage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <h1 className="text-white text-2xl mb-6">Sign Up</h1>
      <hr />
      <div className="flex flex-col my-3">
        <label htmlFor="username" className="">
          User Name
        </label>
        <input
          className="p-3 border-none outline-none rounded-md text-black"
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="User Name"
        />
      </div>
      <div className="flex flex-col my-3">
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          className="p-3 border-none outline-none rounded-md text-black"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col my-3">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          className="p-3 border-none outline-none rounded-md text-black"
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <button
        onClick={onSignup}
        className="middle none center my-4 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white"
      >
        Sign Up
      </button>
      <Link href="/login">Vist login Page</Link>
    </div>
  );
}
