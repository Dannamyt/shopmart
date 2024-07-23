import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function MenWatches(){
    const [watches,setWatches] = useState([])

    useEffect(()=>{
        async function getWatch(url){
          let data = await fetch(url)
          const response = await data.json()
          console.log(response)
          setWatches(response)
         }
        getWatch('https://dummyjson.com/products/category/mens-watches')
      },[])
    return(
        <>
        <div className=" flex">
             {
                    watches.products?.map((watch)=>
                   <div key={watches.products.id} className="watches" >
                        <Link to={`/mens-watches/${watch.id}`}>
                            <img src={watch.images[0]} alt="" loading="lazy" />
                            <p>{watch.title}</p>
                        </Link>
                        <div className="flex">
                            <p>${watch.price}</p>
                            <p className="">Add to Cart</p>
                        </div>
                   </div>
            
                    )
                }
            
            </div>
        </>
    )
}
export default MenWatches