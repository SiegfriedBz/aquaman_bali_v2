import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import PageLayout from '@/components/layouts/PageLayout'
import Link from 'next/link'

const SurfLessons = () => {
  return (
    <PageLayout>
      <section className={`flex h-full w-full flex-col items-center`}>
        <h1 className='title'>Surf Lessons</h1>
        <h2 className='sub-title'>
          In Canggu &{' '}
          <Link
            href='/surf-trips'
            target='_self'
            className='text-gradient underline-gradient-link'
          >
            Surf Trips
          </Link>
        </h2>

        <div className='flex w-full justify-evenly space-x-4'>
          <ButtonAsGradient
            As='Link'
            href='/surf-lessons'
            target='_self'
            variant='btn-as-gradient-amber'
            padding='px-2 py-1'
            extraClasses='my-2 w-1/2 text-center'
          >
            Private
          </ButtonAsGradient>
          <ButtonAsGradient
            As='Link'
            href='/surf-lessons/#group'
            target='_self'
            variant='btn-as-gradient-amber'
            padding='px-2 py-1'
            extraClasses='my-2 w-1/2 text-center'
          >
            Group
          </ButtonAsGradient>
        </div>
      </section>
    </PageLayout>
  )
}

export default SurfLessons
