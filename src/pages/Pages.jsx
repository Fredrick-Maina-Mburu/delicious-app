import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Searched from './Searched'
import Recipes from './Recipes'
import { AnimatePresence } from 'framer-motion'
function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
      
  )
}

export default Pages