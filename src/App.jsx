import { lazy, Suspense, useEffect, useState } from 'react'
import Beauty from './Products/Beauty.jsx'
import Fragrance from './Products/Fragrance.jsx'
import Furniture from './Products/Furniture.jsx'
import Groceries from './Products/Groceries.jsx'
import HomeDecor from './Products/HomeDecor.jsx'
import Smartphones from './Products/Smartphones.jsx'
import WomenDresses from './Products/WomenDresses.jsx'
import MenShoes from './Products/MenShoes.jsx'
import MainLayout from './MainLayout.jsx'
import {Route,Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails.jsx'
import MenShirts from './Products/MenShirts.jsx'
import Sunglasses from './Products/Sunglasses.jsx'
import Navbar from './Navbar.jsx'
import Loading from './Loading.jsx'

const Laptops = lazy(()=> delayForDemo(import('./Products/Laptops.jsx')))

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<MainLayout/>} />
        <Route path='beauty' element={<Beauty/>} />
        <Route path='fragrance' element={<Fragrance/>} />
        <Route path='furnitures' element={<Furniture/>} />
        <Route path='groceries' element={<Groceries/>} />
        <Route path='homeDecor' element={<HomeDecor/>} />
        <Route path='laptops' element={
              <Suspense fallback={<Loading/>}>
              <Laptops/>
              </Suspense>
            } />
        <Route path='sunglasses' element={<Sunglasses/>} />
        <Route path='/sunglasses/:id' element={<ProductDetails />} />
        <Route path='women-dresses' element={<WomenDresses/>} />
        <Route path='men-shirts' element={<MenShirts/>} />
        <Route path='men-shoes' element={<MenShoes/>} />
        <Route path='/beauty/:id' element={<ProductDetails />} />
        <Route path='/laptops/:id' element={<ProductDetails />} />
        <Route path='/furnitures/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
