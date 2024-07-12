import phone from './assets/mobile-notch.svg'
import computers from './assets/computer.svg'
import watch from './assets/watch.svg'
import camera from './assets/computer.svg'
import headphone from './assets/camera.svg'
import gaming from './assets/gamepad.svg'
import banner from  './assets/img8.jpg'



function BrowseByCategory(){
    return(
        <>
        <h1 className='browse-text'>Browse by Category</h1>
        <div className="browse">
            <div className='box'>
                <img src={phone} alt="" />
                <p>Phones</p>
            </div>
            <div className='box'>
            <img src={computers} alt="" />

                <p>Computers</p>
            </div>
            <div className='box'>
            <img src={watch} alt="" />

                <p>Wristwatch</p>
            </div>
            <div className='box'>
            <img src={camera} alt="" />

                <p>Cameras</p>
            </div>
            <div className='box'>
            <img src={headphone} alt="" />

                <p>HeadPhones</p>
            </div>
            <div className='box'>
            <img src={gaming} alt="" />

                <p>Gaming</p>
            </div>
        </div> 
        <div className="c-banner">
            <div >
                <p className='c-banner-text'>Enhnace your Fashion Experience </p>
                <button>Buy Now</button>
                </div>
            <img src={banner}alt="" className='banner' />
            </div>
        </>
    )
}
export default BrowseByCategory