import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Summit from './pages/Summit'
import MasterClasses from './pages/MasterClasses'

function App() {
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path="/yora-summit" element={<Summit />} />
             <Route path='/masterclasses' element={<MasterClasses />} />
    </Routes>
  )
}

export default App
