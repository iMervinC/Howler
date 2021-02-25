import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUserGetHowls } from '@/hooks/queryHooks'
import { useSessionUser } from '@/hooks/useSessionUser'
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlDisplay from '@/components/HowlDisplay'
import HowlUserInfo from '@/components/HowlUserInfo'

const User = () => {
  const route = useRouter()
  const { user } = route.query
  const [, session] = useSessionUser()
  const { userProfile, howls, howlStatus, userStatus } = useUserGetHowls(
    `${user}`
  )

  //If no session display nothing and reroute
  useEffect(() => {
    !session && route.push('/')
  }, [session])

  if (!session) return null

  return (
    <PageWarp title="Profile">
      <BreadCrumb page="profile" />
      <div className="h-full transform -translate-y-20 overflow-auto scroll">
        <HowlUserInfo user={userProfile!} isLoading={userStatus} />
        <HowlDisplay data={howls!} userPage isLoading={howlStatus} />
      </div>
    </PageWarp>
  )
}

export default User
