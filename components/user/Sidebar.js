import {
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  Avatar,
  Tab,
  VStack,
  DrawerCloseButton
} from '@chakra-ui/react'

export default function SimpleSidebar({ isOpen, onClose, linkItems, user }) {
  return (
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
    >
      <DrawerContent>
        <DrawerCloseButton />
        <SidebarContent onClose={onClose} linkItems={linkItems} user={user} />
      </DrawerContent>
    </Drawer>
  )
}

export const SidebarContent = ({ onClose, linkItems, user, ...rest }) => {
  return (
    <VStack
      flexDirection="column"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      h="full"
      p={'1.5rem 1rem'}
      {...rest}
    >
      <VStack alignItems="center" justifyContent="center">
        <Avatar
          size="xl"
          name={user?.name}
          src={user?.avatar}
          /* _before={{ NOTA: veo que es un efecto por la parte de arriba del avatar, pero no se ve en ciertas ocaciones, lo comento por si alguien quiere hacerlo
            content: '""',
            width: 'full',
            height: 'full',
            rounded: 'full',
            transform: 'scale(1.125)',
            bgGradient: 'linear(to-bl, brand.300,brand.600)',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0
          }} */
        />
        <Text fontSize="xl" fontWeight="bold" mt={4} w="max-content">
          {user?.name}
        </Text>
      </VStack>
      <VStack alignItems={'flex-start'} flexDirection="column">
        {linkItems.map(({ name, icon, viewForTrainer }) => {
          return viewForTrainer ? (
            user?.role === 'TRAINER' && (
              <NavItem key={name} id={name} icon={icon}>
                {name}
              </NavItem>
            )
          ) : (
            <NavItem key={name} id={name} icon={icon}>
              {name}
            </NavItem>
          )
        })}
      </VStack>
    </VStack>
  )
}

const NavItem = ({ icon, children, name, ...rest }) => {
  return (
    <Tab
      role="tab"
      display={'flex'}
      align="center"
      borderRadius="lg"
      wordBreak={'revert'}
      cursor="pointer"
      px="1.5rem"
      my="0.25rem"
      whiteSpace={'nowrap'}
      aria-labelledby={name}
      sx={{
        '&:hover': {
          bg: 'gray.100'
        },
        "&[aria-selected='true']:hover": {
          bg: 'brand.500'
        }
      }}
      _selected={{
        bg: 'brand.500',
        color: 'white'
      }}
      _focus={{ boxShadow: 'none' }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white'
          }}
          as={icon}
        />
      )}
      {children}
    </Tab>
  )
}
