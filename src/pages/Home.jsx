import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AccLogo from "../assets/images/Nav/Acc-Logo.svg"
import CartLogo from "../assets/images/Nav/Cart - Logo.svg"
import NonLogo from "../assets/images/Hero/Nonagon-Logo.svg"
import Hamburger from "../assets/images/HamburgerIcon.svg"
import FootNeck from "../assets/images/Footer/Foot-Neck.svg"
import CopyRight from "../assets/images/Footer/Copy-Right.svg"
import FootRing1 from "../assets/images/Footer/Foot-Ring-1.svg"
import FootRing2 from "../assets/images/Footer/Foot-Ring-2.svg"
import FootMetal from "../assets/images/Footer/Foot-Metal.svg"
import Loading from "./Loading.jsx"


function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [hovered, setHovered] = useState(null)
  const heroScope = useRef(null)
  const leftRef = useRef(null)
  const centerInnerRef = useRef(null)
  const rightRef = useRef(null)
  const centerBgRef = useRef(null)
  const mobileSectionRef = useRef(null)
  const mobileCenterRef = useRef(null)
  const mobileRightRef = useRef(null)
  const mobileFourthRef = useRef(null)
  const mobileFifthRef = useRef(null)
  const mobileTextRef = useRef(null)

  useEffect(() => {
    if (!showSplash) return
    const target = document.querySelector('.ellipse-slow')
    const end = () => setShowSplash(false)
    if (target) {
      target.addEventListener('animationend', end, { once: true })
    } else {
      // Fallback in case element not found; aligns with ~delay+duration
      const t = setTimeout(end, 4500)
      return () => clearTimeout(t)
    }
    return () => {
      if (target) target.removeEventListener('animationend', end)
    }
  }, [showSplash])

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (showSplash) return
    ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize' })
    const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 767px)').matches

    // Hide scrollbars during entrance (desktop only)
    if (!isMobile) {
      gsap.set(document.documentElement, { overflow: 'hidden' })
      gsap.set(document.body, { overflow: 'hidden' })
    }

    if (!isMobile) {
      const tl = gsap.timeline({
        defaults: { duration: 2.0, ease: 'power3.out' },
        onComplete: () => {
          // Restore scrolling
          gsap.set(document.documentElement, { overflow: 'auto' })
          gsap.set(document.body, { overflow: 'auto' })
        }
      })

      // Left/Right slide up from bottom; Center column drops from very top offscreen
      tl.from(leftRef.current, { yPercent: 100, opacity: 0, willChange: 'transform' }, 0)
        .from(rightRef.current, { yPercent: 100, opacity: 0, willChange: 'transform' }, 0.05)
        .from(centerBgRef.current, { yPercent: -100, opacity: 0, willChange: 'transform'}, 0.10)
        .from(centerInnerRef.current, { opacity: 0 }, 0.25)
    }

    const mm = gsap.matchMedia()
    mm.add('(max-width: 767px)', () => {
      const section = mobileSectionRef.current
      const centerEl = mobileCenterRef.current
      const rightEl = mobileRightRef.current
      const fourthEl = mobileFourthRef.current
      const fifthEl = mobileFifthRef.current
      if (!section || !centerEl || !rightEl || !fourthEl || !fifthEl) return

      gsap.set(centerEl, { willChange: 'transform, width, height, left, top', transformOrigin: '50% 50%', left: '50%', right: 'auto', xPercent: -50, x: 0, boxSizing: 'border-box', marginLeft: 0, marginRight: 0 })
      gsap.set(rightEl, { willChange: 'transform, width, height, left, top', transformOrigin: '50% 50%', left: '50%', right: 'auto', xPercent: -50, x: 0, top: '75%', boxSizing: 'border-box', marginLeft: 0, marginRight: 0 })
      // Fourth image (clone of left) starts near bottom to emerge earlier, will take initial right spot
      gsap.set(fourthEl, { willChange: 'transform, width, height, left, top, opacity', transformOrigin: '50% 50%', left: '50%', right: 'auto', xPercent: -50, x: 0, top: '100%', width: '66.6667%', opacity: 1, boxSizing: 'border-box', marginLeft: 0, marginRight: 0 })
      // Fifth image (clone of center) starts off-screen below and will take the fourth's spot later
      gsap.set(fifthEl, { willChange: 'transform, width, height, left, top, opacity', transformOrigin: '50% 50%', left: '50%', right: 'auto', xPercent: -50, x: 0, top: '110%', width: '66.6667%', opacity: 1, boxSizing: 'border-box', marginLeft: 0, marginRight: 0 })

      const st = {
        trigger: section,
        start: 'top top',
        end: '+=480%',
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }

      const tlScroll = gsap.timeline({ scrollTrigger: st })

      // Center image fills the viewport
      tlScroll.to(centerEl, {
        left: '50%',
        top: 0,
        xPercent: -50,
        x: 0,
        width: '100%',
        height: '100%',
        scale: 1,
        transformOrigin: '50% 50%',
        ease: 'none',
        overwrite: 'auto',
        immediateRender: true,
        duration: 1,
      }, 0)

      // Right image moves into the center image's initial position
      tlScroll.to(rightEl, {
        top: '50%',
        width: '83.3333%',
        xPercent: -50,
        x: 0,
        ease: 'none',
        overwrite: 'auto',
        duration: 1,
      }, 0)

      // Fourth image rises to the initial right image position/size simultaneously
      tlScroll.to(fourthEl, {
        top: '75%',
        width: '66.6667%',
        xPercent: -50,
        x: 0,
        opacity: 1,
        ease: 'none',
        overwrite: 'auto',
        duration: 1,
      }, 0)

      // Label and text swap to "-A-" when center fills
      tlScroll.add('phase1End', 1)
      tlScroll.call(() => {
        if (mobileTextRef.current) mobileTextRef.current.textContent = '-A-'
      }, null, 'phase1End')

      // Phase 2: continue scrolling — promote right, shift fourth, bring in fifth
      tlScroll.to(rightEl, {
        left: '50%',
        top: 0,
        xPercent: -50,
        x: 0,
        width: '100%',
        height: '100%',
        ease: 'none',
        overwrite: 'auto',
        duration: 1,
      }, 1)

      tlScroll.to(fourthEl, {
        top: '50%',
        width: '83.3333%',
        xPercent: -50,
        x: 0,
        ease: 'none',
        overwrite: 'auto',
        duration: 1,
      }, 1)

      tlScroll.to(fifthEl, {
        top: '75%',
        width: '66.6667%',
        xPercent: -50,
        x: 0,
        opacity: 1,
        ease: 'none',
        overwrite: 'auto',
        duration: 1,
      }, 1)

      // Label and text swap to "Plenty" when right fills
      tlScroll.add('phase2End', 2)
      tlScroll.call(() => {
        if (mobileTextRef.current) mobileTextRef.current.textContent = 'Plenty'
      }, null, 'phase2End')
      
      // Keep text in sync in both directions (forward/backward scroll)
      const updateMobileText = () => {
        if (!mobileTextRef.current) return
        const t = tlScroll.time()
        if (t < 0.1) {
          mobileTextRef.current.textContent = 'Jewels'
        } else if (t < 1) {
          mobileTextRef.current.textContent = '-A-'
        } else if (t < 2.1) {
          mobileTextRef.current.textContent = 'Plenty'
        }
      }
      tlScroll.eventCallback('onUpdate', updateMobileText)
      
      ScrollTrigger.refresh()
    })
  }, { scope: heroScope, dependencies: [showSplash] })

  return (
    <div ref={heroScope} className='relative'>
        {showSplash && (
          <div className='fixed inset-0 z-30'>
            <Loading />
          </div>
        )}
        <nav className='hidden md:flex z-20 py-2 px-3 fixed items-center gap-1 text-primary-1 text-xl'>
          <p>Am</p>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <p>En</p>
        </nav>

        <nav className='hidden md:flex z-20 py-2 px-3 fixed right-0 items-center gap-1 text-primary-1 text-xl'>
          <img src={AccLogo} alt="" className='w-8'/>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <img src={CartLogo} alt="" className='w-7'/>
        </nav>
      
      {/* Mobile layout */}
      <div ref={mobileSectionRef} className='md:hidden relative h-screen w-screen bg-secondary-3 overflow-hidden'>
        {/* Left image fills entire page as background */}
        <div className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-lovetosmile-3339117.jpg)] border-3 border-primary-1'></div>

        {/* Top bar: En|Am (left), centerInner (center), hamburger (right) */}
        <div className='absolute top-2 left-3 z-20 text-primary-1 text-xl'>En | Am</div>
        <div className='absolute top-2 right-3 z-20'>
          <img src={Hamburger} alt="" className='w-8 h-8'/>
        </div>

        {/* Center inner at top-center */}
        <div className='absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center'>
          <div className='border-primary-1 border-3 rounded-full w-24 h-24 '></div>
          <img src={NonLogo} alt='' className='w-10 relative -top-2'/>
        </div>

        { !showSplash && (
          <div className='pointer-events-none absolute z-50 inset-0 flex -top-15 items-center justify-center'>
              <span ref={mobileTextRef} className='font-odena text-primary-1 text-7xl'>Jewels</span>
          </div>
        )}

        {/* Center image smaller, centered lower, with text Jewels overlay */}
        <div ref={mobileCenterRef} className='absolute top-1/2 z-10 w-5/6 h-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-valeriya-12965.jpg)] border-3 border-primary-1 box-border'>
        </div>

        {/* Right image even smaller ~75% down */}
        <div ref={mobileRightRef} className='absolute top-3/4 z-10 w-4/6 h-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/Hero-Earring.png)] border-3 border-primary-1'></div>
        {/* Fourth image (clone of left) that emerges from bottom to occupy initial right spot */}
        <div ref={mobileFourthRef} className='absolute z-10 w-4/6 h-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-lovetosmile-3339117.jpg)] border-3 border-primary-1'></div>
        {/* Fifth image (clone of center) that will later take the fourth's position */}
        <div ref={mobileFifthRef} className='absolute z-10 w-4/6 h-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-valeriya-12965.jpg)] border-3 border-primary-1'></div>
      </div>

      {/* Desktop layout */}
      <div className=' hero hidden md:flex bg-secondary-3 h-screen'>
        
        <div
          ref={leftRef}
          onMouseEnter={() => setHovered('left')}
          onMouseLeave={() => setHovered(null)}
          className='relative overflow-hidden z-10 p-2 flex justify-end items-start w-1/3 h-screen border-r-2 border-3 border-primary-1'
        >
          <div className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-lovetosmile-3339117.jpg)] transition-transform duration-500 will-change-transform ${hovered==='left' ? 'scale-120' : ''}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-10 bg-black/60 transition-opacity duration-300 ${hovered ? (hovered==='left' ? 'opacity-0' : 'opacity-60') : 'opacity-0'}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${hovered==='left' ? 'opacity-100' : 'opacity-0'}`}>
            <span className='font-odena text-primary-1 text-7xl'>Jewels</span>
          </div>
          <nav className='relative z-30 flex text-primary-1 text-xl gap-4'>
            <a href="">Rings</a>
            <a href="">Necklaces</a>
          </nav>
        </div>
        
        <div
          ref={centerBgRef}
          onMouseEnter={() => setHovered('center')}
          onMouseLeave={() => setHovered(null)}
          className='relative overflow-hidden z-10 flex justify-center w-1/3 h-screen border-l-2 border-r-2 border-3 border-primary-1'
        >
          <div className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-valeriya-12965.jpg)] transition-transform duration-500 will-change-transform ${hovered==='center' ? 'scale-120' : ''}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-10 bg-black/60 transition-opacity duration-300 ${hovered ? (hovered==='center' ? 'opacity-0' : 'opacity-60') : 'opacity-0'}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${hovered==='center' ? 'opacity-100' : 'opacity-0'}`}>
            <span className='font-odena text-primary-1 text-7xl'>-A-</span>
          </div>
          
          <div ref={centerInnerRef} className='relative z-30 bottom-23 mx-auto flex flex-col items-center pointer-events-none'>
            <div className='border-primary-1 border-3 rounded-full w-40 h-40'></div>
            <img src={NonLogo} alt="" className='w-15 relative bottom-2'/>
          </div>

        </div>
        
        <div
          ref={rightRef}
          onMouseEnter={() => setHovered('right')}
          onMouseLeave={() => setHovered(null)}
          className='relative overflow-hidden z-10 p-2 flex items-start justify-between w-1/3 h-screen border-l-2 border-3 border-primary-1'
        >
          <div className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/Hero-Earring.png)] transition-transform duration-500 will-change-transform ${hovered==='right' ? 'scale-120' : ''}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-10 bg-black/60 transition-opacity duration-300 ${hovered ? (hovered==='right' ? 'opacity-0' : 'opacity-60') : 'opacity-0'}`}></div>
          <div className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${hovered==='right' ? 'opacity-100' : 'opacity-0'}`}>
            <span className='font-odena text-primary-1 text-7xl'>Plenty</span>
          </div>

          <nav className='relative z-30 flex text-primary-1 text-xl gap-4'>
            <a href="">Earrings</a>
            <a href="">About</a>
          </nav>
        </div>
      </div>

      {/* <div className='home-necklace flex flex-col items-center  bg-secondary-3 h-screen'>

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
        
      </div> */}

      {/* <div className='home-about bg-secondary-3 h-screen'>

        <div className='overflow-x-clip h-1/2 flex flex-col items-center'>
          <div className='flex flex-col items-center relative left-140 bottom-68'>
            <div className='z-40 border-primary-1 border-4 rounded-full w-96 h-96
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
                <div className='overflow-clip w-150 h-90 relative left-50 bottom-91.5'>
                  <div className='relative left-25 top-40 bg-tertiary-1 border-secondary-2 border-4 rounded-full w-96 h-96 scale-150'></div>
                </div>
            </div>

            <div className='z-30 h-1/10 flex justify-end items-center p-2 gap-2'>
              <p>Privacy Policy</p>
              <span className='bg-secondary-2 w-0.5 h-4'></span>
              <p>Terms Of Service</p>
            </div>
          </div> 

        </div>
      </div> */}
    </div>
  )
}

export default Home
