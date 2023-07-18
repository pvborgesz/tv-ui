/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TitlePage from '../components/TitlePage';
import AppCard from '../components/AppCard';
import Footer from '../components/Footer';

const cards = [
    {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGmzvRt2QXfnlr3DHz6C73PzvYQ5RPJyaxxG_2dvMmzIJjaJ66y4sTp_4F4bvE78jsIc&usqp=CAU",
        backgroundColor: "#fff",
        content: "https://thumbs.gfycat.com/PastelHalfHerring-size_restricted.gif"
    },
    // {
    //     icon: "https://upload.wikimedia.org/wikipedia/pt/4/47/UFF_bras%C3%A3o.png",
    //     backgroundColor: "#fff",
    //     content: "https://thumbs.gfycat.com/UnsungSorrowfulAfricanpiedkingfisher-size_restricted.gif"
    // },
    {
        icon: "https://www.lg.com/lg5-common-gp/images/common/share/share-default.jpg",
        backgroundColor: "#fff",
        content: "https://i.gifer.com/14M1.gif"
    },
    {
        icon: "https://cdn.worldvectorlogo.com/logos/vasco-futebol-clube-de-sapiranga-rs.svg",
        backgroundColor: "#fff",
        content: "https://i.gifer.com/14M1.gif"
    },
    {
        icon: "https://styles.redditmedia.com/t5_4mbrq5/styles/communityIcon_4b3ni8g4krf81.png?width=256&s=9b56100040472f74b807d4e6c1e0bc20d35e1b39",
        backgroundColor: "#fff"
    },
    {
        icon: "data:image/jpeg;base64,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",
        backgroundColor: "#fff"
    },

];
export default function DiscoverChannels() {
    const [scanProgress, setScanProgress] = useState(0);
    const [channelsFound, setChannelsFound] = useState([]);
    const [scanComplete, setScanComplete] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

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
    };

    const handleButtonClick = () => {
        if (scanComplete) {
            console.log("a")
        } else {
            startScan();
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
                <p className='scan-info text-2xl text-white text-center mb-10'>Apps de TV Aberta Encontrados: {channelsFound.length}</p>
                <div className='channels-container flex flex-row items-center justify-center w-200 h-100'>
                    {channelsFound.map((card, index) => (
                        <div className='app-card mb-10' key={index}>
                            <AppCard icon={card.icon} />
                        </div>
                    ))}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    {isScanning ? <>
                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            Região Identificada:
                        </p>

                        <p className='scan-info text-2xl text-white text-center mb-10'>
                            <strong>País</strong>: Brasil  <br /> <strong>Cidade</strong>: Rio de Janeiro
                        </p>
                    </>
                        : null}
                </div>
                <button onClick={handleButtonClick} className='scan-button text-white text-center p-4 rounded-e-sm m-5 ' style={scanComplete ? {
                    backgroundColor: "#C85250",

                } : { backgroundColor: "green" }}>
                    {scanComplete ? 'Fechar Busca' : isScanning ? 'Buscando...' : 'Iniciar Busca'}
                </button>
            </div>
            <Footer />
        </>
    )
}