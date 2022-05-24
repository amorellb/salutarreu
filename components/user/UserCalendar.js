import { Container, Heading } from '@chakra-ui/react'

export default function UserCalendar() {
  return (
    <Container as={'main'} textAlign="center">
      <Heading
        as={'h1'}
        fontStyle="italic"
        lineHeight={1.1}
        fontSize={{ base: '5xl', lg: '6xl' }}
        bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
        bgClip="text"
      >
        Próximamente!
      </Heading>
    </Container>
  )
}
