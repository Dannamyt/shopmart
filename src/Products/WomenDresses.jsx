import { useEffect,useState } from "react"


function WomenDresses(){
   
    const [womenDress, setWomenDress] =useState([])

    useEffect(()=>{
        async function getWomenDress(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setWomenDress(response)
         }
         getWomenDress('https://dummyjson.com/products/category/womens-dresses')
      },[])

   
   
    return(
        <div className="c-womenDress flex">
         {
                womenDress.products?.map((dress)=>
               <div key={womenDress.products.id} className="womenDress" >
                    <img src={dress.images[0]} alt="" loading="lazy" />
                    <p>{dress.title}</p>
                    <p>${dress.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default WomenDresses