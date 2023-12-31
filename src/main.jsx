// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectLanguage from "./pages/SelectLanguage.jsx";
import SelectProfile from "./pages/SelectProfile.jsx";
import EPG from "./pages/EPG.jsx";
import ImportProfile from "./pages/ImportProfile.jsx";
import ChangeProfile from "./pages/ChangeProfile.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import UserProvider from "./contexts/userContext.jsx";
import RadioDifusor from "./pages/RadioDifusor.jsx";
import RadioDifusorSec from "./pages/RadioDifusorSec.jsx";
import RadioDifusorSecL2 from "./pages/RadioDifusorSecL2.jsx";
import AppCatUI from "./pages/AppCatUI.jsx";
import AppCatUIProfile from "./pages/AppCatUIProfile.jsx";
import DiscoverChannels from "./pages/DiscoverChannels.jsx";
import HomePage from "./pages/HomePage.jsx";
import Fabricante from "./pages/Fabricante.jsx";
import TvAberta from "./pages/TvAberta.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "EPG",
        element: <EPG />,
      },
      {
        path: "fabricante",
        element: <Fabricante />,
      },
      {
        path: "selectLanguage",
        element: <SelectLanguage />,
      },
      {
        path: "createProfile",
        element: <CreateProfile />,
      },
      {
        path: "selectProfile",
        element: <SelectProfile />,
      },
      {
        path: "homePage",
        element: <HomePage />,
      },
      {
        path: "discoverChannels",
        element: <DiscoverChannels />,
      },
      {
        path: "radioDifusor",
        element: <RadioDifusor />,
      },
      {
        path: "radioDifusorSec",
        element: <RadioDifusorSec />,
      },
      {
        path: "radioDifusorSecL2",
        element: <RadioDifusorSecL2 />,
      },
      {
        path: "appCatUI",
        element: <AppCatUI />,
      },
      {
        path: "appCatUIProfile",
        element: <AppCatUIProfile />,
      },
      {
        path: "importProfile",
        element: <ImportProfile />,
      },
      {
        path: "changeProfile",
        element: <ChangeProfile />,
      },
      {
        path: "tvAberta",
        element: <TvAberta />,
      },
      {
        path: "RadioDifusorSecL2",
        element: <RadioDifusorSecL2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </>
);
