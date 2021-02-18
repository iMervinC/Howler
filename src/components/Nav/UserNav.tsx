import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  Portal,
  PopoverBody,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/client'
import { useSessionUser } from '@/hooks/useSessionUser'

const UserNav = () => {
  const [sessionUser, session] = useSessionUser()

  const logOutHandler = () => {
    signOut()
  }

  const shortUser = (userName: string) => {
    if (userName.length > 16) {
      const name = userName.split('')
      return name.slice(0, 16).join('').padEnd(19, '.')
    } else {
      return userName
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-start gap-2 h-14 mt-auto mb-3 sm:mx-2 sm:px-5  cursor-pointer hover-shadow">
          <img
            src={`${sessionUser?.image}`}
            alt="User Picture"
            className="rounded-full w-9 h-auto"
          />
          <div className="sm:flex flex-col hidden">
            <span className="font-semibold">
              {shortUser(sessionUser?.name!)}
            </span>
            <span className="text-sm">{`@${sessionUser?.userTag}`}</span>
          </div>
          <FontAwesomeIcon
            icon={faEllipsisH}
            width="20"
            className="ml-auto hidden sm:block"
          />
        </div>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            <div className="flex flex-col">
              <span className="font-semibold">{sessionUser?.name}</span>
              <span className="text-sm">{`@${sessionUser?.userTag}`}</span>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <div
              onClick={logOutHandler}
              className="cursor-pointer hover:text-blue-500 hover:bg-blue-200"
            >
              Log out User
            </div>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default UserNav
