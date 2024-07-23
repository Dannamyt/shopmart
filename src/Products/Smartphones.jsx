import { useEffect,useState } from "react"


function Smartphones(){
   
    const [smartphone, setSetmartphone] =useState([])

    useEffect(()=>{
        async function getSmartphone(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setSetmartphone(response)
         }
         getSmartphone('https://dummyjson.com/products/category/smartphones')
      },[])

   
   
    return(
        <div className="c-smartphones flex">
         {
                smartphone.products?.map((phone)=>
               <div key={smartphone.products.id} className="smartphone" >
                    <img src={phone.images[0]} alt="" loading="lazy" />
                    <p>{phone.title}</p>
                    <p>${phone.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default Smartphones