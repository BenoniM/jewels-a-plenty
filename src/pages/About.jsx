import React from 'react'
import AccLogo from "../assets/images/ShopDet/Acc-Logo.svg"
import CartLogo from "../assets/images/ShopDet/Cart - Logo.svg"

const About = () => {
  return (
    <div>
        <div className='h-1/12 flex'>
            <nav className='z-20 py-2 px-3 fixed flex items-center gap-1 text-secondary-2 text-xl'>
                <p>Am</p>
                <span className='bg-secondary-2 w-0.5 h-6'></span>
                <p>En</p>
            </nav>

            <div className='w-3/3 gap-35  flex items-baseline justify-center'>
                <nav className='z-10 flex text-secondary-2 text-xl gap-4'>
                    <a href="">Rings</a>
                    <a href="">Necklaces</a>
                </nav>

                <a href="" className='z-10 text-secondary-2 font-odena text-4xl items-end'>Jewels -a- Plenty</a>

                <nav className='z-10 flex text-secondary-2 text-xl gap-4'>
                    <a href="">Earrings</a>
                    <a href="">About</a>
                </nav>
            </div>

            <nav className='z-20 py-2 px-3 fixed right-0 flex items-center gap-1 text-secondary-2 text-xl'>
                <img src={AccLogo} alt="" className='w-8'/>
                <span className='bg-secondary-2 w-0.5 h-6'></span>
                <img src={CartLogo} alt="" className='w-7'/>
            </nav>
        </div>

        <div className='bg-tertiary-1 h-screen w-full flex fixed bottom-0'>
            <div className='bg-secondary-2 w-1/2'></div>
            <div className='bg-primary-1 w-1/2'></div>
        </div>
    </div>
  )
}

export default About