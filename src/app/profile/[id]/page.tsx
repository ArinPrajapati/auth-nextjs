import React from "react";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <h1>User Profile</h1>
      <hr />
      <p className="text-4xl my-10">
        Profile &nbsp;&nbsp;&nbsp;
        <span className="font-extrabold bg-black p-2 rounded-md text-red-500">
          {params.id}
        </span>
      </p>
    </div>
  );
}
