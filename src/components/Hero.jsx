import { useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import MotionAs from './MotionAs'

const Hero = (props, heroRef) => {
  const router = useRouter()
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  return (
    <div
      ref={heroRef}
      className='flex min-h-[60vh] w-full flex-col items-center justify-between'
    >
      <div
        id='hero-image'
        className='hero-image opacity-100 dark:opacity-80'
      ></div>
      <div className='hero-title-wrapper flex h-full w-full flex-col items-center justify-start'>
        <MotionAs
          As='h1'
          delay={0.5}
          duration={0.8}
          className='title mb-4 w-full text-center text-5xl font-extrabold  sm:text-6xl lg:text-7xl xl:my-16 xl:me-8 xl:text-right xl:text-8xl 2xl:my-24 2xl:me-24'
        >
          Aquaman Bali
        </MotionAs>

        <MotionAs
          As='h2'
          initialX={100}
          delay={0.9}
          duration={0.7}
          className='sub-title w-full text-center text-4xl font-extrabold  sm:text-5xl xl:me-8 xl:text-right 2xl:me-24 2xl:text-7xl'
        >
          Surf School
        </MotionAs>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#home-surf-lessons')
        }}
        className={`absolute bottom-1 z-[500] cursor-pointer text-primary dark:text-cf-white/90 ${
          arrowIsClicked ? 'animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon
          icon={faCircleDown}
          className='rounded-full bg-cf-white/70 text-4xl ring-[0.05rem] ring-cf-white dark:bg-cf-dark/10 dark:bg-transparent dark:ring-0 md:text-5xl'
        />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
