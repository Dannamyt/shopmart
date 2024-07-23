import { useEffect,useState } from "react"


function HomeDecor(){
    const [homeDecor, setHomeDecor] =useState([])

    useEffect(()=>{
        async function getHomeDecor(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setHomeDecor(response)
         }
         getHomeDecor('https://dummyjson.com/products/category/home-decoration')
      },[])
    
    return(
        <div className="c-home-decor">
         {
                homeDecor.products?.map((home)=>
               <div key={homeDecor.products.id} className="home-decor" >
                    <img src={home.images[0]} alt="" loading="lazy" />
                    <p>{home.title}</p>
                    <p>${home.price}</p>
               </div>
                )
            }
        </div>
    )
}
export default HomeDecor