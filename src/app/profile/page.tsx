"use client";

import CSbutton from "@/components/CSbutton";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data);
      setData(response.data.data._id);
      toast.success("Connected!!")
    } catch (error: any) {
      console.log(error);
      toast.error(error.messages);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      Profile
      <h2 className="p-2 rounded-md bg-blue-500 ">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data} </Link>
        )}
      </h2>
      <hr />
      <CSbutton color="#E864C3" onClick={logout} name="Logout" />
      <CSbutton
        color="#8C2B2B"
        onClick={getUserDetails}
        name="Get User Details"
        css="w-[12rem] h-[3rem]"
        hoverC="#464959"
      />
    </div>
  );
}
