// eslint-disable-next-line no-unused-vars
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SelectLanguage from './pages/SelectLanguage'
import './App.css'
import SelectProfile from './pages/SelectProfile'
import CreateProfile from './pages/CreateProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectLanguage />} />
        <Route path="/selectProfile" element={<SelectProfile />} />
        <Route path="/createProfile" element={<CreateProfile />} />
      </Routes>
    </Router >
  )
}

export default App
