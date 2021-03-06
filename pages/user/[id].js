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
  useMediaQuery,
  useToast
} from '@chakra-ui/react'

import { FiUserPlus, FiCalendar, FiUsers } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { BsClipboard } from 'react-icons/bs'
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
import { useRouter } from 'next/router'
import UserTestsList from '../../components/user/UserTestsList'

export default function UserPage({ user, users, tests, testsUser }) {
  const { data: session } = useSession()
  const toast = useToast()
  const router = useRouter()
  const linkItems = [
    {
      name: 'Usuarios',
      icon: FiUsers,
      viewForTrainer: true,
      view: <UserList users={users} userSession={session?.user} />
    },
    {
      name: 'Datos personales',
      icon: BsClipboard,
      view: <UserInfo user={user} />
    },
    {
      name: 'Calendario',
      icon: FiCalendar,
      view: <UserCalendar />
    },
    {
      name: 'Mis tests',
      icon: FaRunning,
      view: <UserTestsList tests={testsUser} userSession={session?.user} />
    },
    {
      name: 'Mi progreso',
      icon: GoGraph,
      view: <UserProgress tests={testsUser} />
    },
    {
      name: 'Crear test',
      icon: AiOutlinePlus,
      viewForTrainer: true,
      view: <TestsForm id={user.id} />
    },
    {
      name: 'Crear usuario',
      icon: FiUserPlus,
      view: <UserCreateForm />,
      viewForTrainer: true
    }
  ]

  const removeUser = async id => {
    if (window.confirm('Seguro que quieres borrar el usuario')) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE'
      }).then(res => res.json())

      if (response.code === 'P2025') {
        toast({
          title: 'Error',
          description: 'Hubo un error, contacta con un administrador',
          status: 'error',
          duration: 4000,
          isClosable: true
        })
        return
      }
      toast({
        title: 'Usuario eliminado',
        status: 'success',
        duration: 4000,
        isClosable: true
      })
      router.push(`/user/${session?.user?.id}`)
    }
  }

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
            <SidebarContent
              linkItems={linkItems}
              user={user}
              removeUser={removeUser}
              userSession={session?.user}
            ></SidebarContent>
          ) : (
            <SimpleSidebar
              isOpen={isOpen}
              onClose={onClose}
              linkItems={linkItems}
              removeUser={removeUser}
              userSession={session?.user}
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

  const [{ user }, users, tests, testsUser] = await Promise.all([
    userRes.json(),
    usersRes.json(),
    testRes.json(),
    testUserRes.json()
  ])

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
