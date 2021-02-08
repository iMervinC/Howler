import { FC } from 'react'
import PageWarp from '@/components/PageWarp'
import BreadCrumb from '@/components/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import Howl from '@/components/Howl'

const home: FC = () => {
  return (
    <PageWarp title={'Home'}>
      <div className="max-w-main w-main border-r-4 border-l-4 border-custom">
        <BreadCrumb page="home" />
        <div className="h-full transform -translate-y-20 overflow-auto scroll">
          <HowlTextField />
          <div className="mt-5 flex flex-col items-center justify-center gap-8 overflow-hidden">
            <Howl />
            <Howl />
            <Howl />
            <Howl />
          </div>
        </div>
      </div>
    </PageWarp>
  )
}

export default home
