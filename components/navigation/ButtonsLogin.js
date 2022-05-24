import { Button } from '@chakra-ui/react'
import Link from 'next/link'
function ButtonsLogin() {
  return (
    <Link href={'/sign-in'} passHref>
      <Button
        as={'a'}
        size="sm"
        fontSize={{ base: 'sm', md: 'lg' }}
        fontWeight={400}
        variant={'outline'}
        colorScheme={'brand'}
        p={{ base: '0.2rem', sm: '1.2rem' }}
      >
        Iniciar sesión
      </Button>
    </Link>
  )
}

export default ButtonsLogin
