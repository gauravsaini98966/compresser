import { useState } from 'react'

import './App.css'
import Homepage from './components/Homepage'
import Toolspage from './components/Toolspage'
import ParfectDocument from './components/ParfectDocument'
function App() {


  return (
    <div className='px-[5%]'>
      <Homepage />
      <Toolspage />
      <ParfectDocument />



    </div>
  )
}

export default App
