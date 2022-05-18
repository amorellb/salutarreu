/* eslint-disable array-callback-return */
import { getSession, useSession } from 'next-auth/react'

import {
  Box,
  Flex,
  IconButton,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'

import { FiDatabase, FiCalendar, FiUsers, FiMenu } from 'react-icons/fi'
import { FaRunning } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import SimpleSidebar, { SidebarContent } from '../../components/user/Sidebar'
import UserList from '../../components/user/UserList'
import UserCalendar from '../../components/user/UserCalendar'
import UserInfo from '../../components/user/UserInfo'
import UserTests from '../../components/user/UserTests'
import TestsForm from '../../components/user/tests/TestsForm'
import { URL } from '../../constants/URL'

function UserPage({ user, users }) {
  console.log(user)
  const { data: session } = useSession()
  const linkItems = [
    {
      name: 'Datos personales',
      icon: FiDatabase,
      view: <UserInfo user={user} />
    },
    {
      name: 'Usuarios',
      icon: FiUsers,
      viewForTrainer: true,
      view: <UserList users={users} />
    },
    {
      name: 'Calendario',
      icon: FiCalendar,
      view: <UserCalendar />
    },
    {
      name: 'Mi progreso',
      icon: FaRunning,
      view: <UserTests />
    },
    {
      name: 'Crear test',
      icon: AiOutlinePlus,
      view: <TestsForm />,
      modal: 'onOpen'
    }
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLessThan768px] = useMediaQuery('(min-width: 768px)')
  return (
    <Box as="main">
      <Tabs
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        variant="unstyled"
      >
        <TabList>
          {isLessThan768px ? (
            <SidebarContent linkItems={linkItems} user={user}></SidebarContent>
          ) : (
            <SimpleSidebar
              isOpen={isOpen}
              onClose={onClose}
              linkItems={linkItems}
              user={user}
            />
          )}
        </TabList>
        <MobileNav
          onOpen={onOpen}
          user={user}
          display={{ base: 'flex', md: 'none' }}
        />
        <TabPanels minHeight="calc(100vh - var(--chakra-sizes-header))">
          {linkItems.map(({ name, view, viewForTrainer, modal }) => {
            // hay un problema si se usa ternarias por el indice de la posición de las tabs.
            if (viewForTrainer) {
              if (
                session?.user?.role === 'TRAINER' &&
                user?.id === session?.user?.id
              ) {
                return (
                  <TabPanel key={name} aria-labelledby={name}>
                    {view || <></>}
                  </TabPanel>
                )
              }
            } else {
              return (
                <TabPanel key={name} aria-labelledby={name}>
                  {view || <></>}
                </TabPanel>
              )
            }
          })}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

const MobileNav = ({ onOpen, user, ...rest }) => {
  return (
    <Flex
      px="5"
      w={'full'}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        flex={1}
        textAlign="center"
      >
        {user?.name}
      </Text>
    </Flex>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  const { id } = context.query
  console.log('recuperando datos de servidor: ', session)
  const [userRes, usersRes] = await Promise.all([
    fetch(`${URL}/api/user/${id}`),
    fetch(`${URL}/api/user`)
  ])
  const [{ user }, users] = await Promise.all([userRes.json(), usersRes.json()])

  if (
    !user ||
    (session?.user?.id !== user.id && session?.user?.role !== 'TRAINER')
  ) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      user: user,
      users: users
    }
  }
}
export default UserPage
