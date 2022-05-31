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

import { FiDatabase, FiCalendar, FiUsers } from 'react-icons/fi'
import { FaRunning, FaArrowRight } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import SimpleSidebar, { SidebarContent } from '../../components/user/Sidebar'
import UserList from '../../components/user/UserList'
import UserCalendar from '../../components/user/UserCalendar'
import UserInfo from '../../components/user/UserInfo'
import UserProgress from '../../components/user/UserProgress'
import TestsForm from '../../components/user/tests/TestsForm'
import { URL } from '../../constants/URL'
import UserCreateForm from '../../components/user/UserCreateForm'


export default function UserPage({ user, users, testsUser }) {
  const { data: session } = useSession()
  const linkItems = [
    {
      name: 'Usuarios',
      icon: FiUsers,
      viewForTrainer: true,
      view: <UserList users={users} />
    },
    {
      name: 'Datos personales',
      icon: FiDatabase,
      view: <UserInfo user={user} />
    },
    {
      name: 'Calendario',
      icon: FiCalendar,
      view: <UserCalendar />
    },
    {
      name: 'Mi progreso',
      icon: FaRunning,
      view: <UserProgress tests={testsUser}/>
    },
    {
      name: 'Crear test',
      icon: AiOutlinePlus,
      viewForTrainer: true,
      view: <TestsForm id={user.id} />,

    },
    {
      name: 'Crear usuario',
      icon: AiOutlinePlus,
      view: <UserCreateForm />,
      viewForTrainer: true

    }
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLessThan768px] = useMediaQuery('(min-width: 768px)')
  return (
    <Box as="main">
      <Tabs
        defaultIndex={0}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        variant="unstyled"
      >
        <TabList marginTop={'100px'}>
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
        <TabPanels
          minHeight="calc(100vh - var(--chakra-sizes-header))"
          py={{ base: '3rem', md: '10rem' }}
        >
          {linkItems.map(({ name, view, viewForTrainer, modal }) => {
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
        variant="ghost"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FaArrowRight />}
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

  const [userRes, usersRes, testUserRes, testRes] = await Promise.all([
    fetch(`${URL}/api/user/${id}`),
    fetch(`${URL}/api/user`),
    fetch(`${URL}/api/tests/user/${id}`),
    fetch(`${URL}/api/tests`)
  ])



  
  
  const [{ user }, users,  tests,  testsUser] = await Promise.all([userRes.json(), usersRes.json(), testRes.json(), testUserRes.json() ])

  console.log(testsUser)

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
      users: users,
      tests: tests,
      testsUser: testsUser
    }
  }
}
