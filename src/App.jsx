import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate) {
      navigate("selectLanguage");
    }
  }, []);

  return (
    <main className="bg-zinc-600 flex flex-col w-100 h-100 min-h-screen">
      <div className="bg-zinc-800 flex flex-col w-100 h-100 min-h-screen overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
}
