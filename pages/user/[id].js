import { Box, Heading } from '@chakra-ui/react'
import Sidebar from '../../components/user/Sidebar'

function UserPage() {
  return (
    <Box as="main">
      <Sidebar>
        <Box as="section">
          <Heading
            as={'h2'}
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
            bgClip="text"
          >
            Listado de usuarios
          </Heading>
          Tabla con los usuarios (solo entrenado)
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
        </Box>
      </Sidebar>
    </Box>
  )
}

export default UserPage
