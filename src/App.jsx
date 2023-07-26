/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router";


// create a context with urlValue and setUrlValue
export const UrlContext = React.createContext({
  urlValue: "",
  setUrlValue: () => { },
});


export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate) {
      navigate("changeProfile");
    }
  }, []);


  return (
    <UrlContext.Provider value={{ urlValue: "", setUrlValue: () => { } }}>
      <main className="bg-zinc-900 flex flex-col w-100 h-full min-h-screen">
        <div className="bg-zinc-900 flex flex-col justify-center w-100 h-1 min-h-screen overflow-hidden">
          <Outlet />
        </div>
      </main>
    </UrlContext.Provider>
  );
}
