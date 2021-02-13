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
import { signOut, useSession } from 'next-auth/client'

const UserNav = () => {
  const [session] = useSession()

  const logOutHandler = () => {
    signOut()
  }

  const shortUser = (userName: string) => {
    const name = userName.split('')
    if (name.length > 8) {
      return name.slice(0, 16).join('').padEnd(19, '.')
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-start gap-2 h-14 mt-auto mb-3 sm:mx-2 sm:px-5  cursor-pointer hover-shadow">
          <img
            src={`${session?.user.image}`}
            alt="User Picture"
            className="rounded-full w-9 h-auto"
          />
          <div className="sm:flex flex-col hidden">
            <span className="font-semibold">
              {shortUser(session?.user.name!)}
            </span>
            <span className="text-sm">@userHandle</span>
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
              <span className="font-semibold">Psycho Goreman</span>
              <span className="text-sm">@PychoGoreman</span>
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
