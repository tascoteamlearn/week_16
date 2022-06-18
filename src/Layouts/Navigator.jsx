import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Header from '../Components/Header'
import Home from './Home'

export default function Navigator() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' exact element={<Home />} />
        </Routes>
    </Router>
  )
}
