import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Header from '../Components/Header'
import Home from './Home'

export default function Navigator() {

    const [parentDataTest, setParentData] = useState({nama:"Raeza", age:23})
    const handleReceiveData=(e)=>{
        console.log(e)
    }

  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' exact element={<Home parentData={parentDataTest} sendParentData={handleReceiveData} />} />
        </Routes>
    </Router>
  )
}
