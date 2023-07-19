/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineSubtitles } from "react-icons/md";
import NextButton from "./NextButton";

export default function FooterAppCatUI({ href }) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10">
      <div className="font-normal flex justify-between items-center w-full">

        <div className="flex font-normal gap-3 items-center">
          <IconBordered>
            <BiHomeAlt size={40} />
          </IconBordered>
          <p className="text-2xl mt-1.5">Home</p>
        </div>

        <div className="flex font-normal gap-3 items-center">
          <p className="text-2xl mt-1.5">Guia de Programação</p>
          <IconBordered>
            <MdOutlineSubtitles size={40} />
          </IconBordered>
        </div>
      </div>

      {href && <NextButton href={href} />}
    </footer>
  );
}
