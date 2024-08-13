import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './component/Cards';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hi from './component/Hi';
import HR from './component/HR';
import Marketing from './component/Marketing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/ds" element={<Hi/>} />
        <Route path="/hr" element={<HR/>} />
        <Route path="/marketing" element={<Marketing/>} />
        
      </Routes>
    </Router>
  )
}

export default App
