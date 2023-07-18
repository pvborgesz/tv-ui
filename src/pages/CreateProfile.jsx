/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import ProfileIcon from "../components/ProfileIcon";

export default function CreateProfile() {
  return (
    <>
      <header className="flex flex-col items-left justify-left text-white">
        <h1 className="text-4xl font-bold mt-10 ml-10 mb-0">
          Criar seu Novo Perfil
        </h1>
      </header>

      {/* div with input for nome and for sobrenome  in row*/}
      <div className="bg-zinc-800 flex items-left justify-left text-white flex-grow ml-10 mt-20 gap-8 mr-10">
        <div className="text-4xl font-bold p-2 ">Nome</div>
        <input
          className="text-2xl font-bold bg-zinc-800 text-white border-2 border-white rounded-md p-4"
          type="text"
          placeholder="Digite seu nome"
        />
        <div className="text-4xl font-bold ">Sobrenome</div>
        <input
          className="text-2xl font-bold bg-zinc-800 text-white border-2 border-white rounded-md p-4"
          type="text"
          placeholder="Digite seu sobrenome"
        />
      </div>

      <div className="bg-zinc-800 flex flex-col items-left justify-left text-white flex-grow ml-10 mt-20 mr-10">
        <h1 className="text-4xl font-bold  ml-10 mb-0">
          Por qual tipo de conteúdo você se interessa?
        </h1>

        <div className="flex align-center justify-center text-white flex-grow ml-10 mt-10 mr-10 mb-10">
          <ProfileIcon
            icon={
              "https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufma.png/@@images/image.png"
            }
            name={"TV UFMA"}
          />
          <ProfileIcon
            icon={
              "https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufma.png/@@images/image.png"
            }
            name={"TV UFMA"}
          />
          <ProfileIcon
            icon={
              "https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufma.png/@@images/image.png"
            }
            name={"TV UFMA"}
          />
          <ProfileIcon
            icon={
              "data:image/png;base64,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"
            }
            name={"TV UFF"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
