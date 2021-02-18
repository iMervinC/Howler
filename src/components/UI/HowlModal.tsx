import TextHowl from '@/components/UI/TextHowl'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { FC } from 'react'

const HowlModal: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex justify-center h-auto gap-5 mt-10 mb-5">
            <img className="self-start" src="/pic1.svg" alt="profilePic" />
            <TextHowl modal onClose={onClose} />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default HowlModal
