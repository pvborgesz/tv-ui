/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
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
import Libras from "../assets/libras.png";
import AprimorDialogo from "../assets/aprimor_dialogo.svg";
import CC from "../assets/legenda_oculta.svg";

import ProfileCard from "../components/ProfileCard";

export default function CreateProfile() {
  const selectRef = useRef();

  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Criar seu Novo Perfil" />
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
            <img src={ClassLivre} alt="" className="ml-5" />
            <img src={Class10} alt="" className="ml-5" />
            <img src={Class12} alt="" className="ml-5" />
            <img src={Class14} alt="" className="ml-5" />
            <img src={Class16} alt="" className="ml-5" />
            <img src={Class18} alt="" className="ml-5" />
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
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-60 pb-5" src={ProfileIcon} />
          <h3 className="text-3xl text-white text-center">Escolha seu avatar</h3>
        </div>
      </div>


      <div className="bg-zinc-800 flex flex-col items-left justify-left text-white flex-grow ml-10 mt-20 mr-10">
        <h1 className="text-4xl font-normal  ml-10 mb-0">
          Por qual tipo de conteúdo você se interessa?
        </h1>

        <div className="flex align-center justify-center text-white flex-grow ml-10 mt-10 mr-10 mb-10">
          <div className="flex items-center justify-evenly mx-3 w-1/3">
            <img className="w-24 h-24 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={AudioDescriacao} />
            <h3 className="text-3xl text-white">Áudiodescrição</h3>
          </div>

          <div className="flex items-center justify-evenly mx-3 w-1/3">
            <img className="w-24 h-24 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={Libras} />
            <h3 className="text-3xl text-white">Acessível em Libras</h3>
          </div>

          <div className="flex items-center justify-evenly mx-3 w-1/3">
            <img className="w-24 h-24 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={CC} />
            <h3 className="text-3xl text-white">Legendas Ocultas</h3>
          </div>

          <div className="flex items-center justify-evenly mx-3 w-1/3">
            <img className="w-24 h-24 mr-2 border border-white rounded-lg p-2 hover:scale-105 transition-all duration-400 hover:bg-zinc-700" src={AprimorDialogo} />
            <h3 className="text-3xl text-white">Aprimoramento de Diálogo</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
