import { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useSessionUser } from '@/hooks/useSessionUser'
import { HowlT } from '@/types/Howl.model'
import HowlPopover from './UI/HowlPopover'

const Howl: FC<HowlT> = ({ howl, user, createdAt, _id }) => {
  const postedAt = new Date(createdAt!).toLocaleDateString()
  const [sessionUser] = useSessionUser()

  return (
    <div className="howl">
      {sessionUser?.userTag === user.userTag && (
        <HowlPopover howlId={_id!}>
          <FontAwesomeIcon icon={faEllipsisV} width="20" />
        </HowlPopover>
      )}
      <Link href="/[user]" as={`/${user.userTag}`}>
        <div className="flex items-center gap-2 font-semibold cursor-pointer">
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
      </Link>
      <div className="mx-10">
        <span>{howl}</span>
      </div>
    </div>
  )
}

export default Howl
