import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { groupLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsGroup = ({ images }) => {
  return (
    <>
      <SurfLessonsLayout.Body.Header>
        <h2 className='mb-1 text-center md:mb-4'>Group</h2>
        <h3 className='text-center'>1 Coach & 2 Guests</h3>
      </SurfLessonsLayout.Body.Header>

      <SurfLessonsLayout.Body.Content images={images}>
        <div className='flex flex-col items-center'>
          <h2 className='md:text-4xl'>
            1 Surf Lesson<span className='ms-2 text-3xl text-white'>🏄‍♂️</span>
          </h2>
          <h4 className='text-cf-dark dark:text-cf-white md:hidden'>
            <span className='underline underline-offset-4'>Total</span> for 2
            Guests
          </h4>
          <div className='flex items-center'>
            <h3>2 hours:</h3>
            <h4 className='ms-2'>750K IDR (USD 52)</h4>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='md:text-4xl'>
            5 Surf Lessons
            <span className='ms-2 text-3xl text-white'>🏄‍♀️🏄‍♂️🏄‍♀️</span>
          </h2>
          <h3 className='text-cf-dark dark:text-cf-white md:hidden'>
            <span className='underline underline-offset-4'>Total</span> for 2
            Guests
          </h3>
          <div className='flex items-center'>
            <h3>5 * 2 hours:</h3>
            <h4 className='ms-2'>3.25M IDR (USD 224)</h4>
          </div>
        </div>

        <div className='flex justify-center'>
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto mt-0 mb-4'
          >
            Surf Now
          </ButtonAsGradient>
        </div>
      </SurfLessonsLayout.Body.Content>
    </>
  )
}

export default SurfLessonsGroup

SurfLessonsGroup.Layout = SurfLessonsLayout

export async function getStaticProps() {
  const groupLessonsImgPromises = groupLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const groupLessonsImg = await Promise.all(groupLessonsImgPromises)

  return {
    props: {
      images: groupLessonsImg,
    },
  }
}
