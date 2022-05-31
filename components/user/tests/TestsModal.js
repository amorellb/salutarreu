import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Icon
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'

import FormTests from './TestsForm'

export default function TestsModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="green" variant="outline" size="sm" onClick={onOpen}>
        {' '}
        <Icon as={AiOutlinePlus} fontSize="20" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {' '}
            <FormTests id={props.id} />{' '}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
