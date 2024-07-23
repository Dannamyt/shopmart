import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

function Laptops(){
   
    const [laptops, setLaptops] =useState([])
    const [products, setProducts] =useState([])

    useEffect(()=>{
        async function getLaptops(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setLaptops(response)
         }
         getLaptops('https://dummyjson.com/products/category/laptops')
      },[])

//    useEffect(()=>{
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then();
//    },[])
   
    return(
        <>
            <div className="c-laptops flex">
             {
                    laptops.products?.map((laptop)=>
                   <div key={laptops.products.id} className="laptops" >
                        <Link to={`/laptops/${laptop.id}`}>
                            <img src={laptop.images[0]} alt="" loading="lazy" />
                            <p>{laptop.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${laptop.price}</p>
                            <p className="">Add to Cart</p>
                        </div>
                   </div>
            
                    )
                }
            
            </div>
        
        </>
    )
}
export default Laptops