import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useSessionUser } from '@/hooks/useSessionUser'
import { HowlT } from '@/types/Howl.model'
import HowlPopover from './UI/HowlPopover'
import { howlAnim } from '@/utils/animations'

const Howl: FC<HowlT> = ({ howl, user, createdAt, _id }) => {
  const postedAt = new Date(createdAt!).toLocaleDateString()
  const [sessionUser] = useSessionUser()

  return (
    <motion.div
      variants={howlAnim}
      initial="hidden"
      animate="visble"
      exit="exit"
      layout
      className="howl"
    >
      {sessionUser?.userTag === user.userTag && (
        <HowlPopover howlId={_id!}>
          <FontAwesomeIcon icon={faEllipsisV} className="w-2 h-auto" />
        </HowlPopover>
      )}
      <Link href="/[user]" as={`/${user.userTag}`}>
        <span className="flex items-center gap-2 font-semibold cursor-pointer mr-10">
          <img
            className="rounded-full w-9 h-auto border-2 border-white border-solid "
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
        </span>
      </Link>
      <div className="mt-4 mx-10 py-2 border-solid border-t border-white">
        <span>{howl}</span>
      </div>
    </motion.div>
  )
}

export default Howl
