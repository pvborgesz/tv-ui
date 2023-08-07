/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext } from 'react';
import ProfileIcon from "../assets/profile.svg";
import Footer from '../components/FooterHomePage';
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { cards, streaming } from '../database';

export default function TvAberta() {
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
                    // Verificamos se não estamos na última linha para não sair do intervalo
                    if (currentRowIndex < rowRefs.length - 1) {
                        currentRowIndex += 1;
                        currentCardIndex = 0;  // reset card index when moving to another row
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

    return (
        <>
            <h1 className="text-4xl text-white mt-10 mb-10 text-center">Seus aplicativos de TV Aberta</h1>

            <div className="flex flex-row h-full items-center">
                <div className="flex flex-col h-full items-left justify-left text-white flex-grow ml-5 mr-10">
                    <div className="flex flex-col items-center align-center justify-center text-white h-4/5 rounded">
                        <div className="flex justify-center items-center h-4/5 zIndex-9">
                            <div className="grid grid-cols-4 gap-8">
                                {cards.map((card, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => {
                                            rowRefs[0].current[index] = el
                                            if (el) {
                                                el.onfocus = () => el.style.transform = "scale(1.2)";
                                                el.onblur = () => el.style.transform = "scale(1)";
                                            }
                                        }}
                                        tabIndex={0}
                                        className="flex flex-col items-center justify-center h-40 w-40 rounded-lg bg-zinc-900"
                                        onClick={() => openChannel(card.content, card.icon)}
                                    >
                                        <img className="w-32 h-32" src={card.icon} alt="Channel Icon" />
                                    </button>
                                ))}
                                {/* {streaming.map((card, index) => (
                                    <button
                                        key={index}
                                        ref={(el) => {
                                            rowRefs[1].current[index] = el
                                            if (el) {
                                                el.onfocus = () => el.style.transform = "scale(1.2)";
                                                el.onblur = () => el.style.transform = "scale(1)";
                                            }
                                        }}
                                        tabIndex={0}
                                        className="flex flex-col items-center justify-center h-40 w-40 rounded-lg bg-zinc-900"
                                        onClick={() => openChannel(card.content, card.icon)}
                                    >
                                        <img className="w-32 h-32" src={card.icon} alt="Channel Icon" />
                                    </button>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
