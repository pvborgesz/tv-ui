// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProfileIcon from '../components/ProfileIcon'

export default function CreateProfile() {
    return (
        <>
            <div className='bg-zinc-800 flex flex-col w-100 h-100 min-h-screen'>
                <header className='flex flex-col items-left justify-left text-white'>
                    <h1 className='text-4xl font-bold mt-10 ml-10 mb-0'>
                        Configuração Inicial de Perfil
                    </h1>
                </header>
                <div className='bg-zinc-800 flex  items-center justify-center text-white flex-grow ml-10 mt-20 gap-8 mr-10'>
                    <ProfileIcon icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} name={"Visitante"} />
                    <ProfileIcon icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} name={"Visitante"} />
                    <ProfileIcon icon={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} name={"Visitante"} />
                    <ProfileIcon icon={"https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5697474.jpg"} name={"Adicionar Perfil"} />
                </div>
                <footer className='flex items-center justify-between text-white mb-30 ml-10 mr-10 mb-20'>
                    <div className='font-bold flex gap-5 items-center'>
                        <img src='https://cdn-icons-png.flaticon.com/512/2719/2719648.png' alt='arrow' className='w-10 h-10 fill-white border-2 border-white rounded-sm' />
                        <p className='text-2sm mt-1.5'>Texto Falado</p>
                        <img src='https://imagepng.org/wp-content/uploads/2018/05/libras-simbolo-liguagem-de-sinais-1.png' alt='arrow' className='w-10 h-10 fill-white border-2 border-white rounded-sm' />
                        <p className='text-2sm mt-1.5'>Acessível em Libras</p>
                    </div>

                </footer >
            </div >
        </>
    )
}
