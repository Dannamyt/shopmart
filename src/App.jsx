import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import BrowseByCategory from './BrowseByCategory.jsx'
import Beauty from './Products/Beauty.jsx'
import Fragrance from './Products/Fragrance.jsx'
import Furniture from './Products/Furniture.jsx'
import Groceries from './Products/Groceries.jsx'
import HomeDecor from './Products/HomeDecor.jsx'
import './App.css'
import './output.css'

function App() {
const[cart,setCart] = useState([])
 
useEffect(()=>{
  async function getCart(url){
    let data = await fetch(url)
    const response = await data.json()
    console.log(response)
    setCart(response)
   }
   getCart('https://dummyjson.com/products/categories')
},[])

 console.log(2)
  return (
    <>
      <div className='App'>

       <Navbar/>
       <HeroSection cart={cart}/>
       <BrowseByCategory/>
       <Beauty cart={cart}/>
       <Fragrance cart={cart}/>
       <Furniture/>
       <Groceries/>
       <HomeDecor/>

      </div>
    
    </>
  )
}

export default App
