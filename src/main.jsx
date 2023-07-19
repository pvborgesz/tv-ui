import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectLanguage from "./pages/SelectLanguage.jsx";
import SelectProfile from "./pages/SelectProfile.jsx";
import ImportProfile from "./pages/ImportProfile.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import UserProvider from "./contexts/userContext.jsx";
import RadioDifusor from "./pages/RadioDifusor.jsx";
import RadioDifusorSec from "./pages/RadioDifusorSec.jsx";
import RadioDifusorSecL2 from "./pages/RadioDifusorSecL2.jsx";
import AppCatUI from "./pages/AppCatUI.jsx";
import DiscoverChannels from "./pages/DiscoverChannels.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "selectLanguage",
        element: <SelectLanguage />,
      },
      {
        path: "selectProfile",
        element: <SelectProfile />,
      },
      {
        path: "createProfile",
        element: <CreateProfile />,
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
        path: "importProfile",
        element: <ImportProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
