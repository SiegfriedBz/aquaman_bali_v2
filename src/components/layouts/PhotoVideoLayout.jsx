import { useRef } from 'react'
import Image from 'next/image'
import { ButtonAsGradient } from '../ButtonAsGradient'
import PageLayout from './PageLayout'
import { CldVideoPlayer } from 'next-cloudinary'

const PhotoVideoLayout = ({ children }) => {
  const ref = useRef(null)

  const scrollToTop = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageLayout>
      <section
        ref={ref}
        className={`flex h-full w-full scroll-mt-32 flex-col items-center`}
      >
        <Header />
        <Body>{children}</Body>
        <Footer scrollToTop={scrollToTop} />
      </section>
    </PageLayout>
  )
}

export default PhotoVideoLayout

PhotoVideoLayout.Header = Header
PhotoVideoLayout.Body = Body
PhotoVideoLayout.Footer = Footer

function Header() {
  return (
    <>
      <h1 className='title'>Photo & Video</h1>
      <h2 className='sub-title text-center'>Get an amazing souvenir</h2>
      <h3 className='sub-title'>from your Surf Session</h3>

      <div className='flex w-full justify-evenly space-x-4'>
        <ButtonAsGradient
          As='Link'
          href='/photo-video'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-[30%] xs:w-1/3 text-center flex flex-col sm:flex-row sm:justify-center'
        >
          Photo <span className='inline-block sm:ms-1'>& Video</span>
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/photo-video/water-drone'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-[30%] xs:w-1/3 text-center flex flex-col sm:flex-row sm:justify-center'
        >
          Water<span className='inline-block sm:ms-1'>& Drone</span>
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/photo-video/video-analysis'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-[30%] xs:w-1/3 text-center flex flex-col sm:flex-row sm:justify-center'
        >
          Video<span className='inline-block sm:ms-1'>Analysis</span>
        </ButtonAsGradient>
      </div>
    </>
  )
}

function Body({ children }) {
  return <div className='pt-4'>{children}</div>
}

Body.Header = BodyHeader
Body.Content = BodyContent

function BodyHeader({ children }) {
  return <>{children}</>
}

function BodyContent({ image, children }) {
  return (
    <div
      className='mb-3 
        flex flex-col items-center justify-center
        rounded-xl border border-solid 
      border-cf-dark
        p-3
      hover:border-blue-400 
      dark:border-cf-white 
      dark:hover:border-blue-400'
    >
      <div
        className='flex h-72 w-full flex-col 
              items-center justify-center md:h-[34rem]'
      >
        <Image
          width='600'
          height='600'
          src={image.src}
          alt={image.alt}
          placeholder='blur'
          blurDataURL={image.blurDataUrl}
          priority={true}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='mx-auto h-full w-full rounded-xl object-cover shadow-2xl md:w-11/12'
        />
      </div>

      <div className='w-full space-y-8 py-4'>{children}</div>

      <div className='flex justify-center'>
        <ButtonAsGradient
          As='Link'
          href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
          target='_blank'
          extraClasses='mx-auto my-4'
        >
          Surf Now
        </ButtonAsGradient>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <>
      <CldVideoPlayer
        id='rendy-teach-video-01'
        width='1920'
        height='1080'
        src='RendyVideoDrone'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='always'
        loop={true}
        className='rounded-md border-0 shadow-2xl'
      />
      <hr />
    </>
  )
}
