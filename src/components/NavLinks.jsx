import Link from 'next/link'
import {
  CoffeeIconLink,
  IgIconLink,
  StreetViewIconLink,
  TiktokIconLink,
  WhatsappIconLink,
} from './Icons'

const NavLinks = ({ className = '', modal = false, setMobileMenuIsOpen }) => {
  return (
    <ul
      className={`${
        modal ? 'flex-col' : 'justify-end space-x-4 lg:space-x-6'
      } flex h-full w-full items-center ${className}`}
    >
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden md:inline-block'}
        modal={modal}
        href='/surf-lessons'
      >
        Surf Lessons
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden lg:inline-block'}
        modal={modal}
        href='/surf-trips'
      >
        Surf Trips
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden xl:inline-block'}
        modal={modal}
        href='/photo-video'
      >
        Photo & Video
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden xl:inline-block'}
        modal={modal}
        href='/gallery'
      >
        Gallery
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden 2xl:inline-block'}
        modal={modal}
        href='/about-me'
      >
        About me
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden'}
        modal={modal}
        href='/#home-visit-us'
      >
        Visit us
      </Li>
      <Li
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        className={modal ? '' : 'hidden md:inline-block'}
        modal={modal}
        href='/#home-testimonials'
      >
        Testimonials
      </Li>

      {/* social links */}
      <span
        className={`${
          modal ? 'mb-4 mt-6 inline-flex w-[19rem] justify-between' : ''
        } inline-flex items-center justify-end space-x-4 lg:space-x-6`}
      >
        <li
          onClick={() => {
            modal && setMobileMenuIsOpen(false)
          }}
        >
          <StreetViewIconLink className={modal ? 'text-[2.75rem]' : ''} />
        </li>
        <li
          onClick={() => {
            modal && setMobileMenuIsOpen(false)
          }}
          className={modal ? '' : 'hidden 2xl:inline-block'}
        >
          <CoffeeIconLink className={modal ? 'text-[2.5rem]' : ''} />
        </li>
        <li
          onClick={() => {
            modal && setMobileMenuIsOpen(false)
          }}
          className={modal ? '' : 'hidden 2xl:inline-block'}
        >
          <TiktokIconLink className={modal ? 'h-12 w-12' : ''} />
        </li>
        <li
          onClick={() => {
            modal && setMobileMenuIsOpen(false)
          }}
          className={modal ? '' : 'hidden xl:inline-block'}
        >
          <IgIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
        <li
          onClick={() => {
            modal && setMobileMenuIsOpen(false)
          }}
        >
          <WhatsappIconLink className={modal ? 'text-[3rem]' : ''} />
        </li>
      </span>
    </ul>
  )
}

export default NavLinks

const Li = ({
  className = '',
  href = '',
  modal = false,
  setMobileMenuIsOpen,
  children,
}) => {
  return (
    <li
      className={className}
      onClick={() => {
        modal && setMobileMenuIsOpen(false)
      }}
    >
      <Link href={href} className='underline-gradient-link'>
        <span
          className={`text-gradient my-2 inline-block ${
            modal ? 'text-3xl font-extrabold' : 'span-link'
          }`}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}
