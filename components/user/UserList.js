
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

const users = [
  {
    id: 1,
    name: "Carlin Gwinn",
    email: "cgwinn0@buzzfeed.com",
    phone: "(684) 9842794",
    birthday: "04/11/2009",
    avatar_url:
      "https://robohash.org/assumendanihilodio.png?size=50x50&set=set1"
  },
  {
    id: 2,
    name: "Yetta Snape",
    email: "ysnape1@princeton.edu",
    phone: "(645) 8617506",
    birthday: "06/08/1989",
    avatar_url:
      "https://robohash.org/liberorationequasi.png?size=50x50&set=set1"
  },
];

export default function UserList(user) {
  const [page, setPage] = React.useState(1);

  // Formatter for each user
  const tableData = users.map((user) => ({
    name: (
      <Flex align="center">
        <Avatar name={user.name} src={user.avatar_url} size="sm" mr="4" />
        <Text>{user.name}</Text>
      </Flex>
    ),
    email: user.email,
    phone: user.phone,
    birthday: user.birthday,
    action: (
      <Button
        colorScheme="gray"
        onClick={() => console.log("remove user!")}
        size="sm"
      >
        <Icon as={FiTrash2} fontSize="20" />
      </Button>
    )
  }));

  // Accessor to get a data in user object
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" 
    },
    {
      Header: "Email",
      accessor: "email" 
    },
    {
      Header: "Phone",
      accessor: "phone" 
    },
    {
      Header: "Birthday",
      accessor: "birthday" 
    },
    {
      Header: "",
      accessor: "action" 
    }
  ];

  return (
    <Box p="12">
      <Heading size="sm" as="h3">
        List of Users
      </Heading>

      <Box mt="6">
        <Table
          colorScheme="blue"
          // Fallback component when list is empty
          emptyData={{
            icon: FiUser,
            text: "Nobody is registered here."
          }}
          totalRegisters={users.length}
          page={page}
          // Listen change page event and control the current page using state
          onPageChange={(page) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
}

