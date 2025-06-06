import React from 'react'
import AccLogo from "../assets/images/Nav/Acc-Logo.svg"
import CartLogo from "../assets/images/Nav/Cart - Logo.svg"
import NonLogo from "../assets/images/Hero/Nonagon-Logo.svg"
import FootNeck from "../assets/images/Footer/Foot-Neck.svg"
import CopyRight from "../assets/images/Footer/Copy-Right.svg"
import FootRing1 from "../assets/images/Footer/Foot-Ring-1.svg"
import FootRing2 from "../assets/images/Footer/Foot-Ring-2.svg"
import FootMetal from "../assets/images/Footer/Foot-Metal.svg"


function Home() {

  return (
    <div className=''>
        <nav className='z-20 py-2 px-3 fixed flex items-center gap-1 text-primary-1 text-xl'>
          <p>Am</p>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <p>En</p>
        </nav>

        <nav className='z-20 py-2 px-3 fixed right-0 flex items-center gap-1 text-primary-1 text-xl'>
          <img src={AccLogo} alt="" className='w-8'/>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <img src={CartLogo} alt="" className='w-7'/>
        </nav>
      
      <div className=' hero flex bg-secondary-3 h-screen'>
        
        <div className='z-10 p-2 flex justify-end items-start w-1/3 h-screen border-r-2 border-3 border-primary-1 bg-cover bg-no-repeat bg-[url(./assets/images/Hero/pexels-lovetosmile-3339117.jpg)]'>

          <nav className='flex text-primary-1 text-xl gap-4'>
            <a href="">Rings</a>
            <a href="">Necklaces</a>
          </nav>
        </div>
        
        <div className='z-10 flex justify-center w-1/3 h-screen border-l-2 border-r-2 border-3 border-primary-1 bg-cover bg-no-repeat bg-[url(./assets/images/Hero/pexels-valeriya-12965.jpg)]'>
          
          <div className='relative bottom-23 flex flex-col items-center'>
            <div className='border-primary-1 border-3 rounded-full w-40 h-40'></div>
            <img src={NonLogo} alt="" className='w-15 relative bottom-2'/>
          </div>

        </div>
        
        <div className='z-10 p-2 flex items-start justify-between w-1/3 h-screen border-l-2 border-3 border-primary-1 bg-cover bg-no-repeat bg-[url(./assets/images/Hero/Hero-Earring.png)]'>

          <nav className='flex text-primary-1 text-xl gap-4'>
            <a href="">Earrings</a>
            <a href="">About</a>
          </nav>
        </div>
      </div>

      <div className='home-necklace flex flex-col items-center  bg-secondary-3 h-screen'>

        <a href="" className='z-10 text-primary-1 pt-2 font-odena text-4xl'>Jewels -a- Plenty</a>

        <main className='relative bottom-100 flex flex-col items-center justify-center'>
          <div className='border-primary-1 border-3 rounded-full w-96 h-96 scale-200'></div>
          <img src={NonLogo} alt="" className='w-xl relative top-12'/>
          <div className='flex justify-center'>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 rotate-20 relative left-71 bottom-121'></div>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 rotate-60 relative left-87 bottom-97'></div>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 rotate-100 relative left-81 bottom-59'></div>

            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 -rotate-40 relative left-49 bottom-27'></div>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 rotate-0 relative bottom-14'></div>
            <div className='bg-tertiary-1 scale-x-400   w-13 h-25 rotate-40 relative right-49 bottom-27'></div>

            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 rotate-80 relative right-81 bottom-59'></div>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25 -rotate-60 relative right-87 bottom-97'></div>
            <div className='bg-tertiary-1 scale-x-400 w-13 h-25  rotate-160 relative right-71 bottom-121'></div>
          </div>
        </main>

        <div className='flex gap-2.5 flex-col items-center w-3/3 relative bottom-109'>
          <div className='bg-primary-1 w-full h-0.5'></div>
          <div className='text-primary-1 flex gap-8 text-xl'>
            <a href="">Rings</a>
            <a href="">Necklaces</a>
            <a href="">Earrings</a>
            <a href="">About</a>
          </div>
        </div>
        
      </div>

      <div className='home-about bg-secondary-3 h-screen'>

        <div className='overflow-x-clip h-1/2 flex flex-col items-center'>
          <div className='flex flex-col items-center relative left-140 bottom-68'>
            <div className='z-10 border-primary-1 border-4 rounded-full w-96 h-96
            scale-150'></div>
            <img src={FootNeck} alt="" className='z-20 w-44 relative top-15'/>
          </div>
        </div>
        
        <div className='bg-primary-1 h-1/2 flex text-secondary-2'>

          <div className='w-1/2 flex flex-col'>
            <div className='h-9/10'>
              <div className='text-4xl flex flex-col items-end'>

                <div className='font-odena'>This Website Was Designed 
                  <span className='font-odena relative top-4 left-1'> O </span> 
                  <span className='font-odena relative top-5 left-2'> n </span> 
                  <span>Figma</span>
                </div>

                <div className='font-odena relative right-4'>And Developed 
                  <span className='font-odena relative bottom-3'> O </span> 
                  <span className='relative left-4'>React.</span>
                </div>

              </div>

              <div className='px-2 py-6 text-xl flex flex-col'>
                <p>Contacts</p>
                <a href="">+251 923 098 937</a>
                <a href="">benonimoges01@gmail.com</a>
                <a href="">Figma</a>
                <a href="">React</a>
              </div>
            </div>
            <div className='h-1/10 flex items-center gap-1 p-2'>
              <img src={CopyRight} alt="" className='w-5'/>
              <p>2025</p>
            </div>
          </div>

          <div className='overflow-x-clip w-1/2 flex flex-col'>
            <div className='h-9/10'>
                <img src={FootRing1} alt="" className='z-10 w-44 relative bottom-11 left-110'/>
                <img src={FootRing2} alt="" className='z-30 w-44 relative bottom-55 left-110'/>
                <img src={FootMetal} alt="" className='w-96 scale-175 relative bottom-64.5 left-60'/>
            </div>

            <div className='z-30 h-1/10 flex justify-end items-center p-2 gap-2'>
              <p>Privacy Policy</p>
              <span className='bg-secondary-2 w-0.5 h-4'></span>
              <p>Terms Of Service</p>
            </div>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Home
