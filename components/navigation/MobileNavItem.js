import { Flex, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'

function MobileNavItem({ label, href }) {
  const { onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        as={Link}
        py={2}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600}>{label}</Text>
      </Flex>
    </Stack>
  )
}

export default MobileNavItem
