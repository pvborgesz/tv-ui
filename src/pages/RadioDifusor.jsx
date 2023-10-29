/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Footer from "../components/FooterRadiodifusor";

import RadioDifusorIcon from "../assets/radiodifusor_icon.svg";
import IndicacaoIcon from "../assets/indicacao_livre.svg";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";

import { UrlContext } from "../App";
import { useNavigate } from "react-router";

export default function RadioDifusor() {
  const urlValue = localStorage.getItem("urlValue");
  const icon = localStorage.getItem("icon");
  const [counter, setCounter] = React.useState(10);
  const [flag, setFlag] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 2000);

    if (counter === 0 || counter < 0) {
      setFlag(true);
      clearInterval(interval);
    }

    // when press "u" key, go to RadioDifusorSecL2
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyU") {
        navigate("/radioDifusorSecL2");
      }
    });

    const openChannel = (channelURL) => {
      localStorage.setItem("urlValue", channelURL);
      navigate("/radioDifusor");
    };

    // when page up key is pressed, go to RadioDifusorSecL2
    document.addEventListener("keydown", (event) => {
      if (event.code === "PageUp") {
        openChannel(
          "https://www.youtube.com/embed/AKeUssuu3Is?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0"
        );
        navigate("/radioDifusor");
      } else if (event.code === "PageDown") {
        openChannel(
          "https://www.youtube.com/embed/tO01J-M3g0U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0"
        );
        navigate("/radioDifusor");
      } else if (event.code === "KeyL") {
        openChannel(
          "https://www.youtube.com/embed/tO01J-M3g0U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0"
        );
        navigate("/radioDifusorSecL2");
      }
      if (event.code === "ContextMenu") {
        navigate("/homePage");
      }
    });

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

        <div className="bg-zinc-900 flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10 mt-[10rem]">
          <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
            <div className="flex justify-center items-center h-4/5 zIndex-9">
              {flag ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${urlValue}`}
                  // src={`${urlValue}&start=20`}
                  // src={'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&start=20'}
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
                />
              ) : (
                <div className="flex relative bg-black w-100 ">
                  <iframe
                    src={`${urlValue}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      height: "900px",
                      width: "1366px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* <p className="absolute top-1/2 leading-3 left-[35%] text-white z-20 bg-black p-2 rounded">
                    Conteúdo em tela cheia em: {counter} segundos.
                  </p> */}
                </div>
              )}
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

          <div className="grid grid-cols-2 mt-[15rem]">
            <div className="flex flex-col items-end justify-center w-full p-5 border-r-4 mt-10">
              <h1 className="text-5xl font-normal mb-0">
                Título do Programa Atual
              </h1>
              <h3 className="text-4xl">{new Date().toLocaleTimeString()}</h3>
            </div>

            <div className="flex items-center py-5 pl-5">
              <h1 className="text-3xl pr-5 py-2">
                Descrição informativa sobre o programa atual, podendo ocupar
                duas linhas trunc...
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
