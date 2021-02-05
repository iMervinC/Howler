import { FC } from 'react'
import Hero from '@/components/Hero/Hero'
import PageWarp from '@/components/PageWarp'
import TextLoop from 'react-text-loop'

const Home: FC = () => {
  return (
    <PageWarp title={'iMervinC | Home'}>
      <Hero />
      <div className="flex flex-col gap-10 text-4xl sm:text-5xl md:text-6xl">
        <p>
          I've been learning{' '}
          <span className="text-custom">Web Development</span> since I got out
          of college just for fun and I'm still doing it today!
        </p>
        <p>
          I'm mainly interested in{' '}
          <span className="text-custom">frontend </span>
          development staying up to date with the latest and greatest tech as
          much as I can, but building simple{' '}
          <span className="text-custom">backend </span> is a lot of{' '}
          <span className="text-custom">fun </span> too!
        </p>
        <p>
          Having a lot of enjoyment out of learning and building{' '}
          <span className="text-custom">React</span> app lately and I would say
          it’s my main jam at the moment! Right now I’m getting my hands dirty
          with <span className="text-custom">Next.js</span> and{' '}
          <span className="text-custom">MongoDB</span> to build{' '}
          <span className="text-custom">fullstack</span> apps and host it to
          Vercel
        </p>
        <p className="text-custom">
          Stay Bold &
          <br />
          Have a
        </p>
        <TextLoop>
          <span>Beautiful</span>
          <span>Amazing</span>
          <span>Wonderful</span>
        </TextLoop>
      </div>
    </PageWarp>
  )
}

export default Home
