/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/FooterCreateProfile";
import TitlePage from "../components/TitlePage";

import { useRef } from 'react';

import ClassLivre from "../assets/indicacao.svg"
import Class10 from "../assets/indicacao_10.svg"
import Class12 from "../assets/indicacao_12.svg"
import Class14 from "../assets/indicacao_14.svg"
import Class16 from "../assets/indicacao_16.svg"
import Class18 from "../assets/indicacao_18.svg"
import ProfileIcon from "../assets/profile_gray.svg"

import AudioDescriacao from "../assets/audioDescricao.jpg";
import PcPhoneIcon from "../assets/pc_phone.svg";
import Libras from "../assets/libras.png";
import AprimorDialogo from "../assets/aprimor_dialogo.svg";
import CC from "../assets/legenda_oculta.svg";

import { BsCheck } from "react-icons/bs";

import ProfileCard from "../components/ProfileCard";

export default function CreateProfile() {
  const selectRef = useRef();

  const handleClick = (event) => {
    const e = document.getElementById(event.target.id)

    const classe = e.className

    if (classe == "flex absolute top-[-1.3rem] left-[-1rem] items-center") {
      e.className = "hidden absolute top-[-1.3rem] left-[-1rem] items-center"
    } else if (classe == "hidden absolute top-[-1.3rem] left-[-1rem] items-center") {
      e.className = "flex absolute top-[-1.3rem] left-[-1rem] items-center"
    }
  }

  return (
    <>
      <header className="flex flex-row items-center justify-between text-white w-4/5">
        <TitlePage name="Criando seu Perfil Smart TV" />
        <div className="flex justify-center items-center pt-20 cursor-pointer">
          <img className="w-[100px] h-[59px]" src={PcPhoneIcon} alt="" />
          <h1 className="text-2xl pl-5">Usar app iController</h1>
        </div>
      </header>

      {/* div with input for nome and for sobrenome  in row*/}

      <div className="flex justify-center items-evenly">
        <div className="w-5/6 px-5 py-5 bg-zinc-800 flex flex-col justify-center text-white mx-5 mt-14 gap-8">
          <input
            className="text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
            type="text"
            placeholder="Nome do Perfil (obrigatório)"
          />
          
          <div className="flex justify-start">
            <input
              className="text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="checkbox"
              placeholder="Nome do Perfil (obrigatório)"
            />
            <h3 className="text-3xl ml-5">Este é um Perfil de Grupo (ex.: família, hóspedes...)</h3>
          </div>

          <div className="flex justify-start">
            <input
              className="w-5/6 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="password"
              placeholder="Data de nascimento dd/mm/aaaa"
            />
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={1} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={1} src={ClassLivre} alt="" />
            </div>
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={2} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={2} src={Class10} alt="" />
            </div>
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={3} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={3} src={Class12} alt="" />
            </div>
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={4} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={4} src={Class14} alt="" />
            </div>
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={5} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={5} src={Class16} alt="" />
            </div>
            <div onClick={handleClick} className="flex flex-col ml-5 relative">
              <div id={6} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={6} src={Class18} alt="" />
            </div>
          </div>
          
          <div className="flex justify-start">
            <input
              className="text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
              type="checkbox"
              placeholder=""
            />
            <div className="flex">
              <h3 className="text-3xl ml-5">Este é um Perfil de Criança</h3>

              <div className="flex ml-20">

                <h3 className="text-3xl mr-5">
                  Gênero
                </h3>
                <input
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">M</h1>
                <input
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">F</h1>
                <input
                  className="mx-1 text-2xl font-normal bg-zinc-800 text-white border-2 border-white rounded-md p-4"
                  type="checkbox"
                  placeholder=""
                />
                <h1 className="mr-2 text-2xl">NB</h1>
              </div>

            </div>
          </div>

          <div className="flex items-center">
            <h3 className="text-3xl pr-5">Idioma Selecionado</h3>

            <select tabIndex={0} ref={selectRef} placeholder="Selecione um Idioma" className="text-lg font-normal text-black border-2 border-white rounded-md p-4 overflow-y-scroll">
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

          <div className="flex align-center justify-center text-white flex-grow ml-10 mt-10 mr-10 mb-10">
            <div className="flex items-center justify-evenly mx-3 w-1/3 relative">
              <div id={7} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={7} onClick={handleClick} className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={AudioDescriacao} />
              <h3 className="text-2xl text-white">Áudiodescrição</h3>
            </div>

            <div className="flex items-center justify-evenly mx-3 w-1/3 relative">
              <div id={8} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={8} onClick={handleClick} className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={Libras} />
              <h3 className="text-2xl text-white">Acessível em Libras</h3>
            </div>

            <div className="flex items-center justify-evenly mx-3 w-1/3 relative">
              <div id={9} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={9} onClick={handleClick} className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={CC} />
              <h3 className="text-2xl text-white">Legendas Ocultas</h3>
            </div>

            <div className="flex items-center justify-evenly mx-3 w-1/3 relative">
              <div id={10} className="hidden absolute top-[-1.3rem] left-[-1rem] items-center" ><BsCheck color="green" size="30px"/></div>
              <img id={10} onClick={handleClick} className="w-20 h-20 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={AprimorDialogo} />
              <h3 className="text-2xl text-white">Aprimoramento de Diálogo</h3>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-60 pb-5" src={ProfileIcon} />
          <h3 className="text-3xl text-white text-center">Escolha seu avatar</h3>
        </div>

      </div>


      <div className="w-4/5 bg-zinc-800 flex flex-row items-left justify-left text-white flex-grow ml-5 mt-20 mr-10">
        <input className="ml-5" type="checkbox" />
        <h1 className="text-2xl font-normal  ml-10 mr-5">
          Concordo com a coleta e processamento de meus dados para uma melhor experiência, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). <a className="text-slate-400" href="#">Saiba mais.</a>
        </h1>
      </div>

      <Footer />
    </>
  );
}
