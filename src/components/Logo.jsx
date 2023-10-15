import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' id='brand-logo' className='btn-as'>
      <Image
        src='/logo.png'
        alt='brand logo'
        style={{ objectSize: 'cover' }}
        width={96}
        height={96}
      />
    </Link>
  )
}

export default Logo
