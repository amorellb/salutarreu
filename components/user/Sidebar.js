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
        <Avatar size="xl" name={user?.name} src={user?.avatar} />
        <Text fontSize="xl" fontWeight="bold" mt={4} w="max-content">
          {user?.name}
        </Text>
      </VStack>
      <VStack alignItems={'flex-start'} flexDirection="column">
        {linkItems.map(({ name, icon, viewForTrainer }) => {
          return viewForTrainer ? (
            user?.role === 'TRAINER' && (
              <NavItem key={name} id={name} icon={icon} onClose={onClose}>
                {name}
              </NavItem>
            )
          ) : (
            <NavItem key={name} id={name} icon={icon} onClose={onClose}>
              {name}
            </NavItem>
          )
        })}
      </VStack>
    </VStack>
  )
}

const NavItem = ({ onClose, icon, children, name, ...rest }) => {
  return (
    <Tab
      onClick={onClose}
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
