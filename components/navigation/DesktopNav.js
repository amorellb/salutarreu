import { Box, Stack } from '@chakra-ui/react'
import Link from 'next/link'

import { NAV_ITEMS } from './navItems'

function DesktopNav() {
  return (
    <Stack as={'nav'} direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Link key={navItem.label} href={navItem.href} passHref>
          <Box
            cursor={'pointer'}
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight={500}
            _hover={{ textDecoration: 'none' }}
          >
            {navItem.label}
          </Box>
        </Link>
      ))}
    </Stack>
  )
}

export default DesktopNav
