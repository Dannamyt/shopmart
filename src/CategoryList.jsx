import { useEffect, useState } from "react";
import menshoes from './images/sneakers.jpg'
import menshirts from './images/MenShirts.jpg'
import womenshoes from './images/WShoes.jpg'
import glasses from './images/glasses.jpg'
import womendress from './images/women-dresses.jpg'
import wristwatches from './images/wristwatches.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CategoryList(){
    
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1000,
            cssEase: "linear",
          responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        };
   

const Contents = [
    {
        imgSrc:glasses,
        title:'Sunglasses',
        itemLink:'sunglasses',
    },
    {
        imgSrc:wristwatches,
        title:'Wristwatches',
        itemLink:'wristwatches',
    },
    {
        imgSrc:menshirts,
        title:'Men Shirts',
        itemLink:'men-shirts',
    },
    {
        imgSrc:womendress,
        title:'Women Dresses',
        itemLink:'women-dresses',
    },
    {
        imgSrc:menshoes,
        title:'Men Shoes',
        itemLink:'men-shoes',
    },
    {
        imgSrc:womenshoes,
        title:'Women Shoes',
        itemLink:'women-shoes',
    },
    
]


    return(
        <>
      
            <div className="slide-container">
            <Slider {...settings}>
                
                        {Contents.map((items,index) =>
                           <>
                            <div key={index}>
                                <Link to={items.itemLink}>
                                    <div className="flex flex-col  items-center">
                                        <div className="flex justify-center items-center w-96 m-4"><img src={items.imgSrc} alt="" /></div>
                                            <div className="flex flex-col">
                                                <p className="text-3xl font-bold font-ibm ml-6 ">{items.title}</p>
                                                <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10" >Shop Now</p>
                                            </div>
                                        </div>
                                </Link> 
                            </div>
                           </>    
                        )}
            </Slider>
           </div>
        </>
                    /* <div className="flex flex-col justify-center gap-10">
                        <div className="basis-1/6 h-auto bg-gray-100 rounded-xl">
                            <div className=" w-96  "><img src={glasses} alt=""   /></div>
                            <div className="p-4">
                                <p><Link to={'laptops'} className="text-3xl font-bold font-ibm ">SunGlasses</Link></p>
                                <p className="text-1xl font-bold font-ibm  ">Shop Now</p>
                            </div>
                        </div>
                        <div  className="basis-1/6">
                            <div  className=" w-96 m-4"><img src={wristwatches}alt="" className="w-full"  /></div>
                            <p><Link to={'smartphones'} className="text-3xl font-bold font-ibm ml-6 ">WristWatches</Link></p>
                            <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10">Shop Now</p>
                        </div>
                        <div  className="basis-1/6">
                            <div  className=" w-96 m-4"><img src={menshirts} alt="" /></div>
                            <p className="text-3xl font-bold font-ibm ml-6 ">Men Shirts</p>
                            <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10">Shop Now</p>
                        </div>
                        <div  className="basis-1/6">
                            <div  className=" w-96 m-4"><img src={womendress}alt="" /></div>
                            <p className="text-3xl font-bold font-ibm ml-6 "><Link to={'women-dresses'}>Women Dresses</Link></p>
                            <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10">Shop Now</p>
                        </div>
                        <div  className="basis-1/6">
                            <div  className=" w-96 m-4"><img src={menshoes} alt="" /></div>
                            <p className="text-3xl font-bold font-ibm ml-6 "><Link to={'men-shoes'}>Men Shoes</Link></p>
                            <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10">Shop Now</p>
                        </div>
                        <div  className="basis-1/6">
                            <div  className=" w-96 m-4"><img src={womenshoes} alt="" /></div>
                            <p className="text-3xl font-bold font-ibm ml-6 ">Women Shoes</p>
                            <p className="text-1xl font-bold font-ibm ml-6 mt-2 pb-10">Shop Now</p>
                        </div>
                
                    </div> */
    )
}
export default CategoryList

