import { FC } from 'react'
import PageWarp from '@/components/PageWarp'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import Howl from '@/components/Howl'

const home: FC = () => {
  return (
    <PageWarp title={'Home'}>
      <BreadCrumb page="home" />
      <div className="h-full transform -translate-y-20 overflow-auto scroll">
        <HowlTextField />
        <div className="howl-wrapper">
          <Howl />
          <Howl />
          <Howl />
          <Howl />
        </div>
      </div>
    </PageWarp>
  )
}

export default home
