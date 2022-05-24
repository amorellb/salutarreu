import { Stack } from '@chakra-ui/react'

import { NAV_ITEMS } from './navItems'
import MobileNavItem from './MobileNavItem'

function MobileNav({onClose}) {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}
    </Stack>
  )
}

export default MobileNav
