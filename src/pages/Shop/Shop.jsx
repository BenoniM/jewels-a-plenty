import React from 'react'
import AccLogo from "../../assets/images/Nav/Acc-Logo.svg"
import CartLogo from "../../assets/images/Nav/Cart - Logo.svg"
import ShopLogo from "../../assets/images/Shop/Shop-Logo.svg"
import NeckSml from "../../assets/images/Shop/Neck-Sml.svg"
import Scroll from "../../assets/images/Shop/Scroll.svg"
import CopyRight from "../../assets/images/Footer/Copy-Right.svg"


const Shop = () => {
  return (
    <div className='bg-primary-1 h-auto'>
        <div className='bg-cover bg-no-repeat bg-[url(./assets/images/Shop/Shop-Neck-Bg.png)] h-screen'>
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
            <div className='h-11/12 flex justify-center items-baseline'>
                <p className='font-odena text-primary-1 text-7xl relative bottom-80 left-100'>Plenty</p>
                <p className='font-odena text-secondary-3 text-7xl relative bottom-68 left-132'>O</p>
                <img src={ShopLogo} alt="" className='w-5xl relative left-20'/>
                <p className='font-odena text-primary-1 text-7xl relative bottom-42 right-115'>F</p>
                <p className='font-odena text-secondary-3 text-7xl relative bottom-30 right-88'>Necklaces</p>
            </div>
        </div>

        <div className='bg-primary-1 h-96 flex'>
            <div className='w-1/6'>
                <div className='h-11/12 flex justify-center items-baseline'>
                    <p className='text-secondary-2 text-3xl font-odena flex'>Necklace</p>
                    <img src={NeckSml} alt="" className='w-12 relative top-12 right-2'/>
                </div>

                <div className='h-1/12 flex items-center gap-1 p-2'>
                    <img src={CopyRight} alt="" className='w-5'/>
                    <p>2025</p>
                </div>
            </div>

            <div className='w-5/6 flex flex-col'>
                <div className='h-10/12 flex overflow-x-clip'>
                    <div className='relative right-5 bottom-10 scale-175 flex h-56 w-1/3'>
                        <div className='relative z-10 rotate-z-6 left-40 top-2 bg-tertiary-1 rounded-2xl drop-shadow-xl w-1/3'></div>

                        <div className='bg-tertiary-1 rounded-2xl z-20 drop-shadow-xl w-1/3'></div>

                        <div className='relative rounded-2xl right-25 top-4 bg-tertiary-1 rotate-z-12 drop-shadow-xl w-1/3'></div>
                    </div>

                    <div className='relative right-5 bottom-10 scale-175 flex h-56 w-1/3'>
                        <div className='relative z-10 rotate-z-6 left-40 top-2 bg-tertiary-1 rounded-2xl drop-shadow-xl w-1/3'></div>

                        <div className='bg-tertiary-1 rounded-2xl z-20 drop-shadow-xl w-1/3'></div>

                        <div className='relative rounded-2xl right-25 top-4 bg-tertiary-1 rotate-z-12 drop-shadow-xl w-1/3'></div>
                    </div>

                    <div className='relative right-5 bottom-10 scale-175 flex h-56 w-1/3'>
                        <div className='relative z-10 rotate-z-6 left-40 top-2 bg-tertiary-1 rounded-2xl drop-shadow-xl w-1/3'></div>

                        <div className='bg-tertiary-1 rounded-2xl z-20 drop-shadow-xl w-1/3'></div>

                        <div className='relative rounded-2xl right-25 top-4 bg-tertiary-1 rotate-z-12 drop-shadow-xl w-1/3'></div>
                    </div>          
                </div>

                <div className='h-1/12 flex items-center justify-center'>
                    <img src={Scroll} alt="" className='w-7 relative left-10'/>
                    <div className='w-xl h-1 bg-secondary-2'></div>
                </div>

                <div className='h-1/12 flex justify-end items-center p-2 gap-2'>
                    <p>Privacy Policy</p>
                    <span className='bg-secondary-2 w-0.5 h-4'></span>
                    <p>Terms Of Service</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Shop