import './App.css'

import { Outlet, Link } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'

function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />{

      }
    
    </>
  )
}

export default App
