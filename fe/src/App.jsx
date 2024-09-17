import './App.css'
import Header from './components/shared/Header.jsx'
import About from './components/about/About.jsx'
import {Outlet} from 'react-router-dom'


function App() {
  return (
        <div className='bg-custom-body'>
        <Header/>
        <Outlet/>
        </div>
  )
}

export default App
