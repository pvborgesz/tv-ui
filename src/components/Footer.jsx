/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import IconBordered from "./IconBordered";

// import { PiSpeakerHighDuotone } from "react-icons/pi";
import AudioDescriacao from "../assets/audioDescricao.jpg";
import libras from "../assets/libras.png";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import NextButton from "./NextButton";

export default function Footer({ href }, ref) {
  return (
    <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10 mb-20 ml-10">
      <div className="font-normal flex gap-5 items-center mb-5">
        <IconBordered>
          <img src={AudioDescriacao} className="w-[85px]" />
        </IconBordered>

        <p className="text-4xl mt-1.5">Audiodescrição</p>

        <IconBordered>
          {/* <FaHandsAslInterpreting size={40} /> */}
          <img src={libras} className="w-[85px]" />
        </IconBordered>
        <p className="text-4xl mt-1.5">Acessível em Libras</p>
      </div>

      {href && <NextButton ref={ref} href={href} />}
    </footer>
  );
}
