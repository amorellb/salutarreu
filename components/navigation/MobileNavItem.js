import { Flex, Stack, Text, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'

function MobileNavItem({ label, href }) {
  const { onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={onToggle} >
      <Link href={href} passHref>
        <Flex
          _hover={{ textDecoration: 'none' }}
        >
          <Text fontWeight={600} color={'brand.700'} cursor={'pointer'}>{label}</Text>
        </Flex>
      </Link>
    </Stack>
  )
}

export default MobileNavItem
