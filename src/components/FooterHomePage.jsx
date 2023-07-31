/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

// import { PiSpeakerHighDuotone } from "react-icons/pi";
import Settings from "../assets/settings.svg";
import NextButton from "./NextButton";

export default function Footer({ href }, ref) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10 mb-20 ml-10">
      <div className="font-normal flex gap-5 items-center mb-5">
        <IconBordered>
          <img src={Settings} className="w-10 h-10" />
        </IconBordered>

        <p className="text-2sm mt-1.5">Audiodescrição</p>
      </div>

      {href && <NextButton ref={ref} href={href} />}
    </footer>
  );
}
