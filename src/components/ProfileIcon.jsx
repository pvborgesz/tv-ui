/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function ProfileIcon({ icon, name }) {
    return (
        <div className='flex flex-col items-center gap-10 cursor-pointer hover:bg-zinc-500 p-20 rounded-sm border-2 bg-gradient-to-r from-sky-950 to-zinc-800'>
            <div className='flex flex-row gap-2 hover:bg-zinc-500 p-1 rounded-sm'>
                <div className='flex flex-col items-center gap-10 cursor-pointer hover:bg-zinc-500 p-2 rounded-sm'>
                    <img src={icon} alt='profile'
                        className='w-40 h-40  fill-white border-2 border-white rounded-full' />
                    <h4 className='text-2xl mt-1.5 font-bold mb-1.5'>
                        {name}
                    </h4>

                </div>
            </div>
        </div>
    )
}
