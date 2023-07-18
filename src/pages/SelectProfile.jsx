// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileIcon from "../components/ProfileIcon";

import Footer from "../components/Footer";

export default function SelectProfile() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <h1 className="text-4xl font-bold mt-10 ml-10 mb-0">
          Configuração Inicial de Perfil
        </h1>
      </header>
      <div className="bg-zinc-800 flex  items-center justify-center text-white flex-grow ml-10 mt-20 gap-8 mr-10">
        <ProfileIcon
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileIcon
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileIcon
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileIcon
          icon={
            "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"
          }
          name={"Adicionar Perfil"}
          create
        />
      </div>

      <Footer />
    </>
  );
}
