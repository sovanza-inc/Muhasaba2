import React from 'react'
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  Text,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

interface OrgSelectorProps {
  orgName: string
}

export function OrgSelector({ orgName }: OrgSelectorProps) {
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        height="full"
        px={4}
        _hover={{ bg: hoverBg }}
        minW="200px"
      >
        <Flex align="center" gap={3}>
          <Avatar 
            name={orgName} 
            size="sm"
            bg="blue.500"
            color="white"
            fontWeight="medium"
          />
          <Box flex="1">
            <Text 
              fontSize="sm" 
              fontWeight="medium" 
              textAlign="left"
              noOfLines={1}
            >
              {orgName}
            </Text>
            <Text 
              fontSize="xs" 
              color="gray.500"
              textAlign="left"
            >
              Organization
            </Text>
          </Box>
          <Box as={FiChevronDown} color="gray.500" flexShrink={0} />
        </Flex>
      </MenuButton>
    </Menu>
  )
} 