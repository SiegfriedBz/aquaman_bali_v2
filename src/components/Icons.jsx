import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faStreetView, faMugHot } from '@fortawesome/free-solid-svg-icons'
import tikTokLogo from '../../public/logos/tiktok-logo.png'

const NAVBAR_ICON_SIZE = (isBigIcon) => {
  return isBigIcon ? 'md:text-3xl 2xl:text-4xl' : 'md:text-4xl 2xl:text-5xl'
}
const FOOTER_ICON_SIZE = (isBigIcon) => {
  return isBigIcon ? 'md:text-4xl' : 'md:text-5xl'
}

const ICON_BASE_CLASSNAME =
  'text-3xl font-bold transition duration-300 hover:scale-125'

const IconLink = ({
  navbaricon,
  isBigIcon,
  href,
  target = '_self',
  icon,
  color,
  hoverColor,
  className,
}) => {
  const sizeClassName = navbaricon
    ? NAVBAR_ICON_SIZE(isBigIcon)
    : FOOTER_ICON_SIZE(isBigIcon)

  return (
    <a
      href={href}
      target={target}
      className='base-link flex items-center justify-center'
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${sizeClassName} 
         ${ICON_BASE_CLASSNAME} ${className} ${color} ${hoverColor} `}
      />
    </a>
  )
}

export const WhatsappIconLink = ({ className = '', navbaricon }) => {
  return (
    <IconLink
      href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
      target='_blank'
      icon={faWhatsapp}
      navbaricon={navbaricon}
      className={className}
      color='text-teal-700'
      hoverColor='hover:text-teal-500'
    />
  )
}

export const StreetViewIconLink = ({ className = '', navbaricon }) => {
  return (
    <IconLink
      href={process.env.NEXT_PUBLIC_STREET_VIEW_LINK || '/'}
      icon={faStreetView}
      isBigIcon={true}
      navbaricon={navbaricon}
      className={className}
      color='text-amber-400'
      hoverColor='hover:text-amber-500'
    />
  )
}

export const IgIconLink = ({ className = '', navbaricon }) => {
  return (
    <IconLink
      href={process.env.NEXT_PUBLIC_IG_LINK || '/'}
      target='_blank'
      icon={faInstagram}
      navbaricon={navbaricon}
      className={className}
      color='text-purple-600'
      hoverColor='hover:text-purple-500'
    />
  )
}

export const CoffeeIconLink = ({ className = '', navbaricon }) => {
  return (
    <IconLink
      href={process.env.NEXT_PUBLIC_BMCOFFEE_LINK || '/'}
      target='_blank'
      icon={faMugHot}
      isBigIcon={true}
      navbaricon={navbaricon}
      className={className}
      color='text-amber-400'
      hoverColor='hover:text-amber-500'
    />
  )
}

export const TiktokIconLink = ({ className = '', navbaricon }) => {
  return (
    <a
      className='base-link'
      href={process.env.NEXT_PUBLIC_TIKTOK_LINK || '/'}
      target='_blank'
    >
      <Image
        src={tikTokLogo}
        width={45}
        height={45}
        alt='tiktok-logo'
        navbaricon={navbaricon}
        className={`${
          navbaricon ? 'md:h-12 md:w-12' : 'h-10 w-10 md:h-12 md:w-12'
        } ${className} transition duration-300 hover:scale-125`}
      />
    </a>
  )
}

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <g strokeDasharray='2'>
        <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.2s'
            values='4;2'
          />
        </path>
        <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.2s'
            dur='0.2s'
            values='4;2'
          />
        </path>
      </g>
      <path
        fill='currentColor'
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
        opacity='0'
      >
        <set attributeName='opacity' begin='0.5s' to='1' />
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='3;12'
        />
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='1;10'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill='currentColor'
      mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'
    >
      <set attributeName='opacity' begin='0.5s' to='0' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.1s'
        dur='0.4s'
        values='6;10'
      />
    </circle>
  </svg>
)

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <rect x='0' y='0' width='24' height='24' fill='rgba(255, 255, 255, 0)' />
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='2'
      strokeDashoffset='2'
      strokeLinecap='round'
      strokeWidth='2'
    >
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.2s'
          dur='0.2s'
          values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.2s'
          dur='0.2s'
          values='2;0'
        />
      </path>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.5s'
          dur='0.2s'
          values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.5s'
          dur='1.2s'
          values='2;0'
        />
      </path>
      <animateTransform
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      />
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <g
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z' />
      <set attributeName='opacity' begin='0.6s' to='0' />
    </g>
    <mask id='lineMdMoonFilledToSunnyFilledLoopTransition0'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='12;3'
        />
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='10;1'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='10'
      fill='currentColor'
      mask='url(#lineMdMoonFilledToSunnyFilledLoopTransition0)'
      opacity='0'
    >
      <set attributeName='opacity' begin='0.6s' to='1' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.6s'
        dur='0.4s'
        values='10;6'
      />
    </circle>
  </svg>
)
