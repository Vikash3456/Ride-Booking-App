import React, { useContext } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptianSignup from './pages/CaptainSignup'
import {Routes,Route} from 'react-router-dom'
import UserContext, { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
const App = () => {

  return (
    <div>
<Routes>
   <Route path='/' element={<Start/>}/>          
   <Route path='/login' element={<UserLogin/>}/>
   <Route path='/signup' element={<UserSignup/>}/>
   <Route path='/captain-login' element={<CaptainLogin/>}/>
   <Route path='/captain-signup' element={<CaptianSignup/>}/>
   <Route path='/home' element={<Home/>}/>
</Routes>
    </div>
  )
}

export default App