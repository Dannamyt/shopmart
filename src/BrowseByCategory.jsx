import phone from './assets/mobile-notch.svg'
import computers from './assets/computer.svg'
import furniture from './assets/couch.svg'
import grocery from './assets/grocery-basket.svg'
import shoe from './assets/shoe-prints.svg'
import fragrance from './assets/air-freshener.svg'
import promoad from  './images/promoad.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FeaturedProducts from './FeaturedProducts.jsx'
import CategoryList from './CategoryList.jsx'


function BrowseByCategory(){
    return(
        <>
        {/* <h1 className='browse-text'>Browse by Category</h1>
        <div className="browse">
            <div className='box'>
                <img src={phone} alt="" />
                <p><Link to={"smartphones"}>Phones</Link></p>
            </div>
            <div className='box'>
                <img src={computers} alt="" />
                    <p><Link to={"laptops"}>Laptops</Link></p>
            </div>

            <div className='box'>
            <img src={grocery} alt="" />
                <p><Link to={'groceries'}>Groceries</Link></p>
            </div>

            <div className='box'>
            <img src={furniture} alt="" />
                <p><Link to={'furnitures'}>Furnitures</Link></p>
            </div>

            <div className='box'>
            <img src={fragrance} alt="" />
                <p><Link to={'fragrance'}>Fragrance</Link></p>
            </div>

            <div className='box'>
            <img src={shoe} alt="" />
                <p><Link to={'men-shoes'}>Men's Shoes</Link></p>
            </div>

        </div>  */}
        <CategoryList/>
        <div className="c-banner relative ">
            <div className='background flex flex-col items-center justify-center w-full h-80 bg-center bg-cover  bg-no-repeat  ' >
                <p className='text-4xl font-bold pt-24  font-ibm text-white pb-6'>Enhance your Fashion Experience </p>
                <p className='text-white '>We strive to revolutionize the fashion industry by combining cutting-edge design with ethical practices, delivering exceptional clothing that celebrates diversity and empowers self-expression.</p>
                <button className='text-2xl font-ibm font-semibold px-16 py-4 rounded-md bg-white'>Buy Now</button>
            </div>
            <div className="absolute z-50 inset-0 bg-black opacity-10"></div>

        </div>
            <FeaturedProducts  />

        </>
    )
}
export default BrowseByCategory