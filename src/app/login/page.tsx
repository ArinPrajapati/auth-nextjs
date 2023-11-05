"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";

export default function Loignpage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [isloading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("login Successfull" ,response.data)
      console.log("Login successfull")
      router.push('/profile')

    } catch (error:any) {
      console.log(error);
      toast.error(error)
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (

    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      
      <h1 className="text-white text-2xl mb-6">{isloading?"Processing":"Login"}</h1>
      <div className="flex flex-col my-3 ">
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
        onClick={onLogin}
        className="middle none center my-4 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white disabled:bg-slate-600 "
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "Fill Details" : " Login   "}
      </button>
      <Link href="/signup">Vist Sign UP Page</Link>
    </div>
  );
}
