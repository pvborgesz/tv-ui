/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";

import { Outlet, useNavigate } from "react-router";


// create a context with urlValue and setUrlValue
export const UrlContext = React.createContext({
  urlValue: "",
  setUrlValue: () => { },
});

export const AudiodescContext = React.createContext({
  audioContext: new AudioContext(),
})

export const AudiodescFlag = React.createContext()

export default function App() {
  const navigate = useNavigate();

  const [flagAudiodesc, setFlagAudiodesc] = useState(true);

  useEffect(() => {
    if (navigate) {
      // navigate("/radioDifusorSec");
      navigate("/fabricante");
    }
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.code)
      if (event.type === 'click') {
        event.preventDefault();
        event.code = 'Enter';
      }

      switch (event.code) {
        case 'Digit0':
          event.preventDefault();
          navigate('/homePage');
          break;
        case 'Digit1':
          event.preventDefault();
          navigate('/radioDifusorSec');
          break;
        case 'Digit2':
          event.preventDefault();
          navigate('/radioDifusorSecL2');
          break;
        case 'Digit3':
          event.preventDefault();
          navigate('/importProfile');
          break;
        case 'Escape':
          event.preventDefault();
          navigate(-1);
          break;
        case 'ContextMenu':
          event.preventDefault();
          navigate(-1);
          break;
        case 'KeyA':
          event.preventDefault();
          navigate('/tvAberta');
          break;
        case 'KeyV':
          event.preventDefault();
          // reload
          window.location.reload();
          break;
        case 'Digit7':
          event.preventDefault();
          // reload
          window.location.reload();
          break;
        /*case 'F2':
          if (flagAudiodesc) {
            setFlagAudiodesc(false)
          } else setFlagAudiodesc(true)
          break;*/
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <UrlContext.Provider value={{ urlValue: "", setUrlValue: () => { } }}>
      <main className="bg-zinc-900 flex flex-col w-100 h-full min-h-screen">
        <div className="bg-zinc-900 flex flex-col justify-center w-100 h-1 min-h-screen overflow-hidden">
          <AudiodescFlag.Provider value={[flagAudiodesc, setFlagAudiodesc]}>
            <Outlet />
          </AudiodescFlag.Provider>
        </div>
      </main>
    </UrlContext.Provider>
  );
}
