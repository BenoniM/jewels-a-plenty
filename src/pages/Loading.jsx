import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Loading = () => {
  return (
    <div className='bg-secondary-3 w-screen h-screen flex flex-col'>
        <div className='w-screen h-3/5 md:h-3/4 flex flex-col items-center justify-center'>
            <svg
              className='w-80 md:w-3xl relative top-30 md:top-40'
              viewBox="0 0 922 376"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Loading"
              role="img"
            >
              <path
                className='loading-ellipse-path ellipse-slow'
                d="M461 20C586.368 20 698.939 40.7533 779.426 73.5654C819.719 89.9918 851.001 109.047 871.893 129.183C892.727 149.264 902 169.116 902 187.937C902 206.756 892.727 226.608 871.893 246.689C851.001 266.825 819.719 285.88 779.426 302.307C698.939 335.119 586.368 355.872 461 355.872C335.632 355.872 223.061 335.119 142.574 302.307C102.281 285.88 70.9988 266.825 50.1074 246.689C29.2728 226.608 20.0001 206.756 20 187.937C20 169.116 29.2726 149.264 50.1074 129.183C70.9988 109.047 102.281 89.9918 142.574 73.5654C223.061 40.7533 335.632 20 461 20Z"
                pathLength="1"
              />
            </svg>
            <svg
              className='w-35 md:w-85 z-10 relative top-10 md:top-0'
              viewBox="0 0 501 501"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Loading nonagon"
              role="img"
            >
              <path
                className='loading-ellipse-path nonagon-start-top nonagon-fill'
                d="M399.652 77.4474L479.286 217.512L451.608 376.908L329.748 480.746H170.907L49.0459 376.909L21.3682 217.512L101.001 77.4484L250.327 22.257L399.652 77.4474Z"
                stroke="#F0B629"
                strokeWidth="40"
                pathLength="1"
              />
            </svg>
        </div>
        <div className='w-screen h-2/5 md:h-1/4 flex items-start justify-center'>
            <p className='font-odena text-primary-1 text-5xl md:text-6xl pt-5'>Loading</p>
        </div>
    </div>
  )
}

export default Loading