import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/pages/Home'
import OurServices from './Components/pages/ourservices'
import Contact from './Components/pages/contact'
import FAQ from './Components/pages/ourservices'

function App() {

  return (
    <>
      <Nav />
      <Routes>

        <Route path='/Home' element={<Home />} />
        <Route path='/Ourservices' element={<OurServices />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
    </>
  )
}

export default App
