// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "../App.css";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/userContext";

export default function SelectLanguage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <h1 className="text-4xl font-bold mt-10 ml-10 mb-0">
          Selecione o Idioma
        </h1>
      </header>
      <div className="bg-zinc-800 flex flex-col items-left justify-left text-white flex-grow ml-10 mt-20 gap-8 mr-10">
        <div className="text-4  xl font-bold ">Idiomas</div>
        <select className="text-2xl font-bold bg-zinc-800 text-white border-2 border-white rounded-md p-8">
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

      <div className="text-red-500">{user}</div>

      <Footer href="/selectProfile" />
    </>
  );
}
