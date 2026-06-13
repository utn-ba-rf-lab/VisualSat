import { useState } from 'react'
import './App.css'
import HomePage from './components/Pages/HomePage/HomePage'
import SatellitesPage from './components/Pages/SatellitesPage/SatellitesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      <SatellitesPage/>
    </>
  )
}

export default App
