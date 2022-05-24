import { Box, Container, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import FooterDesk from './footer/FooterDesk'
import FooterMobile from './footer/FooterMobile'

export default function LargeWithNewsletter() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 850px)')

  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container maxW={'6xl'} py={10}>
        {isLargerThan1280 ? <FooterDesk /> : <FooterMobile />}
      </Container>
    </Box>
  )
}
