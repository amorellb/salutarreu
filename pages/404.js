import { Container, Heading } from '@chakra-ui/react'

export default function error404() {
  return (
    <Container as="main" h={'65.5vh'} display='flex' alignItems={'center'} justifyContent={'center'}>
      <Heading
        as="h1"
        bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
        bgClip="text"
        fontWeight="900"
        lineHeight={1.2}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        404 - PÁGINA NO ENCONTRADA
      </Heading>
    </Container>
  )
}
