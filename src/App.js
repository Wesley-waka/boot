import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Navbar,
  Footer
} from './components'

import {
  Home,
  Cart,
  Error,
  About,
  Products,

} from './pages'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/products' element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
