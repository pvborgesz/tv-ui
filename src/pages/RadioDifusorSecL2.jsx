/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import ProfileIcon from "../assets/profile.svg";
import RadioDifusorIcon from "../assets/radiodifusor2_icon.svg";
import IndicacaoIcon from "../assets/indicacao.svg";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";
import TitlePage from "../components/TitlePage";

export default function RadioDifusorSecL2() {
  const handleClick = () => {
    let disc = document.getElementById("disclaimer")

    disc.className += " h-0"
    setInterval(() => {
      for (const child of disc.children) {
        child.className = "hidden"
      }
    }, 50)
    setInterval(() => {
      disc.className = "hidden"
    }, 100)
  }

  return (
    <>
      {/* div with input for nome and for sobrenome  in row*/}
      <div className="flex flex-row h-full items-end mt-10 mb-5">

        <div className="bg-zinc-900 flex flex-col h-full w-11/12 items-start justify-center text-white flex-grow ml-5">
    
          <div className="flex justify-center w-2/4 mr-10 mb-5">
            <img className="w-full" src={RadioDifusorIcon} />
          </div>

          <div className="flex flex-col w-full justify-center items-start mt-5 mb-5">
            
            <div className="flex flex-col items-start justify-center w-full mb-5">
              <h1 className="text-5xl font-normal mb-0">
                Título do Programa Atual
              </h1>
              <h3 className="text-3xl">
                hh:mm - hh:mm
              </h3>
            </div>

            <div className="flex flex-row justify-start items-start ">
              <h1 className="text-2xl pr-5 py-2">Descrição informativa sobre o programa atual, ocupando o espaço que o radiodifusor preferir</h1>
              <img src={IndicacaoIcon} />
            </div>
          </div>

          <div className="flex flex-col items-center align-center justify-center text-white bg-slate-200 h-full rounded w-full">
            
            <div className="flex justify-center items-center h-4/5">
              <img src={PlayIcon} />
            </div>

            <div className="flex flex-col justify-end mb-5">
              <div className="flex flex-row justify-end mr-10">
                <img className="w-48" src={BtnFcIcon} />
              </div>
              <div className="flex flex-row justify-center">
                <img className="w-11/12" src={ProgBarIcon} />
              </div>
            </div>
            
          </div>

        </div>

        <div className="flex flex-col h-full justify-between w-4/5 items-end">
          <div className="flex flex-row items-center justify-right mr-5 mb-5">
            <h3 className="pr-3 text-2xl text-right text-sky-400">Nome do Telespectador</h3>
            <img className="w-24" src={ProfileIcon} />
          </div>

          <div className="bg-zinc-900 grid grid-rows-5 grid-cols-2 text-white gap-5 w-full h-4/5 pl-5 pr-5">
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
            <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
          </div>

        </div>

      </div>
      <div id="disclaimer" className="w-full flex items-center justify-center px-10 absolute bottom-0 bg-gray-700 opacity-90 h-48 transition-all duration-400">
        <h3 className="text-3xl text-white">Nosso ecossistema de conteúdos necessita obter e processar informações de seu perfil e de suas preferências para personalizar a sua experiência. Acesse nossa Política de Privacidade.</h3>
        <div className="text-2xl flex flex-col justify-center items-center text-white">
          <div onClick={handleClick} className="border-2 border-gray-200 w-[250px] flex justify-center items-center bg-slate-800 mb-5 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 border-2 transition-all duration-400">Aceito</div>
          <div onClick={handleClick} className="border-2 border-gray-200 w-[250px] flex justify-center items-center bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 border-2 transition-all duration-400">Não Aceito</div>
        </div>
      </div>
    </>
  );
}
