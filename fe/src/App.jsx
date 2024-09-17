import './App.css'
import Header from './components/shared/Header/Header.jsx'
import Sidebar from './components/shared/SideBar/SideBar.jsx'
import {Outlet} from 'react-router-dom'


function App() {
  return (
        <div className='container bg-custom-body'>
        <Header/>
        <Sidebar/>
        <Outlet/>
        </div>
  )
}

export default App
