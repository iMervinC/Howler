import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import { HowlT } from '@/types/Howl.model'
import { useGetHowls } from '@/hooks/queryHooks'
//Components
import PageWarp from '@/components/PageWrap'
import HowlDisplay from '@/components/HowlDisplay'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'

const home: FC<{ data: HowlT[] }> = (props) => {
  const [sessionUser, session] = useSessionUser()
  const route = useRouter()
  const { data, isLoading } = useGetHowls()

  //If no session display nothing and reroute
  useEffect(() => {
    !session && route.push('/')
  }, [session])

  if (!session) return null

  return (
    <PageWarp title={'Home'}>
      <BreadCrumb page="home" />
      <div className="howl-container scroll">
        <HowlTextField />
        <HowlDisplay data={data!} isLoading={isLoading} />
      </div>
    </PageWarp>
  )
}

export default home
