import { Button } from '@chakra-ui/react'
import Link from 'next/link'
function ButtonsLogin() {
  return (
    <Link href={'/sign-in'} passHref>
      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'outline'}
        colorScheme={'brand'}
      >
        Iniciar sesión
      </Button>
    </Link>
  )
}

export default ButtonsLogin
