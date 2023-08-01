/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext } from 'react';
import AppsIcon from "../assets/apps.png";
import TvAberta from "../assets/tvAberta.png";
import AnotherIcon from "../assets/anotherIcon.png";
import ProfileIcon from "../assets/profile.svg";
import Footer from '../components/FooterHomePage';
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { cards, streaming } from '../database';


export default function HomePage() {
    const rowRefs = [useRef([]), useRef([]), useRef([])];
    const navigate = useNavigate();
    // useContext
    const { urlValue, setUrlValue } = useContext(UrlContext);

    const openChannel = (channelURL, channelIcon) => {
        setUrlValue(channelURL);
        // put on localstorage
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
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    // Verificamos se não estamos na última linha para não sair do intervalo
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
                default:
                    break;
            }
            rowRefs[currentRowIndex].current[currentCardIndex].focus();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const rowIcons = [AppsIcon, TvAberta, AnotherIcon];
    const rowTitles = ["TV Aberta 3.0", "Streaming", "Talvez você goste"];

    return (
        <>

            <div className="flex flex-col h-full items-center mt-10 ml-[50%]">
                <div className="flex flex-col w-1/4 justify-between items-start ml-10 h-full">
                    <div className="flex flex-row items-center justify-right">
                        <h3 className="pr-3 text-2xl text-right text-sky-400">Paulo Victor</h3>
                        <img className="w-24" src={"https://github.com/pvborgesz.png"} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col h-full justify-center items-center mt-10'>

                {[cards, streaming, cards].map((row, rowIndex) => (
                    <>
                        <div className="flex flex-row justify-center align-center">
                            <div className="flex flex-col justify-center w-36 h-36 mr-20 mt-20 gap-5">
                                <img className="w-full mt-40" src={rowIcons[rowIndex]} />
                                <p className="text-2xl text-center text-white">{rowTitles[rowIndex]}</p>
                            </div>
                            <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-11/12 cursor-pointer">
                                {row.map((card, cardIndex) => (
                                    <>
                                        <button
                                            className="flex flex-col items-center mt-40 hover:scale-200"
                                            ref={(el) => {
                                                rowRefs[rowIndex].current[cardIndex] = el;
                                                if (el) {
                                                    el.onfocus = () => el.style.transform = "scale(1.2)";
                                                    el.onblur = () => el.style.transform = "scale(1)";
                                                }
                                            }}
                                            tabIndex={0}
                                            onClick={() => openChannel(card.content, card.icon)} // Estamos passando a URL do cartão para a função openChannel
                                        >
                                            <div className='focus:border-cyan-200  hover:border-cyan-900 '>
                                                <img
                                                    className="w-36 h-36 rounded-lg mx-2  hover:scale-200 transition duration-500 ease-in-out"
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
            </div>

            <Footer />
        </>
    )
}
