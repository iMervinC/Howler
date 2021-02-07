import { FC } from 'react'
import PageWarp from '@/components/PageWarp'
import BreadCrumb from '@/components/BreadCrumb'
import LoginPage from '@/components/LoginPage'
import Howl from '@/components/Howl'

const Home: FC = () => {
  return (
    <PageWarp title={'Home'}>
      {/* <LoginPage /> */}
      <div className="max-w-main w-main border-r-4 border-l-4 border-custom">
        <BreadCrumb page="home" />
        <Howl />
      </div>
    </PageWarp>
  )
}

export default Home
