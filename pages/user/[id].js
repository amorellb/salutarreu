/* import { EditIcon } from '@chakra-ui/icons' */
import { Box, Button, Heading, /* List, ListIcon, ListItem, */ Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Sidebar from '../../components/user/Sidebar'

function UserPage() {
  return (

    <Box as="main">
      <Sidebar />
        <Box as="section">
          <Text> Si el usuario es entrenador</Text>
          <Heading
            as={'h2'}
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
            bgClip="text"
          >
            Listado de usuarios
          </Heading>

          <TableContainer my={10}>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>USUARIO</Th>
                  <Th>INFORMACIÓN</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Usuario1</Td>
                  <Td>
                    <Button variant={'solid'} colorScheme={'brand'} size='xs' me={1}>
                      Perfil
                    </Button>
                    <Button variant={'solid'} colorScheme={'brand'} size='xs' me={1}>
                      Tests
                    </Button>
                    <Button variant={'solid'} colorScheme={'brand'} size='xs' me={1}>
                      Progreso
                    </Button>
                    <Button variant={'solid'} colorScheme={'brand'} size='xs' me={1}>
                      Entrenos
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Usuario2</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Usuario3</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box as="section">
          <Heading
            as={'h2'}
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
            bgClip="text"
          >
            Entrenamientos
          </Heading>
          Calendario de sesiones

          <Text mt={10}> Si el usuario no es entrenador</Text>
          Datos personales

          {/* <List spacing={3} flexDirection={'column'}>
            <Button>
              <ListItem>
                <ListIcon as={EditIcon} color='green.500' />
                Nombre
              </ListItem>
            </Button>
            <Button>
              <ListItem>
                <ListIcon as={EditIcon} color='green.500' />
                Apellidos
              </ListItem>
            </Button>
            <Button>
              <ListItem>
                <ListIcon as={EditIcon} color='green.500' />
                Fecha Nacimiento
              </ListItem>
            </Button>
            <Button>
              <ListItem>
                <ListIcon as={EditIcon} color='green.500' />
                Email
              </ListItem>
            </Button>
            <Button>
              <ListItem>
                <ListIcon as={EditIcon} color='green.500' />
                Contraseña
              </ListItem>
            </Button>
          </List> */}

          Calendario de sus Entrenos

          Gráficos progreso
        </Box>
    </Box>
  )
}

export default UserPage
