import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from "./pages/Home.jsx";
import InputOrder from "./pages/InputOrder.jsx";
import AdditionalCost from "./pages/AdditionalCost.jsx";
import Receipt from "./pages/Receipt.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "inputOrder":
        return <InputOrder setCurrentPage={setCurrentPage} />;
      case "additionalCost":
        return <AdditionalCost setCurrentPage={setCurrentPage} />;
      case "receipt":
        return <Receipt setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

