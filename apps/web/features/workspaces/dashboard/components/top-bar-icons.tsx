import React from 'react'
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiBell, FiGrid, FiHelpCircle, FiPlus, FiSearch } from 'react-icons/fi'

export function TopBarIcons() {
  const iconColor = useColorModeValue('gray.600', 'gray.400')
  const iconHoverBg = useColorModeValue('gray.100', 'gray.600')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Flex gap={1} align="center" ml="auto" pr={4}>
      <IconButton
        aria-label="Search"
        icon={<FiSearch size={20} />}
        variant="ghost"
        color={iconColor}
        size="sm"
        _hover={{ bg: iconHoverBg }}
      />
      <IconButton
        aria-label="Add New"
        icon={<FiPlus size={20} />}
        variant="ghost"
        color={iconColor}
        size="sm"
        _hover={{ bg: iconHoverBg }}
      />
      <IconButton
        aria-label="Apps"
        icon={<FiGrid size={20} />}
        variant="ghost"
        color={iconColor}
        size="sm"
        _hover={{ bg: iconHoverBg }}
      />
      <IconButton
        aria-label="Notifications"
        icon={<FiBell size={20} />}
        variant="ghost"
        color={iconColor}
        size="sm"
        _hover={{ bg: iconHoverBg }}
      />
      <IconButton
        aria-label="Help"
        icon={<FiHelpCircle size={20} />}
        variant="ghost"
        color={iconColor}
        size="sm"
        _hover={{ bg: iconHoverBg }}
      />
      <Box w="1px" h="24px" bg={borderColor} mx={2} />
      <Menu>
        <MenuButton>
          <Avatar 
            size="sm"
            name="User"
            src="/img/onboarding/user-avatar.png"
          />
        </MenuButton>
      </Menu>
    </Flex>
  )
} 