import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import Howl from '@/components/Howl'

const home: FC = () => {
  const [session, loading] = useSession()
  const route = useRouter()

  useEffect(() => {
    !session && route.push('/')
    console.log(session)
  }, [session])

  //If no session display nothing
  if (!session) return null

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
