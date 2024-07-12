import heart from './assets/heart.svg'
import cart from './assets/shopping-cart.svg'



function Navbar(){
    return(
        <>
        <div className='nav'>
            <h1 className='logo'>ShopSyDee</h1>
            <ul className='nav-link'>
                <li className='nav-list'><a href="">Home</a></li>
                <li className='nav-list'><a href="">Contact</a></li>
                <li className='nav-list'><a href="">About</a></li>
                <li className='nav-list'><a href="">SignUp</a></li>
            </ul>
            <div className='icons'>
                <input type="search" name="" id="" />
                <img src={heart} alt="" />
                <img src={cart} alt="" />
            </div>
        </div>
        </>
    )
}
export default Navbar