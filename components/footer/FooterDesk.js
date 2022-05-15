import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import Logo from '../Logo'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Box display={'flex'} justifyContent={'space-around'}>
          <Logo
            imageFile="/images/logo/logotip/logotip_fonstransparent.png"
            width={'300px'}
            color={useColorModeValue('gray.700', 'white')}
          />
          <Box w={'50%'} mt={'20px'}>
            <ListHeader>No te pierdas ninguna noticia!</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300'
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600'
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Box>
        </Box>
        <Box as={'section'} display={'flex'} flexDir={'row'} justifyContent='space-around' textColor={'brand.600'}>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/pricing'}>Sessiones</Link>
          <Link href={'aboutUs'}>Nosotros</Link>
          <Link href={'#'}>Preguntas frecuentes</Link>
          <Link href={'#'}>Terminos de servicio</Link>
          <Link href={'#'} px={2}>Políticas de privacidad</Link>
        </Box>
        <Box display={'flex'} py={10} justifyContent={'space-between'}>
          <Text fontSize={'sm'} ms={'1rem'}>© 2022 Salut Arreu. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
