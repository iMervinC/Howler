import { FC, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDeleteHowl, useGetHowlById } from '@/hooks/queryHooks'
import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react'
import HowlModal from '@/components/UI/HowlModal'
import TextHowl from '../TextHowl'

const HowlPopover: FC<{ howlId: string }> = ({ children, howlId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, refetch, isLoading } = useGetHowlById(howlId)

  const deleteMutation = useDeleteHowl()
  const deleteHandler = (howlId: string) => {
    deleteMutation.mutate(howlId)
  }

  const postedAt = new Date(data?.createdAt!).toLocaleDateString()

  return (
    <>
      <Popover styleConfig={{ w: '90px' }}>
        <PopoverTrigger>
          <div className="howl-trigger" onClick={() => refetch()}>
            {children}
          </div>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody className="bg-white">
              <div
                className="w-full text-custom hover:bg-custom hover:text-white cursor-pointer px-2"
                onClick={onOpen}
              >
                <FontAwesomeIcon icon={faEdit} className="h-4 inline-block" />
                <span> Edit</span>
              </div>
              <div
                className="w-full text-custom hover:bg-custom hover:text-white cursor-pointer px-2"
                onClick={() => deleteHandler(howlId)}
              >
                <FontAwesomeIcon icon={faTrash} className="h-4 inline-block" />
                <span> Delete</span>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <HowlModal isOpen={isOpen} onClose={onClose}>
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex flex-col">
            <div className="font-thin text-sm">
              <span>{`${postedAt}`}</span>
            </div>
          </div>
        </div>
        <div className="mx-10">
          <TextHowl modal onClose={onClose} howlT={data} />
        </div>
      </HowlModal>
    </>
  )
}

export default HowlPopover
