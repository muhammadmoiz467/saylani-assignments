import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'

function IndexRoutes() {
  return (
    <>
      <Routes>
         <Route path='/*' element={<Frontend />} />
         <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </>
  )
}

export default IndexRoutes