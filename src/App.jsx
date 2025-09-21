import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
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

  useGSAP(() => {
    const main = document.querySelector('.main');
    main?.addEventListener("mousemove", function (e) {
      // console.log(e.clientX, e.clientY);
      const xMove = (e.clientX /  window.innerWidth - .5) * 40 ;
      gsap.to(".imagesdiv .text",{
        x:`${xMove * .4}%`
      })

      gsap.to(".imagesdiv .sky",{
        x:xMove
      })

      gsap.to(".imagesdiv .bg",{
        x:xMove * 1.7
      })
 
    })
  }, [showContent])


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
                    <div className='line w-13 h-1.5 bg-white'></div>
                    <div className='line w-6 h-1.5 bg-white'></div>
                    <div className='line w-3 h-1.5 bg-white'></div>
                  </div>
                  <h3 className='text-2xl mt-[-6px] leading-none text-white'>Rockstar</h3>
                </div>
              </nav>

              {/* imgs */}
              <div className='imagesdiv w-full  h-screen  '>
                <img className="sky scale-[1.2]  absolute w-full h-full object-cover" src="./sky.png" alt="" />
                <img className="bg absolute scale-[1.2]  w-full h-full object-cover" src="./bg.png" alt="" />

                <div className='text top-15 gap-3 z-1 flex flex-col text-8xl left-1/2 -translate-x-1/2  text-white absolute  '>
                  <h1 className='-ml-30 leading-none'>grand</h1>
                  <h1 className='ml-15  leading-none'>theft</h1>
                  <h1 className='-ml-15 leading-none'>auto</h1>

                </div>
                <div className=' absolute  opacity-20 h-screen w-full bg-black '></div>
                <img className='character absolute z-10  -bottom-[32%] left-1/2 -translate-x-1/2  scale-[60%] object-cover' src="./gb1.png" alt="" />
              </div>


              {/* bottom bar  */}
              <div className='bottombar absolute bottom-0 left-0 w-full py-5 px-10    bg-gradient-to-t from-black to-transparent text-white
               '>

                <div className='scrolldwn flex gap-4 items-center'>
                  <i className="text-3xl ri-arrow-down-line"></i>
                  <h3 className='scrolldown text-md  '>Scrolldown</h3>
                </div>

                <img className=' absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px]' src="./ps5.png" alt="" />
              </div>

            </div>
          </div>

        )

      }
    </>
  )
}

export default App
