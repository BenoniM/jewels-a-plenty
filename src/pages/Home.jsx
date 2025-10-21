import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
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
import NecklaceHome from "../assets/images/Hero/NecklaceHome.svg"
import RingsHome from "../assets/images/Hero/RingHome.svg"
import EarringHome from "../assets/images/Hero/EarringHome.svg"
import ScrollDown from "../assets/images/ScrollDown.svg"
import WhiteImg1 from "../assets/images/Hero/9Images/pexels-ben-iwara-1033992193-27152278.jpg"
import WhiteImg2 from "../assets/images/Hero/9Images/pexels-enginakyurt-1457801.jpg"
import WhiteImg3 from "../assets/images/Hero/9Images/pexels-enginakyurt-1458867.jpg"
import WhiteImg4 from "../assets/images/Hero/9Images/pexels-goumbik-627979.jpg"
import WhiteImg5 from "../assets/images/Hero/9Images/pexels-leah-newhouse-50725-5091121.jpg"
import WhiteImg6 from "../assets/images/Hero/9Images/pexels-noellegracephotos-906056.jpg"
import WhiteImg7 from "../assets/images/Hero/9Images/pexels-olly-3768117.jpg"
import WhiteImg8 from "../assets/images/Hero/9Images/pexels-pixabay-248077.jpg"
import WhiteImg9 from "../assets/images/Hero/9Images/pexels-pixabay-264871.jpg"
 


