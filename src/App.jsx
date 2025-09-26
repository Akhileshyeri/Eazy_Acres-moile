import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Homepage from './Components/Homepage'
import Footer from './Components/Footer'
import Search from './Components/Search'
import Profile from './Components/Profile'
import Myprofile from './Components/Myprofile'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast'
import Listing from './Components/Listing'

function App() {


  return (
    <>
     <Toaster />
      <Routes>
       
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/footer' element={<Footer />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/myprofile' element={<Myprofile />} />
           <Route exact path='/login' element={<Login />} />
            <Route exact path='/listing' element={<Listing />} />
      </Routes>

    </>
  )
}

export default App
