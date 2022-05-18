import { Container, Heading } from '@chakra-ui/react'

export default function UserCalendar() {
  return (
    <Container as={'main'} py={'8rem'}>
      <Heading
        as="h1"
        lineHeight={1.1}
        fontSize={{ base: '5xl', lg: '6xl' }}
        bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
        bgClip="text"
      >
        Próximamente!
      </Heading>
    </Container>
  )
}