function Home() {
  
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()
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
  const necklacesRef = useRef(null)
  const necklaceSvgRef = useRef(null)
  const ringsSvgRef = useRef(null)
  const earringsSvgRef = useRef(null)
  const heroTitleAccentRef = useRef(null)
  const exploreTextRef = useRef(null)
  const ringsTextRef = useRef(null)
  const earringsTextRef = useRef(null)

  // Auto-play SVG sequence: Necklaces -> Rings -> Earrings (slide up/out and in from bottom)
  const playSvgSequence = () => {
    const neck = necklaceSvgRef.current
    const rings = ringsSvgRef.current
    const ears = earringsSvgRef.current
    if (!neck || !rings || !ears) return
    gsap.set(neck, { opacity: 1, yPercent: 0 })
    gsap.set(rings, { opacity: 0, yPercent: 100 })
    gsap.set(ears, { opacity: 0, yPercent: 100 })
    gsap.timeline()
      .to(neck, { yPercent: -100, opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.2 })
      .to(rings, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power2.inOut' }, '<0.2')
      .to(rings, { yPercent: -100, opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.6 })
      .to(ears, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power2.inOut' }, '<0.2')
  }

  // Breakpoint-configurable movement amounts (yPercent) for SVGs
  const motion = {
    ringsIn: { sm: -650, md: -570},
    ringsOut: { sm: -1200, md: -1100},
    earsIn: { sm: -850, md: -905},
  }
  const getBp = () => {
    const w = window.innerWidth
    if (w >= 768) return 'md'
    return 'sm'
  }
  const getY = (key) => motion[key][getBp()]

  

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
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

      // Overlay scroll: Necklaces section slides up to cover hero
      const heroContainer = heroScope.current
      const neckSection = necklacesRef.current
      const neck = necklaceSvgRef.current
      const rings = ringsSvgRef.current
      const ears = earringsSvgRef.current
      if (heroContainer && neckSection) {
        // Position necklaces section as full-viewport overlay using inset to avoid scrollbar gutter
        gsap.set(neckSection, { 
          position: 'fixed', 
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 30, 
          yPercent: 100 
        })
        if (neck && rings && ears) {
          gsap.set(neck, { opacity: 1, yPercent: 0 })
          gsap.set(rings, { opacity: 1, yPercent: 100 })
          gsap.set(ears, { opacity: 1, yPercent: 100 })
        }
        if (exploreTextRef.current && ringsTextRef.current && earringsTextRef.current) {
          gsap.set(exploreTextRef.current, { opacity: 1 })
          gsap.set(ringsTextRef.current, { opacity: 0 })
          gsap.set(earringsTextRef.current, { opacity: 0 })
        }
        
        // Create scroll-triggered overlay animation
        const overlayTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroContainer,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        })
        .to(neckSection, { yPercent: 0, ease: 'none' })
        // Necklaces -> Rings (sync move + fade)
        .add('neckToRings', '+=0.1')
        .to(neck, { yPercent: -100, duration: 0.6, ease: 'none' }, 'neckToRings')
        .to(rings, { yPercent: getY('ringsIn'), duration: 0.6, ease: 'none' }, 'neckToRings')
        .to(exploreTextRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 'neckToRings')
        .to(ringsTextRef.current, { opacity: 1, duration: 0.6, ease: 'none' }, 'neckToRings')
        // Rings -> Earrings (sync move + fade)
        .add('ringsToEars', '+=0.5')
        .to(rings, { yPercent: getY('ringsOut'), duration: 0.6, ease: 'none' }, 'ringsToEars')
        .to(ears, { yPercent: getY('earsIn'), duration: 0.6, ease: 'none' }, 'ringsToEars')
        .to(ringsTextRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 'ringsToEars')
        .to(earringsTextRef.current, { opacity: 1, duration: 0.6, ease: 'none' }, 'ringsToEars')
        
        // Desktop-only dynamic accent color: tie to timeline updates for tight sync
        const updateAccentColor = () => {
          const el = heroTitleAccentRef.current
          const earsEl = earringsSvgRef.current
          if (!el || !earsEl) return
          const rect = el.getBoundingClientRect()
          const r = earsEl.getBoundingClientRect()
          const overlap = !(r.right < rect.left || r.left > rect.right || r.bottom < rect.top || r.top > rect.bottom)
          if (overlap) {
            el.classList.add('text-secondary-2')
          } else {
            el.classList.remove('text-secondary-2')
          }
        }
        overlayTl.eventCallback('onUpdate', updateAccentColor)
        ScrollTrigger.addEventListener('refresh', updateAccentColor)
        updateAccentColor()

        // Recalculate after setting up overlay
        ScrollTrigger.refresh()
      }
    }

    const mm = gsap.matchMedia()
    mm.add('(max-width: 767px)', () => {
      const section = mobileSectionRef.current
      const centerEl = mobileCenterRef.current
      const rightEl = mobileRightRef.current
      const fourthEl = mobileFourthRef.current
      const fifthEl = mobileFifthRef.current
      const neckEl = necklacesRef.current
      const neck = necklaceSvgRef.current
      const rings = ringsSvgRef.current
      const ears = earringsSvgRef.current
      if (!section || !centerEl || !rightEl || !fourthEl || !fifthEl || !neckEl) return

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

      // Prepare necklaces overlay for mobile: fixed full-screen starting off bottom
      gsap.set(neckEl, { position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 30, yPercent: 100 })
      if (neck && rings && ears) {
        gsap.set(neck, { opacity: 1, yPercent: 100 })
        gsap.set(rings, { opacity: 1, yPercent: 100 })
        gsap.set(ears, { opacity: 1, yPercent: 100 })
      }
      if (exploreTextRef.current && ringsTextRef.current && earringsTextRef.current) {
        gsap.set(exploreTextRef.current, { opacity: 1 })
        gsap.set(ringsTextRef.current, { opacity: 0 })
        gsap.set(earringsTextRef.current, { opacity: 0 })
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
      
      // Phase 3: Near the end, slide Necklaces overlay up to cover mobile hero
      tlScroll.add('overlayStart', 2.5)
      tlScroll.to(neckEl, { yPercent: 0, ease: 'none', duration: 0.8 }, 'overlayStart')
      // Mobile: start transitions only after overlay is fully in place
      tlScroll.add('overlayIn', 'overlayStart+=0.8')
      tlScroll.add('m_neckToRings', 'overlayIn')
      tlScroll.to(neck, { yPercent: -100, duration: 0.6, ease: 'none' }, 'm_neckToRings')
      tlScroll.to(rings, { yPercent: getY('ringsIn'), duration: 0.6, ease: 'none' }, 'm_neckToRings')
      tlScroll.to(exploreTextRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 'm_neckToRings')
      tlScroll.to(ringsTextRef.current, { opacity: 1, duration: 0.6, ease: 'none' }, 'm_neckToRings')
      tlScroll.add('m_ringsToEars', 'overlayIn+=0.8')
      tlScroll.to(rings, { yPercent: getY('ringsOut'), duration: 0.6, ease: 'none' }, 'm_ringsToEars')
      tlScroll.to(ears, { yPercent: getY('earsIn'), duration: 0.6, ease: 'none' }, 'm_ringsToEars')
      tlScroll.to(ringsTextRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 'm_ringsToEars')
      tlScroll.to(earringsTextRef.current, { opacity: 1, duration: 0.6, ease: 'none' }, 'm_ringsToEars')
      
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
  }, { scope: heroScope, dependencies: [] })

  

  return (
    <div ref={heroScope} className='relative'>
        <nav className='flex z-[9999] py-6 md:py-3 px-3 fixed items-center gap-1 text-primary-1 text-3xl md:text-2xl'>
          <p>Am</p>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <p>En</p>
        </nav>

        <nav className='hidden md:flex z-[9999] py-3 px-3 fixed right-0 items-center gap-1 text-primary-1 text-xl'>
          <Link to='/login'>
            <img src={AccLogo} alt="" className='w-9'/>
          </Link>
          <span className='bg-primary-1 w-0.5 h-6'></span>
          <img src={CartLogo} alt="" className='w-8'/>
        </nav>

        <div className='md:hidden fixed top-5 right-3 z-[9999] pointer-events-auto'>
          <img src={Hamburger} alt="" className='w-10 h-10 z-[9999] pointer-events-auto'/>
        </div>

      {/* Scroll Down indicator (mobile + desktop positioning) */}
      <div className='fixed z-[9999] text-primary-1 pointer-events-none md:bottom-15 md:right-4 bottom-3 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0'>
        <div className='relative w-25 h-25'>
          <img src={ScrollDown} alt='Scroll Down' className='absolute inset-0 m-auto w-10 h-10 animate-bounce' />
          <svg viewBox='0 0 100 100' className='absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]'>
            <defs>
              <path id='scroll-circle-path' d='M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0' />
            </defs>
            <text fontSize='12' className='fill-current'>
              <textPath href='#scroll-circle-path' startOffset='0%'>SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • </textPath>
            </text>
          </svg>
        </div>
      </div>
      
      {/* Mobile layout */}
      <div ref={mobileSectionRef} className='md:hidden relative h-screen w-full bg-secondary-3 overflow-hidden'>
        {/* Left image fills entire page as background */}
        <div className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Hero/pexels-lovetosmile-3339117.jpg)] border-3 border-primary-1'></div>

        {/* Top bar: En|Am (left), centerInner (center), hamburger (right) */}
        

        {/* Center inner at top-center */}
        <div className='absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center'>
          <div className='border-primary-1 border-3 rounded-full w-24 h-24 '></div>
          <img src={NonLogo} alt='' className='w-10 relative -top-2'/>
        </div>

        <div className='pointer-events-none absolute z-50 inset-0 flex -top-15 items-center justify-center'>
            <span ref={mobileTextRef} className='font-odena text-primary-1 text-7xl'>Jewels</span>
        </div>

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
            <Link to='/shop'>Rings</Link>
            <Link to='/shop'>Necklaces</Link>
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
            <Link to='/shop'>Earrings</Link>
            <Link to='/about'>About</Link>
          </nav>
        </div>
      </div>

      {/* Necklaces */}
      <div 
        ref={necklacesRef}
        className='home-necklace bg-secondary-3 w-full h-screen flex flex-col items-center md:justify-between justify-center overflow-hidden'
      >
        {/* Title aligned with nav bar at top (desktop), natural flow on mobile */}
        <a href="" className='text-primary-1 z-50 font-odena text-3xl md:text-4xl md:mt-2 md:mb-0 mb-4 mt-6 relative left-3 md:left-0'>
          Jewels <span className='font-odena' ref={heroTitleAccentRef}>-a- Plenty</span>
        </a>

        {/* Main center area; scale down on desktop only to preserve mobile arrangement */}
        <main className='relative flex-1 flex flex-col items-center justify-center'>
          <div className='flex justify-center z-60 relative md:top-60 top-40 scale-60 md:scale-90'>
            
            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-20 relative left-71 bottom-121 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg1} className='object-fill w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-60 relative left-87 bottom-97 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg2} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-100 relative left-81 bottom-59 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg3} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 -rotate-40 relative left-49 bottom-27 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg4} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-0 relative bottom-14 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg5} className='object-fill w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-40 relative right-49 bottom-27 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg6} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 rotate-80 relative right-81 bottom-59 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg7} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25 -rotate-60 relative right-87 bottom-97 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg8} className='object-fit w-full h-full' alt="" />
            </div>

            <div onClick={() => navigate('/shop')} className='cursor-pointer bg-tertiary-1 scale-x-400 scale-y-125 w-13 h-25  rotate-340 relative right-71 bottom-121 z-50 border-y-3 border-x-1 border-tertiary-1'>
              <img src={WhiteImg9} className='object-fit w-full h-full' alt="" />
            </div>
          </div>

          {/* Explore SVG overlay (centered, slides between categories) */}
          <div className='pointer-events-none absolute inset-0 z-40 flex items-center justify-center'>
            <div className='relative w-full h-full'>
              {/* Center with absolute positioning; sizes controlled only by sm/md/lg widths */}
              <div ref={necklaceSvgRef} onClick={() => navigate('/shop')} className='pointer-events-auto cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 left-1/2 scale-300 bottom-220 md:scale-300 md:bottom-165'>
                <img src={NecklaceHome} alt='Necklaces' className='object-fill' />
              </div>

              <div ref={ringsSvgRef} onClick={() => navigate('/shop')} className='pointer-events-auto cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 left-1/2 scale-250 top-190 md:scale-350 md:top-170'>
                <img src={RingsHome} alt='Rings' className='object-fill' />
              </div>

              <div ref={earringsSvgRef} onClick={() => navigate('/shop')} className='pointer-events-auto cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 left-5/6 scale-550 top-205 md:scale-850 md:top-200'>
                <img src={EarringHome} alt='Earrings' className='object-fill' />
              </div>
            </div>
          </div>

          {/* Explore text overlay (centered, only texts fade in/out) */}
          <div className='absolute inset-0 z-50 flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-1 text-primary-1 font-odena text-5xl leading-tight relative  h-95 w-95 bg-secondary-3 scale-60 md:scale-90'>
              <Link to='/shop' ref={exploreTextRef} className='flex flex-col items-center pointer-events-auto cursor-pointer'>
                <span className='font-odena'>Explore</span>
                <span className='font-odena'>OUR</span>
                <span className='font-odena'>Necklaces</span>
              </Link>
              <Link to='/shop' ref={ringsTextRef} className='flex flex-col items-center absolute pointer-events-auto cursor-pointer'>
                <span className='font-odena'>Explore</span>
                <span className='font-odena'>OUR</span>
                <span className='font-odena'>Rings</span>
              </Link>
              <Link to='/shop' ref={earringsTextRef} className='flex flex-col items-center absolute pointer-events-auto cursor-pointer'>
                <span className='font-odena'>Explore</span>
                <span className='font-odena'>OUR</span>
                <span className='font-odena'>Earrings</span>
              </Link>
            </div>
          </div>
        </main>
        
        {/* Bottom links bar (desktop only) */}
        <div className='hidden md:flex md:mb-2 gap-2.5 flex-col items-center w-full'>
          <div className='bg-primary-1 w-full h-0.5'></div>
          <div className='text-primary-1 flex gap-8 text-xl'>
            <Link to='/shop'>Rings</Link>
            <Link to='/shop'>Necklaces</Link>
            <Link to='/shop'>Earrings</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
        
      </div>

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
