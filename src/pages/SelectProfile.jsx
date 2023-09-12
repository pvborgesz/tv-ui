/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

import { Link } from "react-router-dom";
import ImageIconRounded from "../components/ImageIconRounded";
import UserImg from '../assets/user-img.png'
import audioFile from "../audios/03.mp3";

export default function SelectProfile() {
  const location = useLocation();
  const navigate = useNavigation();
  const linksRef = useRef([]);
  linksRef.current = [
    "/discoverChannels",
    "/discoverChannels",
    "/discoverChannels",
    "/discoverChannels",
  ];

  useEffect(() => {
    const audio = new Audio(audioFile);
    audio.play().catch((error) => {
      console.error("Falha ao tocar áudio:", error);
    });
  }, []);


  useEffect(() => {

    linksRef.current[0].focus();

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          if (linksRef.current[0] === document.activeElement) {
            linksRef.current[4].focus();
          } else if (linksRef.current[1] === document.activeElement) {
            linksRef.current[0].focus();
          } else if (linksRef.current[2] === document.activeElement) {
            linksRef.current[1].focus();
          } else if (linksRef.current[3] === document.activeElement) {
            linksRef.current[2].focus();
          } else {
            linksRef.current[0].focus();
          }
          break;
        case "ArrowRight":
          if (linksRef.current[0] === document.activeElement) {
            linksRef.current[1].focus();
          } else if (linksRef.current[1] === document.activeElement) {
            linksRef.current[2].focus();
          } else if (linksRef.current[2] === document.activeElement) {
            linksRef.current[3].focus();
          } else if (linksRef.current[3] === document.activeElement) {
            linksRef.current[4].focus();
          } else {
            linksRef.current[0].focus();
          }
          break;
        case "ArrowUp":
          linksRef.current[2].focus();
          break;
        case "ArrowDown":
          linksRef.current[3].focus();
          break;
        case 'Enter':
          event.preventDefault();
          document.activeElement.click();
          break;
        case 'Escape':
          event.preventDefault();
          navigate(-1)
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location, navigate]);

  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Configuração Inicial de Perfil" />
      </header>

      <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">

        <Link
          className="flex flex-col items-center gap-10 cursor-pointer p-14 hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400 focus:border-[10px]"
          to={"/discoverChannels"}
          ref={(el) => linksRef.current[0] = el}
        >
          <div className="flex flex-col items-center justify-center  cursor-pointer  rounded-sm w-[360px]">
            <ImageIconRounded icon={UserImg} />
            <h4 className="text-2xl pt-10 font-normal mb-1.5">Continuar sem criar Perfil</h4>
          </div>
        </Link>

        <Link
          className="flex flex-col items-center gap-10 cursor-pointer p-14 hover:bg-zinc-700 hover:scale-105 rounded-xl border-2 h-[370px] justify-center transition-all duration-400 focus:border-[10px]"
          to={"/createProfile"}
          ref={(el) => linksRef.current[1] = el}
        >
          <div className="flex flex-col items-center justify-center  cursor-pointer  rounded-sm w-[360px]">
            <ImageIconRounded icon={"https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"} />
            <h4 className="text-2xl pt-10 font-normal mb-1.5">Adicionar Perfil</h4>
          </div>
        </Link>

      </div>

      <Footer />
    </>
  );
}
