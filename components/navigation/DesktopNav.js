import { Box, Link, Stack } from '@chakra-ui/react'

import { NAV_ITEMS } from './navItems'

function DesktopNav() {
  return (
    <Stack as={'nav'} direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Link
            href={navItem.href ?? '#'}
            fontSize={'md'}
            fontWeight={500}
            _hover={{ textDecoration: 'none' }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
