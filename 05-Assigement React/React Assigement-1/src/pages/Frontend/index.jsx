import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Route, Routes } from 'react-router-dom'

const Frontend = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default Frontend 
