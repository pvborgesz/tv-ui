/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import ProfileIcon from "../assets/profile.svg";
import RadioDifusorIcon from "../assets/radiodifusor_icon.svg";
import IndicacaoIcon from "../assets/indicacao.svg";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";
import TitlePage from "../components/TitlePage";

export default function RadioDifusorSec() {
  return (
    <>

      <div className="flex flex-col h-full items-center mt-10">

        <div className="bg-zinc-900 flex flex-row h-full w-11/12 items-center justify-center text-white flex-grow mb-5">
          <div className="flex justify-center w-1/4 mr-10">
            <img className="w-full" src={RadioDifusorIcon} />
          </div>

          <div className="flex flex-col items-center align-center justify-center text-white bg-slate-200 h-full rounded w-11/12">

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

          <div className="flex flex-col w-1/4 justify-between items-start ml-10 h-full">
            <div className="flex flex-row items-center justify-right">
              <h3 className="pr-3 text-2xl text-right text-sky-400">Nome do Telespectador</h3>
              <img className="w-24" src={ProfileIcon} />
            </div>

            <div className="flex flex-col w-full justify-center items-start">

              <div className="flex flex-col items-start justify-center w-full mb-5">
                <h1 className="text-3xl font-normal mb-0">
                  Título do Programa Atual
                </h1>
                <h3 className="text-2xl">
                  hh:mm - hh:mm
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start ">
                <h1 className="text-2xl pr-5 py-2">Descrição informativa sobre o programa atual, ocupando o espaço que o radiodifusor preferir</h1>
                <img src={IndicacaoIcon} />
              </div>
            </div>
          </div>


        </div>

        <div className="bg-zinc-900 grid grid-cols-5 grid-rows-2 text-white gap-5 w-11/12 h-4/5 ml-5 mr-5 mb-10">
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
      <div className="flex items-center justify-center px-10 absolute bottom-0 bg-gray-400 opacity-90 h-48">
        <h3 className="text-3xl">Os aplicativos do Radiodifusor 1 necessitam coletar informações de seu perfil e de seus hábitos de consumo para lhe entregar uma experiência personalizada. Leia nossa Política de Privacidade.</h3>
        <div className="text-2xl flex flex-col justify-center items-center text-white">
          <div className="border-2 border-black-700 w-[250px] flex justify-center items-center bg-slate-800 mb-5 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 border-2 transition-all duration-400">Concordo</div>
          <div className="border-2 border-black-700 w-[250px] flex justify-center items-center bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 hover:scale-105 border-2 transition-all duration-400">Não Concordo</div>
        </div>
      </div>
    </>
  );
}
