"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast  from "react-hot-toast";

export default function SignUPpage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
    
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup succes", response.data)
      toast.success("Sign up success ✅✅")
      router.push('/login');
    } catch (error: any) {
      console.log(error.message)
      toast.error(error)
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length >0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white blueGreen">
      <h1 className="text-white text-2xl mb-6">{loading ? "Processing" : "Sign UP"}</h1>
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
        className="middle none center my-4 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white disabled:bg-gray-600 active:scale-90"
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "No SignUP" : "Sign UP"}
      </button>
      <Link href="/login">Vist login Page</Link>
    </div>
  );
}
