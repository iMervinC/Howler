import React from 'react'
import { useRouter } from 'next/router'
import PageWarp from '@/components/PageWarp'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import Howl from '@/components/Howl'

const User = () => {
  const router = useRouter()
  const { user } = router.query
  return (
    <PageWarp title="Profile">
      <BreadCrumb page="profile" />
      <div className="h-full transform -translate-y-20 overflow-auto scroll">
        <div className="h-32 bg-black transform translate-y-20">
          <div className="flex items-center gap-4 transform translate-y-1/2 ml-5">
            <img
              className=" h-32 rounded-full w-auto border-4 border-white border-solid"
              src="./pic3.svg"
              alt="profilePic"
            />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-2xl">{user}</span>
              <span className="font-semibold text-gray-600 text-lg">
                Joined at Febuary 21
              </span>
            </div>
          </div>
        </div>
        <div className="howl-wrapper transform translate-y-32">
          <Howl />
          <Howl />
          <Howl />
          <Howl />
          <Howl />
          <Howl />
        </div>
      </div>
    </PageWarp>
  )
}

export default User
