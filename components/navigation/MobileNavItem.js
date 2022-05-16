import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

function MobileNavItem({ label, href, onClose }) {

  return (
    <Box spacing={4} onClick={onClose} >
      <Link href={href} passHref>
        <Flex
          _hover={{ textDecoration: 'none' }}
        >
          <Text fontWeight={600} color={'brand.700'} cursor={'pointer'}>{label}</Text>
        </Flex>
      </Link>
    </Box>
  )
}

export default MobileNavItem
