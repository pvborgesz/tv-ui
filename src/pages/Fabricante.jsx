// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// import { AudiodescContext } from '../App';
// import { AudiodescFlag } from '../App';
import audioFile from '../audios/fabricante.mp3'

import { useAudioPlayer } from 'react-use-audio-player';

export default function Fabricante() {
    const navigate = useNavigate();

    /*const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);*/

    const { load } = useAudioPlayer()

    // const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag)

    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log(event.code)
            switch (event.code) {
              default:
                break;
            }
          };
          window.addEventListener('keydown', handleKeyDown);
    }, [])

    useEffect(() => {
        // if (flagAudiodesc) {
            load(audioFile, {
              autoplay: true
            })
        // }

        setTimeout(() => {
            // pauseAudio()
            navigate("/selectLanguage");
        }, 6000);
    }, []);

    /*const playAudio = (file) => {
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
    }*/
    
    /*const pauseAudio = () => {
      // console.log("pauseAudio")
      // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
      console.log(audio.current)
      if (track.current != null){
        // const audio = track.current.mediaElement;
        audio.current.pause();
        // localStorage.setItem('hasPlayedAudio2', 'true');
      }
    }*/

    return (
        <>


            <div className="container  align-center justify-center">

                <h1 className='text-9xl text-center text-white font-bold ml-[11%]'>Fabricante</h1>

            </div>

        </>
    )
}
