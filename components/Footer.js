import {
  Box,
  Container,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FooterDesk from './footer/FooterDesk'
import FooterMobile from './footer/FooterMobile'

export default function LargeWithNewsletter() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 850px)')
  const [isLargerThan1280px, setIsLargerThan1280px] = useState(false)
  useEffect(() => {
    setIsLargerThan1280px(isLargerThan1280)
  }, [isLargerThan1280])

  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container maxW={'6xl'} py={10}>
        {isLargerThan1280px ? <FooterDesk /> : <FooterMobile />}
      </Container>
    </Box>
  )
}
