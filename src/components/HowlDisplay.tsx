import { FC } from 'react'
import { HowlT } from '@/types/Howl.model'
import Howl from '@/components/Howl'
import HowlLoader from '@/components/HowlLoader'
import { AnimatePresence } from 'framer-motion'

interface HowlDisplay {
  data: HowlT[]
  userPage?: boolean
  isLoading?: boolean
}

const HowlDisplay: FC<HowlDisplay> = ({ data, userPage, isLoading }) => {
  return (
    <div className={`howl-wrapper ${userPage && 'transform translate-y-20'}`}>
      {!isLoading ? (
        <AnimatePresence>
          {data?.map((howl) => (
            <Howl
              key={howl._id}
              _id={howl._id}
              howl={howl.howl}
              user={howl.user}
              createdAt={howl.createdAt}
            />
          ))}
        </AnimatePresence>
      ) : (
        <>
          <HowlLoader />
          <HowlLoader />
          <HowlLoader />
        </>
      )}
    </div>
  )
}

export default HowlDisplay
