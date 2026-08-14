import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer/Footer'
import HomePage from './components/Pages/HomePage/HomePage'
import Header from "./components/Home/Header/Header";
import SatellitesAllImages from "./components/Pages/SatellitesAllImages/SatellitesAllImages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import PasadasPage from "./components/Pages/PasadasPage/PasadasPage"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> // Página principal
        <Route path="/sat/:satellitename" element={<SatellitesAllImages/>}/> // Informacion Satelite
        <Route path="/pasadas" element={<PasadasPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
