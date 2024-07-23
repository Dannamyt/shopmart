import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import BrowseByCategory from './BrowseByCategory.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout(){
    return(
        <>
            {/* <Navbar/> */}
            <HeroSection />
            <BrowseByCategory/>
            <Outlet/>
        </>
    )
}
export default MainLayout