
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
  } from '@chakra-ui/react'

  import FormTests from './TestsForm'
  
  export default function TestsModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
  
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}> <FormTests/> </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  