/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function CardComponent({ icon, content }) {
    return (
        <>
            <div className="flex flex-col h-full items-center mt-40 ">
                <img className="w-24 h-24 rounded-lg mx-2  hover:scale-105 hover:border-cyan-900>
                    " src={icon} alt="card icon" />
                <p className="mt-4 text-center">{content}</p>
            </div>
        </>
    )
}
