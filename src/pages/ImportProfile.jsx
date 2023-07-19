// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileCard from "../components/ProfileCard";

import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

export default function SelectProfile() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Deseja trazer seus perfis de usuário Smart TV para uma melhor experiência na TV aberta?" />
      </header>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
          <ProfileCard
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome Telespectador"}
          />
          <ProfileCard
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome Telespectador"}
          />
          <ProfileCard
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome Telespectador"}
          />
          <ProfileCard
            icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            name={"Nome Telespectador"}
          />
          <ProfileCard
            icon={
              "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"
            }
            name={"Criar seu Perfil"}
            create
          />
        </div>

        <div className="text-white text-2xl flex justify-center items-center w-2/4 h-1/6 gap-4">
            <div className="flex rounded-md border-2 w-full h-full justify-center items-center">Importar Todos</div>
            <div className="flex rounded-md border-2 w-full h-full justify-center items-center">Importar Selecionados</div>
            <div className="flex rounded-md border-2 w-full h-full justify-center items-center">Não Importar</div>
        </div>

        <h3 className="my-10 text-2xl text-white">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), cada radiodifusor solicitará sua permissão para uso dos dados de seu perfil e coleta de outras informações</h3>
      </div>

      <Footer />
    </>
  );
}
