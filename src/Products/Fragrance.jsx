import { useEffect,useState } from "react"
function Fragrance (){
    
    const [fragrance, setFragrance] =useState([])

    
    useEffect(()=>{
        async function getFragrance(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setFragrance(response)
         }
         getFragrance('https://dummyjson.com/products/category/fragrances')
      },[])

   
   
   
   
    return(
        <div className="c-fragrance">
         {
                fragrance.products?.map((perf)=>
               <div key={fragrance.products.id} className="fragrance" >
                    <img src={perf.images[0]} alt="" loading="lazy" />
                    <p>{perf.title}</p>
                    <p>${perf.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default Fragrance