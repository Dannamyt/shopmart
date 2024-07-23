import { useEffect,useState } from 'react'
import product1 from './images/product1.jpg'
import product2 from './images/product2.jpg'
import product3 from './images/product3.jpg'

function FeaturedProducts(){

const[featuredProducts,setFeaturedProducts]= useState([])

function fetchProductsFromCategories(){
    const desiredCategories = ['womens-dresses','mens-shoes','mens-shirts','womens-shoes']
    const promises = desiredCategories.map(category=>
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res=>res.json())
        .catch(error => {
            console.error('Error fetching products for category',category,error);
        })
    )
        return Promise.all(promises)
        .then(categoryProducts => categoryProducts.flat())
        .catch(error =>{
            console.error('Error fetching products',error);
        })
}

        useEffect(()=>{
            fetchProductsFromCategories()
            .then(products =>{
                const shuffledProducts = products.sort(()=> Math.random()-0.5)
                const maxFeatured = 5
                const featuredProducts = shuffledProducts.slice(0,maxFeatured)
                setFeaturedProducts(featuredProducts)
                console.log(featuredProducts)
            })
        },[])

    return(
    <>
    <div className='pt-16'>
        <h2 className='text-3xl font-ibm font-semibold'>Featured Products</h2>
        <div className='flex justify-center'>
            {featuredProducts.map((newpro) =>
            <>
            <div  className='basis-1/4' >
                <div key={newpro.products.id}>
                    <div className='w-96'><img src={newpro.products[0].images[0]} alt="" className='' /></div>
                    <p className='text-1xl font-ibm font-medium'>{newpro.products[0].title}</p>
                </div>
            </div>
            </>
            )}
        </div>
    </div>
    
    </>
)


    
}
export default FeaturedProducts

export function Products({title,info,img,price,review,}){
    return(
        <>
        <div>
            <div><img src={img} alt="" className="w-full" /></div>
            <div>
                <div>
                    <p className="text-black font-bold">{title}</p>
                    <p className="text-sm">${price}</p>
                </div>
                <div>{review}</div>
                <button className='bg-black text-white py-2.5 pb-2 m-2 px-3.5 rounded'>
                    Add to Cart
                 </button>
            </div>
        </div>
        </>
    )
}