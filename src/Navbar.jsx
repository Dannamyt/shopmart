import heart from './assets/heart.svg'
import cart from './assets/shopping-cart.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div className='nav flex justify-between items-center p-4'>
            <h1 className='logo text-4xl font-semibold font-ibm'>ShopMart</h1>
            <ul className='nav-link flex font-semibold font-ibm gap-10'>
                <li className='nav-list'><a href="">HOME</a></li>
                <li className='nav-list'><a href="">SHOP</a></li>
                <li className='nav-list'><a href="">CONTACT</a></li>
                <li className='nav-list'><a href="">SIGN IN</a></li>
                <li className='nav-list'><a href="">SIGN UP</a></li>
            </ul>
            <div className=''>
                <div className='font-semibold font-ibm' ><p>CART</p></div>
            </div>
        </div>
        </>
    )
}
export default Navbar