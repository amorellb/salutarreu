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
import Router from 'next/router'

function AvatarMenu(props) {
  const { user } = props

  const enterUserPage = () => {
    Router.push(`/user/${user?.id}`)
  }

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
          <Avatar size="md" src={user?.avatar} />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar size={'2xl'} src={user?.avatar} />
          </Center>
          <br />
          <Center>
            <p>{user?.name}</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem onClick={enterUserPage}>Account Settings</MenuItem>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default AvatarMenu
