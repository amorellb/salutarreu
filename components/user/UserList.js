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
  useMediaQuery
} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'

import Router from 'next/router'

import TestsModal from './tests/TestsModal'

export default function UserList({ users }) {
  const [page, setPage] = React.useState(1)
  const [isLessThan900px] = useMediaQuery('(min-width: 900px)')

  const goToUserProfile = id => {
    Router.push(`/user/${id}`)
  }

  const tableData = users.map(user => ({
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
      <Flex>
        <Box>
          <Button
            colorScheme="gray"
            onClick={() => goToUserProfile(user.id)}
            size="sm"
            marginRight={2}
          >
            <Icon as={FiUser} fontSize="20" />
          </Button>
          <TestsModal user={user} />
        </Box>
      </Flex>
    )
  }))

  const tableDataSmall = users.map(user => ({
    name: (
      <Box align="center" p={0}>
        <Avatar name={user.name} src={user.avatar} size="md" mb={2} />
        <Text fontSize={'small'}>{user.name.toUpperCase()}</Text>
        <Text fontSize={'small'}>{user.email}</Text>
      </Box>
    ),
    perfilButton: (
      <Box>
        <Button
          colorScheme="gray"
          onClick={() => goToUserProfile(user.id)}
          size="sm"
          marginRight={2}
        >
          <Icon as={FiUser} fontSize="20" />
        </Button>
        <TestsModal id={user.id} />
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
    },
    {
      Header: '',
      accessor: 'perfilButton'
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
