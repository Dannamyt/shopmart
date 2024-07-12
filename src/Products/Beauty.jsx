import { useState,useEffect } from "react"

function Beauty({cart}){
    
    const [beauty, setBeauty] =useState([])
    
    useEffect(()=>{
        async function getBeauty(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setBeauty(response)
         }
         getBeauty('https://dummyjson.com/products/category/beauty')
      },[])
   
    
    return(
        <>
        
        <div className="beauty-products">
            {
                beauty.products?.map((cream)=>
               <div key={beauty.products.id} >
                    <img src={cream.images} alt="" />
                    <p>{cream.title}</p>
                    <p>${cream.price}</p>
               </div>
                )
            }
           
        </div>
        </>
    )
}
export default Beauty