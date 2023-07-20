/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import AppsIcon from "../assets/apps.png";
import TvAberta from "../assets/tvAberta.png";
import ProfileIcon from "../assets/profile.svg";
import ItensRow from '../components/ItensRow';
import Footer from '../components/Footer';


import { cards, streaming } from '../database';


export default function HomePage() {
    // Criamos uma referência para cada linha
    const row1Ref = useRef();
    const row2Ref = useRef();
    const row3Ref = useRef();

    useEffect(() => {
        // Array com todas as linhas
        const rows = [row1Ref, row2Ref, row3Ref];

        // Iniciamos o index em 0
        let currentRowIndex = 0;

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    event.preventDefault();
                    // Verificamos se não estamos na primeira linha para não sair do intervalo
                    if (currentRowIndex > 0) {
                        currentRowIndex -= 1;
                        rows[currentRowIndex].current.focus();
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    // Verificamos se não estamos na última linha para não sair do intervalo
                    if (currentRowIndex < rows.length - 1) {
                        currentRowIndex += 1;
                        rows[currentRowIndex].current.focus();
                    }
                    break;
                case 'Enter':
                    // Aqui você pode adicionar o comportamento para o Enter
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Limpar o evento quando o componente for desmontado
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>

            <div className="flex flex-col h-full items-center mt-10 ml-[50%]">
                <div className="flex flex-col w-1/4 justify-between items-start ml-10 h-full">
                    <div className="flex flex-row items-center justify-right">
                        <h3 className="pr-3 text-2xl text-right text-sky-400">Nome do Telespectador</h3>
                        <img className="w-24" src={ProfileIcon} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col h-full justify-center items-center mt-10'>
                <ItensRow ref={row1Ref} cards={cards} icon={AppsIcon} />
                <ItensRow ref={row2Ref} cards={streaming} icon={TvAberta} />
                <ItensRow ref={row3Ref} cards={cards} icon={TvAberta} />
            </div>

            <Footer />
        </>
    )
}
