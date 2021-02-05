import React, { FC } from 'react'
import Image from './Image'
import Intro from './Intro'

const Hero: FC = () => {
  return (
    <div className="flex items-center justify-center lg:justify-around h-screen flex-col-reverse lg:flex-row gap-5 lg:gap-10">
      <Intro />
      <Image />
    </div>
  )
}

export default Hero
