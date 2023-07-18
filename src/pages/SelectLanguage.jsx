import React, { useContext } from "react";
import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

import "../App.css";

export default function SelectLanguage() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Selecione o idioma" />
      </header>

      <div className="bg-zinc-800 p-4 rounded flex flex-col  items-left justify-left text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <h2 className="text-zinc- text-2xl font-semibold">Idiomas</h2>

        <select className="text-lg font-normal text-white border-2 border-white rounded-md p-4 overflow-y-scroll">
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

      <Footer href="/selectProfile" />
    </>
  );
}
