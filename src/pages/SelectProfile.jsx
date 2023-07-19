// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileCard from "../components/ProfileCard";

import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

export default function SelectProfile() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Configuração Inicial de Perfil" />
      </header>
      <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <ProfileCard
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileCard
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileCard
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileCard
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
        />
        <ProfileCard
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
