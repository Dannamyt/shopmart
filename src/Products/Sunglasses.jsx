import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function MenShirts(){
    const [sunglasses, setSunglasses] =useState([])

    useEffect(()=>{
        async function getSunglasses(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setSunglasses(response)
         }
         getSunglasses('https://dummyjson.com/products/category/sunglasses')
      },[])
    return(
        <>
        <div className="flex">
             {
                    sunglasses.products?.map((sunglass)=>
                   <div key={sunglasses.products.id} className="sunglasses" >
                        <Link to={`/sunglasses/${sunglass.id}`}>
                            <img src={sunglass.images[0]} alt="" loading="lazy" />
                            <p>{sunglass.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${sunglass.price}</p>
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