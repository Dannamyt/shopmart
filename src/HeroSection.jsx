import heroImage from './assets/img1.jpg'
import arrow from './assets/arrow-right.svg'


function HeroSection ({cart}){

    return(
    <div className='hero'>
    
    <div  className="category">
       {cart.map((carts)=>
            <div key={carts.index}>
                <p>{carts.slug}</p>
            </div>
        )}
   </div>
   <div className="hero-section">
            <img src={heroImage} alt="" />
            <p className='text'>Shop Now</p>
        </div>
    </div>
)
}
export default HeroSection