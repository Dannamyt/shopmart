import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function MenShirts(){
    const [shirts, setShirts] =useState([])

    useEffect(()=>{
        async function getShirts(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setShirts(response)
         }
         getShirts('https://dummyjson.com/products/category/mens-shirts')
      },[])
    return(
        <>
        <div className="flex">
             {
                    shirts.products?.map((shirt)=>
                   <div key={shirts.products.id} className="shirts" >
                        <Link to={`/mens-shirts/${shirt.id}`}>
                            <img src={shirt.images[0]} alt="" loading="lazy" />
                            <p>{shirt.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${shirt.price}</p>
                            <p className="">Add to Cart</p>
                        </div>
                   </div>
            
                    )
                }
            
            </div>
        
        </>
    )
}
export default MenShirts