import { HowlUser } from '@/types/Howl.model'
import React, { FC } from 'react'

const HowlUserInfo: FC<{ user: HowlUser; isLoading: boolean }> = ({
  user,
  isLoading,
}) => {
  return (
    <div className="h-32 bg-black ">
      <div className="flex items-center gap-4 transform translate-y-1/2 ml-5">
        {!isLoading ? (
          <>
            <img
              className="bg-custom h-32 rounded-full w-32 border-4 border-white border-solid"
              src={`${user?.image}`}
              alt={user?.userTag}
            />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white text-2xl">
                {user?.name}
              </span>
              <span className="font-semibold text-gray-600 text-lg">
                @{user?.userTag}
              </span>
            </div>
          </>
        ) : (
          <div className="bg-custom h-32 rounded-full w-32 border-4 border-white border-solid" />
        )}
      </div>
    </div>
  )
}

export default HowlUserInfo
