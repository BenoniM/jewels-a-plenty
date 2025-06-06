import React from 'react'
import AccLogo from "../../assets/images/Nav/Acc-Logo.svg"
import CartLogo from "../../assets/images/Nav/Cart - Logo.svg"
import ImgDet from "../../assets/images/ShopDet/pexels-leah-newhouse-50725-5091121.jpg"
import CoverDet from "../../assets/images/ShopDet/Cover-Det.svg"
import CoverMiniB from "../../assets/images/ShopDet/Cover-Mini-B.svg"
import CoverMiniY from "../../assets/images/ShopDet/Cover-Mini-Y.svg"


const Shopdetail = () => {
  return (
    <div className='bg-tertiary-1 h-screen'>
        <div className='h-1/12 flex'>
            <nav className='z-20 py-2 px-3 fixed flex items-center gap-1 text-primary-1 text-xl'>
                <p>Am</p>
                <span className='bg-primary-1 w-0.5 h-6'></span>
                <p>En</p>
            </nav>

            <div className='w-3/3 gap-35  flex items-baseline justify-center'>
                <nav className='flex text-primary-1 text-xl gap-4'>
                    <a href="">Rings</a>
                    <a href="">Necklaces</a>
                </nav>

                <a href="" className='z-10 text-primary-1 font-odena text-4xl items-end'>Jewels -a- Plenty</a>

                <nav className='flex text-primary-1 text-xl gap-4'>
                    <a href="">Earrings</a>
                    <a href="">About</a>
                </nav>
            </div>

            <nav className='z-20 py-2 px-3 fixed right-0 flex items-center gap-1 text-primary-1 text-xl'>
                <img src={AccLogo} alt="" className='w-8'/>
                <span className='bg-primary-1 w-0.5 h-6'></span>
                <img src={CartLogo} alt="" className='w-7'/>
            </nav>
        </div>

        <div className='h-11/12 flex'>
            <div className='w-1/4 flex flex-col items-center justify-center'>
                
                <div className='relative left-5 top-12 scale-x-95 flex justify-center items-center'>
                    <div className='w-40 flex justify-center'>
                        <img src={ImgDet} alt="" className='relative left-1/2 nonagon-mini object-cover'/>
                        <img src={CoverMiniY} alt="" className='relative rotate-180 stroke-3 right-1/2 scale-x-104'/>
                    </div>
                </div>

                <div className='relative top-5 right-12 scale-x-95 flex justify-center items-center'>
                    <div className='w-40 flex justify-center'>
                        <img src={ImgDet} alt="" className='relative left-1/2 nonagon-det object-cover'/>
                        <img src={CoverMiniB} alt="" className='relative right-1/2 scale-x-104'/>
                    </div>
                </div>

                <div className='relative bottom-5 left-12 scale-x-95 flex justify-center items-center'>
                    <div className='w-40 flex justify-center'>
                        <img src={ImgDet} alt="" className='relative left-1/2 nonagon-mini object-cover'/>
                        <img src={CoverMiniY} alt="" className='relative rotate-180 right-1/2 scale-x-104'/>
                    </div>
                </div>

                <div className='relative right-5 bottom-12 scale-x-95 flex justify-center items-center'>
                    <div className='w-40 flex justify-center'>
                        <img src={ImgDet} alt="" className='relative left-1/2 nonagon-det object-cover'/>
                        <img src={CoverMiniB} alt="" className='relative right-1/2 scale-x-104'/>
                    </div>
                </div>
            
            </div>
            
            <div className='w-2/4 flex justify-center items-center'>
                <div className='w-2xl scale-x-95 flex justify-center'>
                    <img src={ImgDet} alt="" className='relative left-1/2 nonagon-det object-cover'/>
                    <img src={CoverDet} alt="" className='relative right-1/2 scale-x-104'/>
                </div>
            </div>

            <div className='bg-yellow-500 w-1/4'></div>
        </div>
    </div>
  )
}

export default Shopdetail