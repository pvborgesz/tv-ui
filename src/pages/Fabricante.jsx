// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Fabricante() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/selectLanguage");
        }, 6000);
    }, []);


    return (
        <>


            <div className="container  align-center justify-center">

                <h1 className='text-9xl text-center text-white font-bold ml-[11%]'>Fabricante</h1>

            </div>

        </>
    )
}
