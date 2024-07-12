import { useEffect,useState } from "react"

// import './react-practice/src/output.css'

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
                    <img src={wood.images[0]} alt="" />
                    <p>{wood.title}</p>
                    <p>${wood.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default Furniture