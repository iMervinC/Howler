import React, { FC } from 'react'
import { HowlT } from '@/types/Howl.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import HowlPopover from './UI/HowlPopover'
import { useSessionUser } from '@/hooks/useSessionUser'

const Howl: FC<HowlT> = ({ howl, user, createdAt, _id }) => {
  const postedAt = new Date(createdAt!).toLocaleDateString()
  const [sessionUser] = useSessionUser()

  return (
    <div className="h-auto bg-custom w-11/12 p-4 rounded-md text-white relative">
      {sessionUser?.userTag === user.userTag && (
        <HowlPopover howlId={_id!}>
          <div className="absolute right-2 top-2 cursor-pointer">
            <FontAwesomeIcon icon={faEllipsisV} width="20" />
          </div>
        </HowlPopover>
      )}
      <div className="flex items-center gap-2 font-semibold">
        <img
          className="rounded-full w-9 h-auto border-2 border-white border-solid"
          src={user.image}
          alt="User"
        />
        <div className="flex flex-col">
          <span>{user.name}</span>
          <div className="font-thin text-sm">
            <span>@{user.userTag}</span>
            <span>{` • ${postedAt}`}</span>
          </div>
        </div>
      </div>
      <div className="mx-10">
        <span>{howl}</span>
      </div>
    </div>
  )
}

export default Howl
