import * as React from "react";
import { Table } from "react-chakra-pagination";
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading,
  useMediaQuery
} from "@chakra-ui/react";
import { FiTrash2, FiUser } from "react-icons/fi";
import Router from "next/router";

export default function UserList({ users }) {
  const [page, setPage] = React.useState(1);
  const [isLessThan900px] = useMediaQuery('(min-width: 900px)')

  const goToUserProfile = (id) => {
    Router.push(`/user/${id}`)
  }

  const deleteUser = (id) => {

  }

  const tableData = users.map((user) => ({
    name: (
      <Flex align="center">
        <Avatar name={user.name} src={user.avatar} size="md" mr="4" />
        <Text fontSize={'small'}>{(user.name).toUpperCase()}</Text>
      </Flex>
    ),
    email: (
      <Flex>
        <Text>{user.email}</Text>
      </Flex>
    ),
    perfilButton: (
      <Flex>
        <Button
          colorScheme="gray"
          onClick={() => goToUserProfile(user.id)}
          size="sm"
          marginRight={2}
        >
          <Icon as={FiUser} fontSize="20" />
        </Button>
        <Button
          backgroundColor={'red'}
          onClick={() => deleteUser(user.id)}
          size="sm"
          _hover={{ bgColor: 'red.800' }}
        >
          <Icon as={FiTrash2} fontSize="20" />
        </Button>
      </Flex>
    ),
  }));

  const tableDataSmall = users.map((user) => ({
    name: (
      <Box align="center">
        <Avatar name={user.name} src={user.avatar} size="md" mb={2} />
        <Text fontSize={'small'}>{(user.name).toUpperCase()}</Text>
        <Text fontSize={'small'}>{user.email}</Text>
      </Box>
    ),
    perfilButton: (
      <Flex>
        <Button
          colorScheme="gray"
          onClick={() => console.log("perfil user!")}
          size="sm"
          marginRight={2}
        >
          <Icon as={FiUser} fontSize="20" />
        </Button>
        <Button
          backgroundColor={'red'}
          onClick={() => console.log("delete user!")}
          size="sm"
          _hover={{ bgColor: 'red.800' }}
        >
          <Icon as={FiTrash2} fontSize="20" />
        </Button>
      </Flex>
    ),
  }));

  const tableColumns = [
    {
      Header: "",
      accessor: "name"
    },
    {
      Header: "",
      accessor: "email"
    },
    {
      Header: "",
      accessor: "perfilButton",
    },

  ];

  return (
    <Box py="10" overflow={'auto'}>
      <Heading
        fontSize={'2xl'}
        as="h2"
        bgGradient="linear(to-r, black, brand.400,brand.600, brand.300, brand.500,brand.300,brand.400, brand.600, brand.500, brand.400, brand.300,brand.600, black)"
        bgClip="text" fontWeight="900"
        lineHeight={1.2}
        paddingStart={'50px'}
        fontStyle={'italic'}
      >
        Lista de usuarios
      </Heading>

      {isLessThan900px ? (
        <Box mt="6">
          <Table
            colorScheme="blue"
            emptyData={{
              icon: FiUser,
              text: "Nobody is registered here."
            }}
            totalRegisters={users.length}
            page={page}
            onPageChange={(page) => setPage(page)}
            columns={tableColumns}
            data={tableData}
          />
        </Box>
      ) : (
        <Box mt="6">
          <Table
            colorScheme="blue"
            emptyData={{
              icon: FiUser,
              text: "Nobody is registered here."
            }}
            totalRegisters={users.length}
            page={page}
            onPageChange={(page) => setPage(page)}
            columns={tableColumns}
            data={tableDataSmall}
          />
        </Box>
      )}
    </Box>
  );
}

