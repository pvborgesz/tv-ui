/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useContext } from 'react'
import TitlePage from '../components/TitlePage';
import AppCard from '../components/AppCard';
import Footer from '../components/FooterDiscoverChannels';
import { useNavigate } from 'react-router-dom';
import { cards, streaming, universityApps } from '../database';
import TvAberta from '../assets/tvAberta.png';

import { AudiodescContext } from '../App';
import { AudiodescFlag } from '../App';

import audioFile from "../audios/05.mp3";

export default function DiscoverChannels() {
    const [scanProgress, setScanProgress] = useState(0);
    const [channelsFound, setChannelsFound] = useState([]);
    const [streamingFound, setStreamingFound] = useState([]);
    const [scanComplete, setScanComplete] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();
    const startRef = React.useRef();

    const [flagAudiodesc, setFlagAudiodesc] = useContext(AudiodescFlag);

    const {audioContext} = useContext(AudiodescContext);
    const track = useRef(null);
    const audio = useRef(null);
    const audioQueue = [audioFile]

    /*useEffect(() => {
        const hasPlayedAudio = localStorage.getItem('hasPlayedAudi4');

        if (!hasPlayedAudio) {
            playAudio(audioFile)
            /*audio.current = new Audio(audioFile);
            audio.current.play().catch((error) => {
                console.error("Falha ao tocar áudio:", error);
            });
            localStorage.setItem('hasPlayedAudio4', 'true');
        }
    }, []);*/

    useEffect(() => {
        startRef.current.focus();
        audioQueue.push(audioFile); // Tem que ser o audio do btn que recebe o foco primeiro na página

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'Digit0':
                  pauseAudio()
                  navigate('/homePage');
                  break;
                case 'Digit1':
                  pauseAudio()
                  navigate('/radioDifusorSec');
                  break;
                case 'Digit2':
                  pauseAudio()
                  navigate('/radioDifusorSecL2');
                  break;
                case 'ContextMenu':
                  pauseAudio()
                  navigate(-1);
                  break;
                case 'KeyA':
                  pauseAudio()
                  navigate('/tvAberta');
                  break;
                case 'KeyV':
                  pauseAudio()
                  window.location.reload();
                  break;
                case 'Digit7':
                  pauseAudio()
                  window.location.reload();
                  break;
                case 'F2':
                  if (flagAudiodesc) {
                    pauseAudio()
                    setFlagAudiodesc(false)
                  }
                  else setFlagAudiodesc(true)
                  break;
                case 'Escape':
                    pauseAudio()
                    break;
                default:
                    break;
            }
          };
          window.addEventListener('keydown', handleKeyDown);
      
          if (flagAudiodesc) {
            playAudio(audioQueue[0])
            audio.current.addEventListener("ended", (e) => {
                console.log("Cabou o audio")
                audioQueue.shift()
                playAudio(audioQueue[0])
            })
          }

          // Limpando o evento quando o componente é desmontado
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
    }, [/*scanProgress*/flagAudiodesc])

    const startScan = () => {
        setScanProgress(0);
        setChannelsFound([]);
        setScanComplete(false);
        setIsScanning(true);

        const scanInterval = setInterval(() => {
            setScanProgress(oldProgress => {
                if (oldProgress >= 100) {
                    clearInterval(scanInterval);
                    setScanComplete(true);
                    return 100;
                }
                return oldProgress + 10;
            });

            setChannelsFound(oldChannels => {
                const newChannel = universityApps[oldChannels.length];
                if (newChannel) {
                    return [...oldChannels, newChannel];
                }
                return oldChannels;
            });
        }, 1000);

        setStreamingFound(oldStreaming => {
            const newStreaming = streaming[oldStreaming.length];
            if (newStreaming) {
                return [...oldStreaming, newStreaming];
            }
            return oldStreaming;
        });
    };


    const handleButtonClick = async () => {
        if (scanComplete) {
            pauseAudio()
            navigate("/homePage");
        } else {
            await startScan();
        }
    };

    const playAudio = (file) => {
        console.log("playAudio")
        // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
    
        audio.current = new Audio(file);
        track.current = audioContext.createMediaElementSource(audio.current);
        console.log(audio.current)
        track.current.connect(audioContext.destination);
    
        audio.current.play().catch((error) => {
          console.error("Falha ao tocar áudio:", error);
        });
        // localStorage.setItem('hasPlayedAudio2', 'true');
      }
    
      const pauseAudio = () => {
        // console.log("pauseAudio")
        // const hasPlayedAudio = localStorage.getItem('hasPlayedAudio2');
        console.log(audio.current)
        if (track.current != null){
          // const audio = track.current.mediaElement;
          audio.current.pause();
          // localStorage.setItem('hasPlayedAudio2', 'true');
        }
      }

    return (
        <>
            <header className="flex flex-col items-left justify-left text-white">
                <TitlePage name="Configurando a sua TV..." />
            </header>

            <div className='flex flex-col items-center justify-between'>

                <div className='scan-progress flex flex-row text-white m'
                    style={{ width: `${scanProgress}%` }}>
                </div>
                <p className='scan-info text-4xl font-semibold text-white text-center mt-5 mb-5'>Procurando por Emissoras de TV aberta de sua região...</p>

                <p className='scan-info text-2xl text-white text-center'>Progresso: {scanProgress}%</p>
                <p className='scan-info text-2xl text-white text-center mb-5'>Apps de TV Aberta Encontrados: {channelsFound.length + streamingFound.length}</p>
                {/* max width then breakline */}
                <div className='channels-container flex flex-row items-center justify-center w-200 h-100 flex-wrap'>
                    {channelsFound.map((card, index) => (
                        <div className='app-card overflow-y-auto' key={index}>
                            {card.icon !== TvAberta ? <AppCard icon={card.icon} /> : <></>}

                        </div>
                    ))}
                    <br />
                    {/* {streamingFound.map((streaming, index) => (
                        <div className='app-card mb-5' key={index}>
                            {streaming.icon !== TvAberta ? <AppCard icon={streaming.icon} /> : <></>}
                        </div>
                    ))} */}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    {isScanning ? <>
                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            Região Identificada:
                        </p>

                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            <strong>País</strong>: Brasil  <br /> <strong>Cidade</strong>: São Paulo
                        </p>
                    </>
                        : null}
                </div>
                <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
                    <button ref={startRef} onClick={handleButtonClick} className='scan-button text-white text-center p-8 rounded-e-sm m-5 text-3xl' style={scanComplete ? { backgroundColor: "#E7625F" } : { backgroundColor: "green" }}>
                        {scanComplete ? 'Fechar Busca' : isScanning ? 'Buscando...' : 'Iniciar Busca'}
                    </button>
                </AudiodescFlag.Provider>
            </div >
            <Footer />
        </>
    )
}