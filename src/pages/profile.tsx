import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSessionUser } from '@/hooks/useSessionUser'
import { useGetUserHowls } from '@/hooks/queryHooks'
import PageWarp from '@/components/PageWrap'
import BreadCrumb from '@/components/UI/BreadCrumb'
import HowlDisplay from '@/components/HowlDisplay'

const User = () => {
  const route = useRouter()
  const [sessionUser, session] = useSessionUser()
  const { data } = useGetUserHowls(sessionUser?.id!)

  //If no session display nothing and reroute to login
  useEffect(() => {
    !session && route.push('/')
  }, [session])

  if (!session) return null

  return (
    <PageWarp title="Profile">
      <BreadCrumb page="profile" />
      <div className="h-full transform -translate-y-20 overflow-auto scroll">
        <div className="h-32 bg-black transform translate-y-20">
          <div className="flex items-center gap-4 transform translate-y-1/2 ml-5">
            <img
              className="bg-custom h-32 rounded-full w-auto border-4 border-white border-solid"
              src={`${sessionUser?.image}`}
              alt="profilePic"
            />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-2xl">
                {sessionUser?.name}
              </span>
              <span className="font-semibold text-gray-600 text-lg">
                @{sessionUser?.userTag}
              </span>
            </div>
          </div>
        </div>
        <HowlDisplay data={data!} userPage />
      </div>
    </PageWarp>
  )
}

export default User
