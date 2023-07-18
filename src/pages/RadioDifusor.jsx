/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import ProfileIcon from "../components/ProfileIcon";
import RadioDifusorIcon from "../assets/radiodifusor_icon.svg";
import IndicacaoIcon from "../assets/indicacao.svg";
import TitlePage from "../components/TitlePage";

export default function RadioDifusor() {
  return (
    <>
      {/* div with input for nome and for sobrenome  in row*/}
      <div className="flex flex-row h-full items-center">

        <div className="bg-zinc-900 flex flex-col items-left justify-start text-white w-1/3 h-4/5 ml-10">
          <img src={RadioDifusorIcon} />
        </div>

        <div className="bg-zinc-900 flex flex-col h-4/5 items-left justify-left text-white flex-grow ml-5 mr-10">
          <div className="flex align-center justify-center text-white bg-slate-200 h-4/5 rounded">
          </div>

          <div className="grid grid-cols-2">
            
            <div className="flex flex-col items-end justify-center w-full p-5 border-r-4 mt-5">
              <h1 className="text-5xl font-normal mb-0">
                Título do Programa Atual
              </h1>
              <h3 className="text-4xl">
                hh:mm - hh:mm
              </h3>
            </div>

            <div className="flex items-center py-5 pl-5">
              <h1 className="text-3xl pr-5 py-2">Descrição informativa sobre o programa atual, podendo ocupar duas linhas trunc...</h1>
              <img src={IndicacaoIcon} />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
