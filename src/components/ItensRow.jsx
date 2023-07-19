/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import AppsIcon from "../assets/apps.png";
import CardComponent from './CardComponent';

export default function ItensRow({ cards }) {
    return (
        <div className="flex flex-row justify-center align-center">
            <div className="flex justify-center w-[100px] h-[100px] mr-20 mt-20">
                < img className="w-full" src={AppsIcon} />
            </div >
            {/* add effect on */}
            <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-11/12 cursor-pointer  ">
                {cards.map((card, index) => (
                    <>
                        <CardComponent key={index} icon={card.icon} />
                    </>
                ))}
            </div>
        </div >
    )
}
