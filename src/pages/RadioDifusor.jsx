/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Footer from "../components/FooterRadiodifusor";

import RadioDifusorIcon from "../assets/radiodifusor_icon.svg";
import IndicacaoIcon from "../assets/indicacao.svg";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";

import { UrlContext } from "../App";

export default function RadioDifusor() {
  const urlValue = localStorage.getItem("urlValue");
  const icon = localStorage.getItem("icon");
  const [counter, setCounter] = React.useState(10);
  const [flag, setFlag] = React.useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    if (counter === 0 || counter < 0) {
      setFlag(true);
      clearInterval(interval);
    }


    return () => {
      // cleanup localstorage
      // localStorage.removeItem("urlValue");
    };
  }, [icon, flag, counter]);

  return (
    <>
      <div className="flex flex-row h-full items-center mt-10">
        <div className="bg-zinc-900 flex flex-col items-left justify-start text-white w-1/3 h-4/5 ml-10 mr-5">
          <img src={icon} alt="Radio Difusor Icon" />
        </div>

        <div className="bg-zinc-900 flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10">
          <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
            <div className="flex justify-center items-center h-4/5 zIndex-9">
              {flag && <iframe
                width="100%"
                height="100%"
                src={`${urlValue}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  width: "100%",
                  transform: "translate(-50%, -50%)",
                }}
              />}
              <p>
                Conteúdo em tela cheia em: {counter} segundos.
              </p>
            </div>

            <div className="flex flex-col justify-end mb-5">
              <div className="flex flex-row justify-end">
                {/* <img src={BtnFcIcon} alt="Button FC Icon" /> */}
              </div>
              <div className="flex flex-row justify-center">
                {/* <img src={ProgBarIcon} alt="Progress Bar Icon" /> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col items-end justify-center w-full p-5 border-r-4 mt-5">
              <h1 className="text-5xl font-normal mb-0">Título do Programa Atual</h1>
              <h3 className="text-4xl">{new Date().toLocaleTimeString()}</h3>
            </div>

            <div className="flex items-center py-5 pl-5">
              <h1 className="text-3xl pr-5 py-2">
                Descrição informativa sobre o programa atual, podendo ocupar duas linhas trunc...
              </h1>
              <img src={IndicacaoIcon} alt="Indicacao Icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
