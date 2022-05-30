import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
export const CookiesModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      blockScrollOnMount={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
          <ModalHeader>Esta página utiliza cookies</ModalHeader>
          <Text>
            Las cookies de este sitio web son puramente técnicas y necesarias
            para el correcto funcionamiento del mismo.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              // Cookie con un mes de expiración :)
              document.cookie = 'cookies-consent=true; max-age=2629743; path=/'
              onClose()
            }}
          >
            Aceptar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
