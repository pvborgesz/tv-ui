/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import TitlePage from '../components/TitlePage';
import IconBordered from "../components/IconBordered";

import AudioDescriacao from "../assets/audioDescricao.jpg";
import libras from "../assets/libras.png";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import '../App.css';

export default function SelectLanguage() {
  const selectRef = useRef();
  const advanceButtonRef = useRef();


  useEffect(() => {
    // open page with focus in input
    selectRef.current.focus();
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowUp':
          event.preventDefault();
          if (selectRef.current.selectedIndex > 0) {
            selectRef.current.selectedIndex -= 1;
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (selectRef.current.selectedIndex < selectRef.current.length - 1) {
            selectRef.current.selectedIndex += 1;
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (document.activeElement === selectRef.current) {
            advanceButtonRef.current.focus();
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (document.activeElement === advanceButtonRef.current) {
            selectRef.current.focus();
          }
          break;
        case 'Enter':
          event.preventDefault();
          if (document.activeElement === advanceButtonRef.current) {
            advanceButtonRef.current.click();
          }
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Limpando o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);




  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Selecione o idioma" />
      </header>

      <div className="bg-zinc-800 p-4 rounded flex flex-col items-left justify-left text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <h2 className="text-zinc- text-5xl font-semibold">Idiomas</h2>

        <select tabIndex={0} ref={selectRef} className="text-4xl font-normal text-black border-2 border-white rounded-md p-4 overflow-y-scroll">
          <option value="">Português</option>
          <option value="">Inglês</option>
          <option value="">Espanhol</option>
          <option value="">Francês</option>
          <option value="">Alemão</option>
          <option value="">Italiano</option>
          <option value="">Japonês</option>
          <option value="">Mandarim</option>
          <option value="">Russo</option>
          <option value="">Coreano</option>
          <option value="">Árabe</option>
          <option value="">Hindi</option>
          <option value="">Bengali</option>
          <option value="">Punjabi</option>
          <option value="">Turco</option>
          <option value="">Tâmil</option>
          <option value="">Telugu</option>
          <option value="">Marathi</option>
          <option value="">Vietnamita</option>
          <option value="">Urdu</option>
          <option value="">Javanês</option>
          <option value="">Gujarati</option>
          <option value="">Polonês</option>
          <option value="">Ucraniano</option>
          <option value="">Persa</option>
          <option value="">Malaio</option>
          <option value="">Xangainês</option>
          <option value="">Oriá</option>
          <option value="">Panjabi</option>
        </select>
      </div>

      <footer className="flex items-center justify-between text-white mt-auto pl-10 pr-10 pb-10">
        <div className="font-normal flex gap-5 items-center">
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

        <Link
          ref={advanceButtonRef}
          className="flex items-center rounded border border-white p-4 text-4xl hover:bg-emerald-600 focus:bg-emerald-600 transition-all duration-300 gap-2"
          to={'/selectProfile'}
        >
          Avançar
          <BsArrowRightShort size={30} />
        </Link>

      </footer >
    </>
  );
}
