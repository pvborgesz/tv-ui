/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import ProfileIcon from "../assets/profile.svg";
import RadioDifusorIcon from "../assets/radiodifusor2_icon.svg";
import IndicacaoIcon from "../assets/indicacao.svg";
import PlayIcon from "../assets/play.svg";
import BtnFcIcon from "../assets/btn_fc.svg";
import ProgBarIcon from "../assets/prog_bar.svg";
import TitlePage from "../components/TitlePage";

import Youtube from "react-youtube"

import { cards, streaming } from '../database';

export default function RadioDifusorSecL2() {
  const rowRefs = [useRef([]), useRef([])];
  let urlValue = localStorage.getItem("urlValue");
  const icon = localStorage.getItem("icon");
  const [counter, setCounter] = React.useState(10);
  const [flag, setFlag] = React.useState(false);
  const navigate = useNavigate();

  const _onReady = (event) => {
    // console.log("INICIO EM:", start.current)
    event.target.loadVideoById({
      videoId: urlValue,
      startSeconds: 10 // start.current
    })
    event.target.playVideo()
  }

  const _onReadyMini = (event) => {
    // console.log(event.target)
    // console.log("INICIO EM:", start.current)
    event.target.loadVideoById({
      videoId: urlValue,
    })
    event.target.playVideo()
  }

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

  useEffect(() => {

    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 3000);

    if (counter === 0 || counter < 0) {
      setFlag(true);
      clearInterval(interval);
    }

    let currentRowIndex = 0;
    let currentCardIndex = 0;

    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          event.preventDefault();
          // Verificamos se não estamos na primeira linha para não sair do intervalo
          if (currentRowIndex > 0) {
            currentRowIndex -= 1;
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          // Verificamos se não estamos na última linha para não sair do intervalo
          if (currentRowIndex < rowRefs.length - 1) {
            currentRowIndex += 1;
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          // Verificamos se não estamos no primeiro card para não sair do intervalo
          if (currentCardIndex > 0) {
            currentCardIndex -= 1;
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          // Verificamos se não estamos no último card para não sair do intervalo
          if (currentCardIndex < rowRefs[currentRowIndex].current.length - 1) {
            currentCardIndex += 1;
          }
          break;
        default:
          break;
      }
      // Focamos no card atual
      rowRefs[currentRowIndex].current[currentCardIndex].focus();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // cleanup localstorage
      // localStorage.removeItem("urlValue");
    };
  }, [icon, flag, counter]);

  const openChannel = (channelURL, channelIcon) => {
    urlValue = channelURL;
    // put on localstorage
    localStorage.setItem("urlValue", channelURL);
    localStorage.setItem("icon", channelIcon);
    navigate("/radioDifusorSec");
  }

  return (
    <>
      {/* div with input for nome and for sobrenome  in row*/}
      <div className="flex flex-row h-full items-end mt-3 mb-5">

        <div className="bg-zinc-900 flex flex-col h-full w-10/12 items-normal justify-center text-white flex-grow ml-2">

          <div className="flex justify-between w-full mb-1">
            <img className="w-[250px]" src={icon} />
            <div className="flex flex-row items-center justify-right mr-5 mb-5">
              <h3 className="pr-3 text-2xl text-right text-sky-400">Nome do Telespectador</h3>
              <img className="w-24" src={ProfileIcon} />
            </div>
          </div>


          <div className="flex flex-col w-full justify-center items-start mt-2 mb-5">

            <div className="flex flex-col items-start justify-center w-full mb-2">
              <h1 className="text-4xl font-normal mb-0">
                Título do Programa Atual
              </h1>
              <h3 className="text-3xl">
                {/*hh:mm - hh:mm*/}
                {new Date().toLocaleTimeString()}
              </h3>
            </div>

            <div className="flex flex-row justify-start items-start ">
              <h1 className="text-xl pr-2 pt-1">Descrição informativa sobre o programa atual, ocupando o espaço que o radiodifusor preferir</h1>
              <img className="w-[60px]" src={IndicacaoIcon} />
            </div>
          </div>

          <div className="flex justify-start items-center w-full h-4/5 zIndex-9">
            {flag ?
              <Youtube 
                onReady={_onReady}

                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    allowFullScreen: 1,
                    autoplay: 1,
                    controls: 0
                    // encrypted-media: 1,
                  },
                }}

                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  width: "100%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              :
              
              <Youtube 
                onReady={_onReadyMini}

                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0
                    // encrypted-media: 1,
                  },
                }}

                style={{
                  height: "720px",
                  width: "1280px",
                }}
              />

                }

                <div className="bg-zinc-900 grid grid-rows-9 grid-cols-1 text-white gap-5 w-1/4 h-full px-1">
                  {[cards].map((row, rowIndex) => (
                    <>
                      <div className="flex flex-row justify-center align-center">
                        <div className="flex flex-col items-center align-center justify-center text-white h-full rounded w-full cursor-pointer">
                          {row.map((card, cardIndex) => (
                            <>
                              <button
                                className="flex flex-col w-full h-full items-center"
                                ref={(el) => {
                                  rowRefs[rowIndex].current[cardIndex] = el
                                  if (el) {
                                    el.onfocus = () => el.style.transform = "scale(1.07)";
                                    el.onblur = () => el.style.transform = "scale(1)";
                                  }
                                }}
                                tabIndex={0}
                                onClick={() => openChannel(card.content, card.icon)} // Estamos passando a URL do cartão para a função openChannel
                              >
                                <div className='mx-3 focus:border-cyan-200  hover:border-cyan-900 '>
                                  <img
                                    className="w-full h-36 rounded-lg mx-2  hover:scale-105
                                                  focus:scale-120 transition duration-500 ease-in-out"
                                    src={card.icon}
                                    alt="card icon"
                                  />
      
                                </div>
                              </button>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                  {/*<div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>
                  <div className="flex justify-center items-center bg-zinc-700 rounded"><h1 className="text-1xl">RECOMENDAÇÃO</h1></div>*/}
                </div>
          </div>

            {/*<div className="flex justify-center items-center h-4/5">
              <img src={PlayIcon} />
            </div>

            <div className="flex flex-col justify-end mb-5">
              <div className="flex flex-row justify-end mr-10">
                <img className="w-48" src={BtnFcIcon} />
              </div>
              <div className="flex flex-row justify-center">
                <img className="w-11/12" src={ProgBarIcon} />
              </div>
            </div>*/}

          

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
