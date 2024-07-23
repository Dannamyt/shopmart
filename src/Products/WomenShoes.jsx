import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function WomenShoes(){
    
    const [shoes,setShoes] = useState([])
    
    useEffect(()=>{
        async function getShoes(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setShoes(response)
         }
         getShoes('https://dummyjson.com/products/category/womens-shoes')
      },[])   
    
    return(
        <>
         <div className=" flex">
             {
                    shoes.products?.map((shoe)=>
                   <div key={shoes.products.id} className="shoes" >
                        <Link to={`/women-shoes/${shoe.id}`}>
                            <img src={shoe.images[0]} alt="" loading="lazy" />
                            <p>{shoe.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${shoe.price}</p>
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