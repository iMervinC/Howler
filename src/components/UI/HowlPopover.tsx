import { FC } from 'react'
import { useDeleteHowl } from '@/hooks/queryHooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react'

const HowlPopover: FC<{ howlId: string }> = ({ children, howlId }) => {
  const deleteMutation = useDeleteHowl()

  const deleteHandler = (howlId: string) => {
    deleteMutation.mutate(howlId)
  }

  return (
    <Popover styleConfig={{ w: '90px' }}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody className="bg-white">
            <div className="w-full text-custom hover:bg-custom hover:text-white cursor-pointer px-2">
              <FontAwesomeIcon icon={faEdit} />
              <span> Edit</span>
            </div>
            <div
              className="w-full text-custom hover:bg-custom hover:text-white cursor-pointer px-2"
              onClick={() => deleteHandler(howlId)}
            >
              <FontAwesomeIcon icon={faTrash} />
              <span> Delete</span>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default HowlPopover
