/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileIcon({ icon, name, create }) {
  const [href] = useState(create ? "/createProfile" : "/discoverChannels");

  return (
    <Link
      className="flex flex-col items-center gap-10 cursor-pointer hover:bg-zinc-500 rounded-sm border-2 bg-gradient-to-r from-sky-950 to-zinc-800"
      to={href}
    >
      <div className="flex flex-col items-center gap-10 cursor-pointer hover:bg-zinc-500 p-20 rounded-sm flex-1">
        <img
          src={icon}
          alt="profile"
          className="w-40 h-40  fill-white border-2 border-white rounded-full"
        />
        <h4 className="text-2xl mt-1.5 font-normal mb-1.5">{name}</h4>
      </div>
    </Link>
  );
}
