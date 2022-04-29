import {
  Image,
  Link,
  Flex,
  Stack,
  Box,
  useDisclosure,
  IconButton,
  Collapse
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import DesktopNav from './navigation/DesktopNav'
import MobileNav from './navigation/MobileNav'
import { useSession } from 'next-auth/react'
import ButtonsLogin from './navigation/ButtonsLogin'
import AvatarMenu from './navigation/AvatarMenu'



function Header() {
  const { isOpen, onToggle } = useDisclosure()

const {data: session, status}= useSession()




  return (
    <Box as="header">
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            <Image
              width="200px"
              src="/images/logo/logotip/logotip_fonstransparent.png"
              alt="Corporative logo image"
            />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} align={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
     
       
     
         {status ==="authenticated"? <AvatarMenu user={session}/> : <ButtonsLogin/>}

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Header
