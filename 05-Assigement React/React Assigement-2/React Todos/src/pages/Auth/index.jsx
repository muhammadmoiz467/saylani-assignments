import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './Login/ForgotPassowrd'


const Auth = () => {
  return (
    <>
      <Routes>
         <Route path='Login' element={<Login />} />
         <Route path='register' element={<Register />} />
         <Route path='ForgotPassword' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default Auth