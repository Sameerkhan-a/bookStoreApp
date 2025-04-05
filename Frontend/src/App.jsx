import React from 'react'
import Home from './Home/Home.jsx'
import Courses from './Courses/Courses.jsx'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Sign-up.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App