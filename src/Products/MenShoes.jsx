import { useEffect,useState } from "react"


function MenShoes(){
   
    const [menShoe, setMenShoe] =useState([])

    useEffect(()=>{
        async function getMenShoe(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setMenShoe(response)
         }
         getMenShoe('https://dummyjson.com/products/category/mens-shoes')
      },[])
   
   
    return(
        <div className="c-menShoe flex">
         {
                menShoe.products?.map((shoe)=>
               <div key={menShoe.products.id} className="menShoe" >
                    <img src={shoe.images[1]} alt="" loading="lazy" />
                    <p>{shoe.title}</p>
                    <p>${shoe.price}</p>
                    <p className="add-to-cart">Add To Cart</p>
               </div>
                )
            }
        </div>
    )
}
export default MenShoes