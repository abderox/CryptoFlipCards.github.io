import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
