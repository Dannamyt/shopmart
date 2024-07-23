import { useEffect,useState } from "react"

import { Link } from "react-router-dom"
function Furniture(){
   
    const [furniture, setFurniture] =useState([])

    useEffect(()=>{
        async function getFurniture(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setFurniture(response)
         }
         getFurniture('https://dummyjson.com/products/category/furniture')
      },[])

   
   
    return(
        <div className="c-furniture flex">
         {
                furniture.products?.map((wood)=>
               <div key={furniture.products.id} className="furniture" >
                    <Link to={`/furnitures/${wood.id}`}>
                        <img src={wood.images[0]} alt="" loading="lazy" />
                        <p>{wood.title}</p>
                    </Link>
                    <p>${wood.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default Furniture