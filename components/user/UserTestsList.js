import * as React from 'react'
import { Table } from 'react-chakra-pagination'
import {
  Flex,
  Text,
  Box,
  Heading,
  useMediaQuery,
  Button,
  useToast,
} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'
import { useRouter } from 'next/router';
import { AiFillDelete } from 'react-icons/ai';
import Moment from 'moment';

export default function UserTestsList({ tests, userSession }) {
  const [page, setPage] = React.useState(1)
  const router = useRouter()
  const toast = useToast()
  const [isLessThan900px] = useMediaQuery('(min-width: 900px)')

  const removeTest = async id => {
    const response = await fetch(`/api/tests/${id}`, {
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
      title: 'Test eliminado',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }

  const tableData = tests
    .map(test => ({
      name: (
        <Flex align="center" key={test.id} >
          <Text fontSize={'small'}>{test.name.toUpperCase()}</Text>
        </Flex>
      ),
      type: (
        <Flex key={test.id}>
          <Text fontSize={'small'}>{test.type.toUpperCase()}</Text>
        </Flex>
      ),
      date: (
        <Flex key={test.id}>
          <Text>{Moment(test.date).format('DD-MM-YYYY')}</Text>
        </Flex>
      ),
      result: (
        <Flex key={test.id}>
          <Text>{test.result}</Text>
        </Flex>
      ),
      button: (
        <Box>
          {userSession?.role === 'TRAINER' ? (
            <Button key={test.id} bg="red.400" onClick={() => removeTest(test.id)}>
              <AiFillDelete />
            </Button>
          ) : (null)}

        </Box>
      )
    }))

  const tableDataSmall = tests
    .map(test => ({
      data: (
        <Box textalign="center" p={0} key={test.id}>
          <Text fontSize={'small'}>{test.name.toUpperCase()}</Text>
          <Text fontSize={'small'}>{test.type.toUpperCase()}</Text>
          <Text fontSize={'small'}>{Moment(test.date).format('DD-MM-YYYY')}</Text>
        </Box>
      ),
      result: (
        <Box align="center" p={0} key={test.id}>
          <Text fontSize={'small'}>{test.result}</Text>
        </Box>
      ),

      button: (
        <Box>
          {userSession?.role === 'TRAINER' ? (
            <Button key={test.id} bg="red.400" size={'sm'} onClick={() => removeTest(test.id)}>
              <AiFillDelete />
            </Button>
          ) : (null)}
        </Box>
      )
    }))

  const tableColumns = [
    {
      Header: 'Test',
      accessor: 'name'
    },
    {
      Header: 'Tipo',
      accessor: 'type'
    },
    {
      Header: 'Fecha',
      accessor: 'date'
    },
    {
      Header: 'Resultado',
      accessor: 'result'
    },
    {
      Header: '',
      accessor: 'button'
    }
  ]

  const tableColumnsMobile = [
    {
      Header: 'Test',
      accessor: 'data'
    },
    {
      Header: 'Resultado',
      accessor: 'result'
    },
    {
      Header: '',
      accessor: 'button'
    }
  ]

  return (
    <Box as='main'>
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
        Lista de Tests
      </Heading>

      {isLessThan900px ? (
        <Box>
          <Table
            emptyData={{
              icon: FiUser,
              text: 'Este usuario no tiene tests.'
            }}
            totalRegisters={tests.length}
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
              text: 'Este usuario no tiene tests.'
            }}
            totalRegisters={tests.length}
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