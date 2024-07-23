import { useEffect,useState } from "react"
function Groceries(){
    const [grocery, setGrocery] =useState([])

    useEffect(()=>{
        async function getGrocery(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setGrocery(response)
         }
         getGrocery('https://dummyjson.com/products/category/groceries')
      },[])

   
   
   
   
    return(
        <div className="c-groceries">
             {
                grocery.products?.slice(4).map((cereal)=>
               <div key={grocery.products.id} className="groceries" >
                    <img src={cereal.images[0]} alt="" loading="lazy" />
                    <p>{cereal.title}</p>
                    <p>${cereal.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default Groceries