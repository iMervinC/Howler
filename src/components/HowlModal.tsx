import TextHowl from '@/components/Home/TextHowl'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const HowlModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex justify-center h-auto gap-5 mt-10 mb-5">
            <img className="self-start" src="/pic1.svg" alt="profilePic" />
            <TextHowl modal />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default HowlModal
