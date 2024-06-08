import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Searched from './Searched'
import Recipes from './Recipes'
function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipes />} />
      </Routes> 
  )
}

export default Pages