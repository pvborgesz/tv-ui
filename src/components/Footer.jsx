/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

import { PiSpeakerHighDuotone } from "react-icons/pi";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import NextButton from "./NextButton";

export default function Footer({ href }) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10">
      <div className="font-normal flex gap-5 items-center">
        <IconBordered>
          <PiSpeakerHighDuotone size={40} />
        </IconBordered>

        <p className="text-2sm mt-1.5">Texto Falado</p>

        <IconBordered>
          <FaHandsAslInterpreting size={40} />
        </IconBordered>
        <p className="text-2sm mt-1.5">Acessível em Libras</p>
      </div>

      {href && <NextButton href={href} />}
    </footer>
  );
}
