
import { Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
function ButtonsLogin() {
  return (
      <>
 <Button
    as={'a'}
    fontSize={'sm'}
    fontWeight={400}
    variant={'outline'}
    colorScheme={'brand'}
    /* href={'/sign-in'} */
    onClick={() => {
      signIn()
    }}
    >
    Iniciar sesión
    </Button>
    <Button
    display={{ base: 'none', md: 'inline-flex' }}
    fontSize={'sm'}
    fontWeight={600}
    variant={'solid'}
    colorScheme={'brand'}
    href={'/sign-up'}
    >
    Registrarse
    </Button>
      </>
   
    
  )
}

export default ButtonsLogin
