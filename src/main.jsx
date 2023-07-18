import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectLanguage from "./pages/SelectLanguage.jsx";
import SelectProfile from "./pages/SelectProfile.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import UserProvider from "./contexts/userContext.jsx";

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
