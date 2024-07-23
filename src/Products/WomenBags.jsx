import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function WomenShoes(){
    
    const [bags,setBags] = useState([])
    
    useEffect(()=>{
        async function getBags(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setBags(response)
         }
         getBags('https://dummyjson.com/products/category/womens-bags')
      },[])   
    
    return(
        <>
         <div className=" flex">
             {
                    bags.products?.map((bag)=>
                   <div key={bags.products.id} className="bags" >
                        <Link to={`/women-bags/${bag.id}`}>
                            <img src={bag.images[0]} alt="" loading="lazy" />
                            <p>{bag.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${bag.price}</p>
                            <p className="">Add to Cart</p>
                        </div>
                   </div>
            
                    )
                }
            </div>
        </>
    )
}
export default WomenShoes