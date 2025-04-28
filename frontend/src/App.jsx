import React, { useContext } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptianSignup from './pages/CaptainSignup'
import UserLogout from './pages/UserLogout'
import {Routes,Route} from 'react-router-dom'
import UserContext, { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import CaptainHome from './pages/CaptainHome'
const App = () => {

  return (
    <div>
<Routes>
   <Route path='/' element={<Start/>}/>          
   <Route path='/login' element={<UserLogin/>}/>
   <Route path='/signup' element={<UserSignup/>}/>
   <Route path='/captain-login' element={<CaptainLogin/>}/>
   <Route path='/captain-signup' element={<CaptianSignup/>}/>
   <Route path='/home' element={
    <UserProtectedWrapper>
      <Home/>
    </UserProtectedWrapper>
   }/>

  <Route path='/user/logout' element={<UserProtectedWrapper>
  <UserLogout/>
  </UserProtectedWrapper>}/>

  <Route path='/captain-home' element={<CaptainHome/>}/>
</Routes>
    </div>
  )
}

export default App