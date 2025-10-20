import React from 'react'
import AccLogo from "../assets/images/ShopDet/Acc-Logo.svg"
import CartLogo from "../assets/images/ShopDet/Cart - Logo.svg"
import CopyRight from "../assets/images/About/Copy-Right-Y.svg"

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
            <div className='bg-secondary-2 w-1/2'>
                <div className='bg-tertiary-1 w-96 h-96 scale-275 relative bottom-85 left-75 border-primary-1 border-3 rounded-full'></div>
                <div className='z-10 nonagon-mini relative left-11/12 bottom-32 rotate-180 w-20 h-20 bg-primary-1'></div>
            </div>

            <div className='bg-primary-1 w-1/2'>
                <div className='bg-tertiary-1 w-96 h-96 scale-275 relative top-155 left-25 border-secondary-2 border-3 rounded-full'></div>
                <div className='nonagon-mini relative right-5 bottom-17 w-20 h-20 bg-secondary-2'></div>
            </div>
        </div>

        <div className='text-secondary-2 relative left-25 top-5 w-xl'>
            <div className='font-odena text-7xl'>OUR STORY</div>
            <div className='h-40 relative left-25 text-center text-sm/7'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia est molestias magni explicabo, neque quas voluptas velit amet hic expedita? Incidunt facere ullam id, quisquam unde commodi, possimus reprehenderit dolorem veniam enim, rem ipsum? Modi eos labore similique eius. Inventore praesentium veniam delectus aliquid iste perspiciatis ea aut autem tenetur eveniet quia eos molestiae animi, voluptatem omnis architecto eius corrupti blanditiis explicabo alias fugit. Enim, quaerat obcaecati sequi exercitationem iure fugiat delectus eius quas quod!
            </div>
        </div>

        <div className='relative top-30 flex flex-col gap-5'>
            <div className='relative right-42 text-4xl text-secondary-2 flex flex-col items-end'>
                <div className='font-odena relative left-0'>This Website Was Designed 
                    <span className='font-odena relative top-4 left-1'> O </span> 
                    <span className='font-odena relative top-5 left-2'> n </span> 
                    <span>Figma</span>
                </div>

                <div className='font-odena relative right-4'>And Developed 
                    <span className='font-odena relative bottom-3'> O </span> 
                    <span className='relative left-4'>React.</span>
                </div>
            </div>

            <div className='relative right-20 text-secondary-2 text-xl flex flex-col items-end'>
                <p>Contacts</p>
                <a href="">+251 923 098 937</a>
                <a href="">benonimoges01@gmail.com</a>
                <a href="">Figma</a>
                <a href="">React</a>
            </div>


            <div className='flex justify-between'>
                <div className='text-primary-1 h-1/10 w-30 relative flex items-center gap-1 p-2'>
                    <img src={CopyRight} alt="" className='w-5'/>
                    <p>2025</p>
                </div>

                <div className='text-secondary-2 z-30 h-1/10 flex justify-end items-center p-2 gap-2'>
                <p>Privacy Policy</p>
                <span className='bg-secondary-2 w-0.5 h-4'></span>
                <p>Terms Of Service</p>
                </div>
            </div>

        </div>       
    </div>
  )
}

export default About