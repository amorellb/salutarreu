import * as React from 'react'
import { Table } from 'react-chakra-pagination'
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
  useMediaQuery,
  ButtonGroup,
  useToast
} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import Router, { useRouter } from 'next/router'

import TestsModal from './tests/TestsModal'

export default function UserList({ users, userSession }) {
  const [page, setPage] = React.useState(1)
  const [isLessThan900px] = useMediaQuery('(min-width: 900px)')
  const toast = useToast()
  const router = useRouter()
  const goToUserProfile = id => {
    Router.push(`/user/${id}`)
  }
  const removeUser = async id => {
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
    router.replace(router.asPath)
    toast({
      title: 'Usuario eliminado',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }

  const tableData = users
    .filter(user => user.id !== userSession.id)
    .map(user => ({
      name: (
        <Flex align="center">
          <Avatar name={user.name} src={user.avatar} size="md" mr="4" />
          <Text fontSize={'small'}>{user.name.toUpperCase()}</Text>
        </Flex>
      ),
      email: (
        <Flex>
          <Text>{user.email}</Text>
        </Flex>
      ),
      perfilButton: (
        <ButtonGroup size="sm">
          <Button colorScheme="gray" onClick={() => goToUserProfile(user.id)}>
            <Icon as={FiUser} fontSize="20" />
          </Button>
          <TestsModal user={user} />
          <Button bg="red.400" onClick={() => removeUser(user.id)}>
            <AiFillDelete />
          </Button>
        </ButtonGroup>
      )
    }))

  const tableDataSmall = users.map(user => ({
    name: (
      <Box align="center" p={0}>
        <Avatar name={user.name} src={user.avatar} size="md" mb={3} />
        <Text fontSize={'small'}>{user.name.toUpperCase()}</Text>
        <Text fontSize={'small'} mb={3}>{user.email}</Text>
        <ButtonGroup mb={1}>
          <Button size={'sm'} onClick={() => goToUserProfile(user.id)}>
            <Icon as={FiUser} />
          </Button>
          <TestsModal user={user} />
          <Button bg="red.400" size={'sm'} onClick={() => removeUser(user.id)}>
            <AiFillDelete />
          </Button>
        </ButtonGroup>
      </Box>
    )
  }))

  const tableColumns = [
    {
      Header: '',
      accessor: 'name'
    },
    {
      Header: '',
      accessor: 'email'
    },
    {
      Header: '',
      accessor: 'perfilButton'
    }
  ]

  const tableColumnsMobile = [
    {
      Header: '',
      accessor: 'name'
    }
  ]

  return (
    <Box as={'main'} overflow={'auto'}>
      <Heading
        display={'flex'}
        justifyContent={'center'}
        as={'h1'}
        fontStyle="italic"
        lineHeight={1.1}
        fontSize={{ base: '5xl', lg: '6xl' }}
        bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
        bgClip="text"
      >
        Lista de usuarios
      </Heading>

      {isLessThan900px ? (
        <Box>
          <Table
            emptyData={{
              icon: FiUser,
              text: 'Nobody is registered here.'
            }}
            totalRegisters={users.length}
            page={page}
            onPageChange={page => setPage(page)}
            columns={tableColumns}
            data={tableData}
          />
        </Box>
      ) : (
        <Box p={'0px'}>
          <Table
            emptyData={{
              icon: FiUser,
              text: 'Nobody is registered here.'
            }}
            totalRegisters={users.length}
            page={page}
            onPageChange={page => setPage(page)}
            columns={tableColumnsMobile}
            data={tableDataSmall}
          />
        </Box>
      )}
    </Box>
  )
}
