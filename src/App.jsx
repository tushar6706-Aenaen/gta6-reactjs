import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })

  })


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full  overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            className='img-obj-svg'
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"

          />
        </svg>
      </div>
      {
        showContent && (
          <div className='main w-full '>
            <div className='landing w-full h-screen bg-black '>

              {/* navbar */}
              <nav className='navbar absolute z-10 top-0 left-0 w-full py-5 px-10 '>
                <div className='logo flex  gap-6 '>
                  <div className='lines flex flex-col gap-[6px]'>
                    <div className='line w-13 h-2 bg-white'></div>
                    <div className='line w-6 h-2 bg-white'></div>
                    <div className='line w-3 h-2 bg-white'></div>
                  </div>
                  <h3 className='text-2xl mt-[-6px] leading-none text-white'>Rockstar</h3>
                </div>
              </nav>

              {/* imgs */}
              <div className='imagesdiv w-full h-screen  '>
                <img className="absolute w-full h-full object-cover" src="./sky.png" alt="" />
                <img className="absolute  w-full h-full object-cover" src="./bg.png" alt="" />
                <div className=' absolute opacity-60 h-screen w-full bg-black '></div>
                <img className='absolute sm:scale-[60%] left-[50%] right-[50%] -translate-x-[50%] sm:-translate-y-[18%] -translate-y-[-35%]   scale-[150%] object-cover' src="./gb1.png" alt="" />
              </div>
            </div>
          </div>

        )

      }
    </>
  )
}

export default App
