/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TitlePage from '../components/TitlePage';
import AppCard from '../components/AppCard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { cards, streaming } from '../database';
// buscar streaming
export default function DiscoverChannels() {
    const [scanProgress, setScanProgress] = useState(0);
    const [channelsFound, setChannelsFound] = useState([]);
    const [streamingFound, setStreamingFound] = useState([]);
    const [scanComplete, setScanComplete] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();
    const startRef = React.useRef();

    useEffect(() => {
        startRef.current.focus();
    }, [scanProgress])

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
                const newChannel = cards[oldChannels.length];
                if (newChannel) {
                    return [...oldChannels, newChannel];
                }
                return oldChannels;
            });
        }, 2000);

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
            navigate("/homePage");
        } else {
            await startScan();
        }
    };

    return (
        <>
            <header className="flex flex-col items-left justify-left text-white">
                <TitlePage name="Configurando a sua TV..." />
            </header>

            <div className='flex flex-col items-center justify-between'>

                <div className='scan-progress flex flex-row text-white m'
                    style={{ width: `${scanProgress}%` }}>
                </div>
                <p className='scan-info text-2xl font-semibold text-white text-center mt-8 mb-20'>Buscando Aplicativos de TV 3.0 pela sua região...</p>

                <p className='scan-info text-2xl text-white text-center'>Progresso: {scanProgress}%</p>
                <p className='scan-info text-2xl text-white text-center mb-10'>Apps de TV Aberta Encontrados: {channelsFound.length + streamingFound.length}</p>
                {/* max width then breakline */}
                <div className='channels-container flex flex-row items-center justify-center w-200 h-100 flex-wrap'>
                    {channelsFound.map((card, index) => (
                        <div className='app-card mb-10' key={index}>
                            <AppCard icon={card.icon} />
                        </div>
                    ))}
                    <br />
                    {streamingFound.map((streaming, index) => (
                        <div className='app-card mb-10' key={index}>
                            <AppCard icon={streaming.icon} />
                        </div>
                    ))}
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
                <button ref={startRef} onClick={handleButtonClick} className='scan-button text-white text-center p-8 rounded-e-sm m-5 text-3xl' style={scanComplete ? { backgroundColor: "#E7625F" } : { backgroundColor: "green" }}>
                    {scanComplete ? 'Fechar Busca' : isScanning ? 'Buscando...' : 'Iniciar Busca'}
                </button>
            </div >
            <Footer />
        </>
    )
}