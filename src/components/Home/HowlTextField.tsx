import React from 'react'
import TextHowl from '@/components/TextHowl'

const Howl = () => {
  return (
    <div className="flex justify-center h-auto gap-5 p-5  border-b-4 border-custom mt-20">
      <img className="self-start" src="/pic1.svg" alt="profilePic" />
      <TextHowl />
    </div>
  )
}

export default Howl
