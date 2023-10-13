/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext } from 'react';
import ProfileIcon from "../assets/profile.svg";
import Footer from '../components/FooterHomePage';
import FooterHomePage from '../components/FooterTvAberta';
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { universityApps } from '../database';

import audioFile from "../audios/01.mp3"
import { AudiodescContext } from '../App';

export default function TvAberta() {
    const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);
    const audioQueue = [audioFile]

    const rowRefs = [useRef([]), useRef([])];
    const navigate = useNavigate();
    // useContext
    const { urlValue, setUrlValue } = useContext(UrlContext);

    const openChannel = (channelURL, channelIcon) => {
        setUrlValue(channelURL);
        localStorage.setItem("urlValue", channelURL);
        localStorage.setItem("icon", channelIcon);

        navigate("/radioDifusor");
    }

    useEffect(() => {
        // Iniciamos o index em 0 para linhas e cartões
        let currentRowIndex = 0;
        let currentCardIndex = 0;

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    event.preventDefault();
                    // Verificamos se não estamos na primeira linha para não sair do intervalo
                    if (currentRowIndex > 0) {
                        currentRowIndex -= 1;
                        currentCardIndex = 0;  // reset card index when moving to another row
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    // go down one line in the grid and maintain the current card index
                    if (currentRowIndex < rowRefs.length - 1) {
                        currentRowIndex += 1;
                    }

                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    // Verificamos se não estamos no primeiro card para não sair do intervalo
                    if (currentCardIndex > 0) {
                        currentCardIndex -= 1;
                    }
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    // Verificamos se não estamos no último card para não sair do intervalo
                    if (currentCardIndex < rowRefs[currentRowIndex].current.length - 1) {
                        currentCardIndex += 1;
                    }
                    break;
                case 'Escape':
                    pauseAudio()
                    break;
                default:
                    break;
            }

            rowRefs[currentRowIndex].current[currentCardIndex].focus();
            audioQueue.push(audioFile);
        };

        window.addEventListener('keydown', handleKeyDown);

        playAudio(audioQueue[0])
        audio.current.addEventListener("ended", (e) => {
          console.log("Cabou o audio")
          audioQueue.shift()
          playAudio(audioQueue[0])
        })

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const playAudio = (file) => {
      // console.log("playAudio")
      // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
    
      audio.current = new Audio(file);
      track.current = audioContext.createMediaElementSource(audio.current);
      console.log(audio.current)
      track.current.connect(audioContext.destination);
    
      audio.current.play().catch((error) => {
        console.error("Falha ao tocar áudio:", error);
      });
      // localStorage.setItem('hasPlayedAudio2', 'true');
    }
    
    const pauseAudio = () => {
      // console.log("pauseAudio")
      // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
      console.log(audio.current)
      if (track.current != null){
        // const audio = track.current.mediaElement;
        audio.current.pause();
        // localStorage.setItem('hasPlayedAudio2', 'true');
      }
    }

    return (
        <>
            <h1 className="text-4xl text-white text-center mt-20">Suas Emissoras de TV Aberta</h1>

            <div className="flex flex-row h-full items-center mt-40">
                <div className="flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10">
                    <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
                        <div className="flex justify-center items-center h-4/5 zIndex-9">
                            <div className="grid grid-cols-6 gap-10 mx-10">
                                {universityApps.map((card, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => {
                                            rowRefs[0].current[index] = el
                                            if (el) {
                                                el.onfocus = () => el.style.transform = "scale(1.3)";
                                                el.onblur = () => el.style.transform = "scale(1)";
                                            }
                                        }}
                                        tabIndex={0}
                                        className="flex flex-col items-center justify-center rounded-lg bg-zinc-900"
                                        onClick={() => openChannel(card.content, card.icon)}
                                    >
                                        <img className="w-[240px] h-[135px]" src={card.icon} alt="Channel Icon" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </>
    )
}