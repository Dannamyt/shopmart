import { useState,useEffect, lazy } from "react"

import { Link } from "react-router-dom"
const Furniture = lazy(() =>import ("./Furniture"))

function Beauty({cart}){
    
    const [beauty, setBeauty] =useState([])
    
    useEffect(()=>{
        async function getBeauty(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response.products.title)
          setBeauty(response)
         }
         getBeauty('https://dummyjson.com/products/category/beauty')
      },[])
   
    
    return(
        <>
        
        <div className="beauty-products flex">
            {
                beauty.products?.map((cream,index)=>
               <div key={beauty.products.id}  >
                    <Link to={`/beauty/${cream.id}`}>
                        <img src={cream.images} alt="" loading="lazy" />
                        <p>{cream.title}</p>
                    </Link>
                    <div className="flex justify-between">
                        <p>${cream.price}</p>
                        <p>Add to Cart</p>
                    </div>
               </div>
                )
                
            }
           
        </div>
        </>
    )
}
export default Beauty