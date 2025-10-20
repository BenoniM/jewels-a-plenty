import React from 'react'
import AccLogo from "../../assets/images/ShopDet/Acc-Logo.svg"
import CartLogo from "../../assets/images/ShopDet/Cart - Logo.svg"
import LogNon from "../../assets/images/Login/Log-Non.svg"
import AccWhite from "../../assets/images/Login/Acc-Logo-White.svg"

const Login = () => {
  return (
    <div className='bg-tertiary-1 overflow-hidden'>
        <nav className='z-10 h-1/12 fixed flex'>
            <nav className='z-20 py-2 px-3 fixed flex items-center gap-1 text-secondary-2 text-xl'>
                <p>Am</p>
                <span className='bg-secondary-2 w-0.5 h-6'></span>
                <p>En</p>
            </nav>

            <nav className='w-3/3 gap-35 fixed  flex items-baseline justify-center'>
                <nav className='z-10 flex text-secondary-2 text-xl gap-4'>
                    <a href="">Rings</a>
                    <a href="">Necklaces</a>
                </nav>

                <a href="" className='z-10 text-secondary-2 font-odena text-4xl items-end'>Jewels -a- Plenty</a>

                <nav className='z-10 flex text-secondary-2 text-xl gap-4'>
                    <a href="">Earrings</a>
                    <a href="">About</a>
                </nav>
            </nav>

            <nav className='z-20 py-2 px-3 fixed right-0 flex items-center gap-1 text-secondary-2 text-xl'>
                <img src={AccLogo} alt="" className='w-8'/>
                <span className='bg-secondary-2 w-0.5 h-6'></span>
                <img src={CartLogo} alt="" className='w-7'/>
            </nav>
        </nav>

        <main className='flex h-screen w-[200vw]  overflow-y-clip'>
            <div className=' w-1/8 overflow-clip'><img src={LogNon} alt="" className='rotate-45 scale-210 relative top-135 right-55'/></div>
            
            <div className=' w-2/8 flex justify-center items-center'>
                <div className=' h-80 w-full flex flex-col justify-evenly items-center text-secondary-2'>
                    <div className='text-4xl'>LOGIN</div>
                    <div className='text-xl w-96 border-secondary-2 border-b-2'>USER NAME</div>
                    <div className='text-xl w-96 border-secondary-2 border-b-2'>PASSWORD</div>
                    <div className='text-tertiary-1 bg-secondary-2 flex justify-center items-center text-xl w-40 h-12 rounded-4xl'>
                        <p className='relative left-5'>LOGIN</p>  
                        <img src={AccWhite} alt="" className='w-9 relative left-10' />
                    </div>
                </div>
            </div>
            
            <div className=' w-2/8 text-white'>
                <img src={LogNon} alt="" className=' relative bottom-12'/>
                <div className='relative bottom-190  w-full h-full flex'>
                    <div className=' w-1/2 flex items-center'>
                        <p className='font-odena text-5xl text-secondary-2 relative left-20'>Sign-Up</p>
                    </div>
                    <div className=' w-1/2 flex items-center'>
                        <p className='font-odena text-5xl text-secondary-2 relative left-20'>Login</p>
                    </div>
                </div>
                {/* 
                <p>Login</p> */}
            </div>
            
            <div className=' w-2/8 flex justify-center items-center'>
                <div className=' h-80 w-full flex flex-col justify-evenly items-center text-secondary-2'>
                    <div className='text-4xl'>SIGN UP</div>
                    <div className='text-xl w-96 border-secondary-2 border-b-2'>USER NAME</div>
                    <div className='text-xl w-96 border-secondary-2 border-b-2'>EMAIL</div>
                    <div className='text-xl w-96 border-secondary-2 border-b-2'>PASSWORD</div>
                    <div className='text-tertiary-1 bg-secondary-2 flex justify-center items-center text-xl w-40 h-12 rounded-4xl'>
                        <p className='relative left-5'>SIGN UP</p>  
                        <img src={AccWhite} alt="" className='w-9 relative left-9' />
                    </div>
                </div>
            </div>
            
            <div className=' w-1/8 overflow-clip'><img src={LogNon} alt="" className='-rotate-45 scale-210 relative top-135 left-55'/></div>
        </main>
    </div>
  )
}

export default Login