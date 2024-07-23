
import img1 from './images/nwimage1.jpg'
import img2 from './images/nwimage2.jpg'
import img4 from './images/nwimage4.jpg'
import img5 from './images/nike-just-do-it.jpg'
import adidas from './images/addidas.png'
import puma from './images/puma.png'
import chanel from './images/chanel.png'
import lv from './images/lv.png'
import prada from './images/prada.png'



function HeroSection ({cart}){

    return(
    <>
        <div>
            <div className='flex  gap-8 p-4'>
                <div className='basis-1/3 flex-1'>
                    <img src={img1} className='object-contain' alt="" />
                </div>
                <div className='basis-1/3 flex-1 text-center '>
                    <img src={img4} alt="" />
                    <h1 className='text-9xl'>ULTIMATE SALE</h1>
                    <p className='tracking-wider text-2xl text-gray-400'>New Collection</p>
                    <button className='bg-black text-white py-2.5 pb-2 m-2 px-3.5 rounded'>Shop Now</button>
                    <div className='flex w-ful p-8 gap-8 justify-center'>
                <div><img src={adidas} alt="" className='w-40' /></div>
                <div><img src={lv} alt=""className='w-40'  /></div>
                <div><img src={prada} alt=""className='w-40'  /></div>
                <div><img src={chanel} alt=""className='w-40'  /></div>
                <div><img src={puma} alt=""className='w-40'  /></div>
            </div>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={img2} alt="" />
                </div>
            </div>
           
        </div>

   </>
)
}
export default HeroSection