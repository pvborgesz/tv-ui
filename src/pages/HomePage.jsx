/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext } from 'react';
// import AppsIcon from "../assets/apps.png";
import AppsIcon from "../assets/apps-icon.png";
import TvAberta from "../assets/tvAberta.png";
import AnotherIcon from "../assets/anotherIcon.png";
import ProfileIcon from "../assets/profile.svg";
import UserImg from "../assets/user-img.png";
import Footer from '../components/FooterHomePage';
import { useNavigate } from "react-router";
import { UrlContext } from "../App";

import { cards, streaming, recommendations } from '../database2';
import { BsChevronRight } from 'react-icons/bs';


export default function HomePage() {
    const navigate = useNavigate();
    const { urlValue, setUrlValue } = useContext(UrlContext);

    const focusableElements = [useRef([]), useRef([]), useRef([]), useRef([])];
    let currentRowIndex = 0;
    let currentElementIndex = 0;

    const openChannel = (channelURL, channelIcon) => {
        console.log(channelURL)
        setUrlValue(channelURL);
        localStorage.setItem("urlValue", channelURL);
        localStorage.setItem("icon", channelIcon);
        navigate("/radioDifusor");
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    event.preventDefault();
                    if (currentRowIndex > 0) {
                        currentRowIndex -= 1;
                        currentElementIndex = 0;
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    if (currentRowIndex < focusableElements.length - 1) {
                        currentRowIndex += 1;
                        currentElementIndex = 0;
                    }
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    if (currentElementIndex > 0) {
                        currentElementIndex -= 1;
                    }
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    if (currentElementIndex < focusableElements[currentRowIndex].current.length - 1) {
                        currentElementIndex += 1;
                    }
                    break;

                default:
                    break;
            }
            focusableElements[currentRowIndex].current[currentElementIndex].focus();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const rowIcons = [AppsIcon, TvAberta, AnotherIcon];
    const rowTitles = ["Aplicativos", "TV Aberta", "Recomendações"];

    return (
        <>
            <div className="flex justify-end">
                <div className="flex flex-col w-1/4 justify-center items-end h-full mr-5">
                    <div className="flex flex-row items-center justify-end mt-10 p-10">
                        <h3 className="pr-3 text-2xl text-right text-sky-400">Usuário</h3>
                        <img className="w-24" src={UserImg} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col h-full justify-center items-center'>
                {[streaming, cards, recommendations].map((row, rowIndex) => (
                    <div className="flex flex-row justify-center align-center h-[250px] mt-10 rounded-lg" >
                        <button className="flex flex-col justify-center w-36 mx-3 align items-center mr-10"
                            onClick={
                                () => {
                                    if (rowIndex === 0) {
                                        // navigate('/aplicativos');
                                    } else if (rowIndex === 1) {
                                        navigate('/tvAberta');
                                    } else {
                                        // navigate('/talvezGoste');
                                    }
                                }
                            }>
                            <img
                                className="w-[8rem] h-[7rem] rounded-full"
                                src={rowIcons[rowIndex]}
                                ref={(el) => {
                                    focusableElements[rowIndex].current[0] = el;
                                    if (el) {
                                        el.onfocus = () => el.style.transform = "scale(1.1)";
                                        el.onblur = () => el.style.transform = "scale(1)";
                                    }
                                }}
                                tabIndex={0}
                                onClick={
                                    () => {
                                        if (rowIndex === 0) {
                                            // navigate('/aplicativos');
                                        } else if (rowIndex === 1) {
                                            navigate('/tvAberta');
                                        } else {
                                            // navigate('/talvezGoste');
                                        }
                                    }
                                }
                            />
                            <p className="text-xl text-center text-white ">{rowTitles[rowIndex]}</p>
                        </button>
                        <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-full cursor-pointer gap-5">
                            {row.map((card, cardIndex) => (
                                <button
                                    className="flex flex-col items-center justify-center hover:scale-200 w-[200px] mx-3 rounded-lg"
                                    ref={(el) => {
                                        focusableElements[rowIndex].current[cardIndex + 1] = el;
                                        if (el) {
                                            el.onfocus = () => el.style.transform = "scale(1.1)";
                                            el.onblur = () => el.style.transform = "scale(1)";
                                        }
                                    }}
                                    tabIndex={0}
                                    onClick={() => {
                                        if (card.icon === TvAberta) {
                                            navigate('/tvAberta');
                                        } else {
                                            openChannel(card.content, card.icon)
                                        }
                                    }
                                    }
                                >
                                    <div className='focus:border-cyan-200  hover:border-cyan-900  '>
                                        <img
                                            className="w-[240px] h-[135px] rounded-lg mx-2  hover:scale-200 transition duration-500 ease-in-out "
                                            src={card.icon}
                                            alt="card icon"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button
                            className="flex flex-col items-center justify-center hover:scale-200 w-[5px] mx-[10px] rounded-lg"
                            onClick={
                                () => {
                                    navigate('/tvAberta');

                                }}
                        >
                            <BsChevronRight className="w-[30px] h-[30px] text-white cursor-pointer" />
                        </button>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}
