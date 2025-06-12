import React from 'react'
import AccLogo from "../../assets/images/ShopDet/Acc-Logo.svg"
import CartLogo from "../../assets/images/ShopDet/Cart - Logo.svg"
import CartLogoWh from "../../assets/images/ShopDet/Cart - Logo-Wh.svg"
import ImgDet from "../../assets/images/ShopDet/pexels-leah-newhouse-50725-5091121.jpg"
import CoverDet from "../../assets/images/ShopDet/Cover-Det.svg"
import CoverMiniB from "../../assets/images/ShopDet/Cover-Mini-B.svg"
import CoverMiniY from "../../assets/images/ShopDet/Cover-Mini-Y.svg"


const Shopdetail = () => {
  return (
    <div className='bg-tertiary-1 h-screen'>
        <div className='h-1/12 flex'>
            <nav className='z-20 py-2 px-3 fixed flex items-center gap-1 text-secondary-2 text-xl'>
                <p>Am</p>
                <span className='bg-secondary-2 w-0.5 h-6'></span>
                <p>En</p>
            </nav>

            <div className='w-3/3 gap-35  flex items-baseline justify-center'>
                <nav className='flex text-secondary-2 text-xl gap-4'>
                    <a href="">Rings</a>
                    <a href="">Necklaces</a>
                </nav>

                <a href="" className='z-10 text-secondary-2 font-odena text-4xl items-end'>Jewels -a- Plenty</a>

                <nav className='flex text-secondary-2 text-xl gap-4'>
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

            <div className='w-1/4 gap-10 flex flex-col justify-center text-secondary-2'>
                <div className='text-2xl relative right-30 top-4'>
                    <div className=''>Crystal Point Hexagonal Prism Stone Pendants</div>
                    <div className='font-odena'>$700.00</div>
                    <div className='w-88 h-0.5 bg-secondary-2'></div>
                </div>

                <div className='relative right-13 top-4'>
                    <div className=''>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna.</div>
                    <div className='w-93 h-0.5 bg-secondary-2'></div>
                </div>

                <div className='relative right-12 top-1 text-2xl flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className=''>Metal</div>
                        <div className='w-0.5 h-6 bg-secondary-2'></div>
                        <div className=''>Yellow Gold</div>
                    </div>

                    <div className='flex gap-1'>
                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-B.svg)]'>
                            <div className='relative top-0.25 bg-metal-yellow nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-metal-white nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-metal-rose nonagon-det w-7.5 h-7.25'></div>
                        </div>
                    </div>

                    <div className='w-74 h-0.5 bg-secondary-2'></div>
                </div>

                <div className='relative right-18 top-2 text-2xl flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className=''>Colors</div>
                        <div className='w-0.5 h-6 bg-secondary-2'></div>
                        <div className=''>Green</div>
                    </div>

                    <div className='flex gap-1'>
                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-B.svg)]'>
                            <div className='relative top-0.25 bg-emerald-700 nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-indigo-800 nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-gray-400 nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-amber-700 nonagon-det w-7.5 h-7.25'></div>
                        </div>

                        <div className='w-8 h-8 flex justify-center bg-contain bg-no-repeat bg-[url(./assets/images/ShopDet/Cover-Mini-Y.svg)]'>
                            <div className='relative top-0.25 bg-zinc-900 nonagon-det w-7.5 h-7.25'></div>
                        </div>
                    </div>
                    
                    <div className='w-74 h-0.5 bg-secondary-2'></div>
                </div>

                <div className='relative right-42 top-8 w-96 h-14 bg-secondary-2 rounded-4xl font-odena flex items-center justify-center'>
                    <p className='text-tertiary-1 text-3xl'>ADD TO CART</p>
                    <img src={CartLogoWh} alt="" className='w-7'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopdetail