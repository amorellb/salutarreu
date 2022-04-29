import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Avatar,
  MenuDivider,
  Center
} from '@chakra-ui/react'
import { signOut } from 'next-auth/react'

function AvatarMenu(props) {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar size={'lg'} src={props.user.user.image} />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar size={'2xl'} src={props.user.user.image} />
          </Center>
          <br />
          <Center>
            <p>{props.user.user.name}</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Account Settings</MenuItem>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default AvatarMenu
