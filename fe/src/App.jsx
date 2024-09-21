import './App.css'
import Header from './components/shared/Header/Header.jsx'
import Sidebar from './components/shared/SideBar/SideBar.jsx'
import {Outlet} from 'react-router-dom'


function App() {
  return (
        <div className='container'>
          <div className='row header-container'>
            <div className='col-sm-12'>
              <Header/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
            <Sidebar/>
            </div>
            <div className='col-md-10 col-sm-12'>
            <Outlet/>
            </div>
          </div>
        </div>
  )
}

export default App
