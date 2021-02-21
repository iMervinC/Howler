import { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import { HowlT } from '@/types/Howl.model'
import { useGetHowls } from '@/hooks/queryHooks'
import db from '@/utils/dbConnect'
import PreHowl from '@/backend/model/howlModel'
//Components
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlTextField from '@/components/Home/HowlTextField'
import HowlLoader from '@/components/HowlLoader'
import Howl from '@/components/Howl'

const home: FC<{ data: HowlT[] }> = (props) => {
  const [sessionUser, session, loading] = useSessionUser()
  const route = useRouter()
  const { data, status } = useGetHowls({
    initialData: props.data,
  })

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
          {status === 'loading' && <h2>Loading...</h2>}
          {data?.map((howl) => (
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  db()
  const howls = await PreHowl.find({})
    .populate('user', 'name image userTag')
    .sort({ createdAt: -1 })
  const result = JSON.parse(JSON.stringify(howls))
  return {
    props: { data: result },
  }
}
