import {
  Box,
  chakra,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

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

export default function SmallCentered() {
  return (
    <Box as={'section'}>
      <Stack
        as={'section'}
        maxW={'6xl'}
        p={4}
        spacing={4}
        justify={'center'}
        align={'center'}
        color={'brand.600'}
      >
        <Logo
          imageFile={'/images/logo/imagotip/imagotip_fonstransparent.png'}
          width={'150px'}
        />
        <Stack direction={'row'} spacing={6} fontSize={'1rem'}>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/pricing'}>Sessiones</Link>
          <Link href={'aboutUs'}>Nosotros</Link>
        </Stack>
        <Stack direction={'row'} spacing={6} fontSize={'1rem'}>
          <Link href={'#'}>Preguntas frecuentes</Link>
          <Link href={'#'}>Terminos de Servicio</Link>
        </Stack>
        <Stack direction={'row'} spacing={6} fontSize={'1rem'}>
          <Link href={'#'}>Políticas de Privacidad</Link>
        </Stack>
      </Stack>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Stack
          as={'section'}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-around' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Salut Arreu. All rights reserved</Text>
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
        </Stack>
      </Box>
    </Box>
  )
}
