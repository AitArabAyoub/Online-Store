import React from 'react'
import TopHeader from './components/TopHeader'
import BottomHeader from './components/BottomHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Search from './pages/Search'

function App() {
  return (
    <>
    <TopHeader/>
    <BottomHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/category/:slug' element={<Category />} />
      <Route path='/products/:prodId' element={<Product/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App