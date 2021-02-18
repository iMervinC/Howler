import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import Howl from '@/components/Howl'

const home: FC = () => {
  const [sessionUser, session, loading] = useSessionUser()
  const route = useRouter()

  useEffect(() => {
    !session && route.push('/')
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
