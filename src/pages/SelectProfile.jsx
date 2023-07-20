// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";

import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";

export default function SelectProfile() {
  // construir ref
  // const selectRef = React.useRef();

  // useEffect(() => {

  //   selectRef.current.focus();

  // }, []);




  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <TitlePage name="Configuração Inicial de Perfil" />
      </header>
      <div className="p-4 rounded flex items-center justify-center text-white flex-grow my-10 mx-10 gap-8 mr-10 overflow-hidden">
        <ProfileCard
          icon={"https://github.com/pvborgesz.png"}
          name={"Paulo Victor"}
          href={"/discoverChannels"}
        // ref={selectRef}
        />
        <ProfileCard
          icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRph8E-hI-Gc9fPnGK8RY1LXsrDlzzsj6zli7qBy1aIT3aAZUkJ2X90qqJ6qVttu6iucPI&usqp=CAU"}
          name={"Carlos de Salles"}
          href={"/discoverChannels"}
        />
        <ProfileCard
          icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/640px-Bill_Gates_2018.jpg"}
          name={"Bill Gates"}
          href={"/discoverChannels"}
        />
        <ProfileCard
          icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          name={"Visitante"}
          href={"/discoverChannels"}
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
