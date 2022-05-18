import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'

export default function error500() {
  return (
    <Box as="main" my={'270px'}>
      <Heading
        as="h1"
        bgGradient="linear(to-l, black, brand.400,brand.600, brand.300, brand.500,brand.300,brand.400, brand.600, brand.500, brand.400, brand.300,brand.600, black)"
        bgClip="text"
        fontWeight="900"
        lineHeight={1.2}
        textAlign="center"
        fontSize={useBreakpointValue({ base: '5xl', sm: '3xl', md: '3xl' })}
        fontStyle={'italic'}
        mb="3"
      >
        500 - ERROR DEL SERVIDOR
      </Heading>
    </Box>
  )
}
