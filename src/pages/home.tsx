import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import { HowlT } from '@/types/Howl.model'
import { useGetHowls } from '@/hooks/queryHooks'
//Components
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import HowlLoader from '@/components/HowlLoader'
import Howl from '@/components/Howl'

const home: FC = () => {
  const [sessionUser, session, loading] = useSessionUser()
  const route = useRouter()
  const { data, status } = useGetHowls()

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
          <HowlLoader />
          {data &&
            data.map((howl: HowlT) => (
              <Howl
                key={howl._id}
                howl={howl.howl}
                user={howl.user}
                createdAt={howl.createdAt}
              />
            ))}
        </div>
      </div>
    </PageWarp>
  )
}

export default home
