import * as React from "react";
import { Table } from "react-chakra-pagination";
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading
} from "@chakra-ui/react";
import { FiTrash2, FiUser } from "react-icons/fi";

export default function UserList({ users }) {
  console.log(users);
  const [page, setPage] = React.useState(1);

  const tableData = users.map((user) => ({
    name: (
      <Flex align="center">
        <Avatar name={user.name} src={user.avatar} size="sm" mr="4" />
        <Text>{user.name}</Text>
      </Flex>
    ),
    email: user.email,
    perfilButton: (
      <Button
        colorScheme="gray"
        onClick={() => console.log("perfil user!")}
        size="sm"
      >
        <Icon as={FiUser} fontSize="20" />
      </Button>
    ),
    deleteButton: (
      <Button
        
        backgroundColor={'red'}
        onClick={() => console.log("delete user!")}
        size="sm"
      >
        <Icon as={FiTrash2} fontSize="20" />
      </Button>
    )
  }));

  const tableColumns = [
    
    {
      Header: "Nombre",
      accessor: "name"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "",
      accessor: "perfilButton"
    }
    ,
    {
      Header: "",
      accessor: "deleteButton"
    }
  ];

  return (
    <Box p="12">
      <Heading size="md" as="h2">
        Lista de usuarios
      </Heading>

      <Box mt="6" >
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
    </Box>
  );
}

