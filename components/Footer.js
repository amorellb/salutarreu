import { useMediaQuery } from '@chakra-ui/react'
import FooterDesk from './footer/FooterDesk'
import FooterMobile from './footer/FooterMobile'

export default function LargeWithNewsletter() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 850px)')
  return <>{isLargerThan1280 ? <FooterDesk /> : <FooterMobile />}</>
}
