import { Link, Flex, Stack, Button, Spacer } from '@chakra-ui/react'

import Image from 'next/image'

function Header() {
  return (
    <Flex as="header" p={5}>
      <Link href="/">
        <Image
          src="/images/logo/logotip/logotip_fonstransparent.png"
          alt="Corporative logo image"
          width={200}
          height={75}
        />
      </Link>
      <Spacer />
      <Stack
        as="nav"
        direction="row"
        spacing={6}
        align="center"
        fontWeight="bold"
      >
        <Link href="/">Inicio</Link>
        <Link href="/sessions">Sesiones</Link>
        <Link href="/aboutUs">Nosotros</Link>
      </Stack>
      <Spacer />
      <Stack direction="row" spacing={6} align="center">
        <Button colorScheme="teal" variant="outline">
          Iniciar sesión
        </Button>
        <Button colorScheme="teal" variant="solid">
          Registrarse
        </Button>
      </Stack>
    </Flex>
  )
}

export default Header
