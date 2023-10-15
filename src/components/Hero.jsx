import { useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'

const Hero = (props, heroRef) => {
  const router = useRouter()
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  return (
    <div
      ref={heroRef}
      className='flex min-h-[80vh] flex-col items-center justify-between'
    >
      <div className='hero-image opacity-100 dark:opacity-90'></div>
      <div className='hero-title-wrapper flex h-1/2 flex-col justify-start lg:items-end lg:justify-center'>
        <h1 className='title text-gradient text-center md:text-6xl lg:text-7xl xl:text-right xl:text-8xl 2xl:text-9xl'>
          Aquaman Bali
        </h1>
        <h2 className='text-gradient sub-title text-center md:text-5xl xl:text-6xl 2xl:text-7xl'>
          Surf School & Trips
        </h2>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#home-surf-lessons')
        }}
        className={`relative bottom-1 cursor-pointer text-primary ${
          arrowIsClicked ? 'animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon
          icon={faCircleDown}
          className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'
        />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
