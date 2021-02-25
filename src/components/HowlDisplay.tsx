import { FC } from 'react'
import { HowlT } from '@/types/Howl.model'
import Howl from '@/components/Howl'
import HowlLoader from '@/components/HowlLoader'

interface HowlDisplay {
  data: HowlT[]
  userPage?: boolean
  isLoading: boolean
}

const HowlDisplay: FC<HowlDisplay> = ({ data, userPage, isLoading }) => {
  return (
    <div className={`howl-wrapper ${userPage && 'transform translate-y-32'}`}>
      {!isLoading ? (
        data?.map((howl) => (
          <Howl
            key={howl._id}
            _id={howl._id}
            howl={howl.howl}
            user={howl.user}
            createdAt={howl.createdAt}
          />
        ))
      ) : (
        <HowlLoader />
      )}
    </div>
  )
}

export default HowlDisplay
