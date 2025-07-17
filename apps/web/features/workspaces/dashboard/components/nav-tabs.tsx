'use client'

import { Box, Button, Flex, Tab, TabList, Tabs, Text, useColorModeValue } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

interface NavTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  const tabColor = useColorModeValue('gray.600', 'gray.400')
  const activeTabColor = useColorModeValue('blue.500', 'blue.300')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Flex align="center" justify="space-between" borderBottom="1px" borderColor={borderColor}>
      <Tabs 
        index={['default', 'getting-started', 'announcements', 'updates'].indexOf(activeTab)}
        onChange={(index) => onTabChange(['default', 'getting-started', 'announcements', 'updates'][index])}
        colorScheme="blue"
      >
        <TabList border="none">
          <Tab color={tabColor} _selected={{ color: activeTabColor, borderColor: activeTabColor }}>
            Default Dashboard
          </Tab>
          <Tab color={tabColor} _selected={{ color: activeTabColor, borderColor: activeTabColor }}>
            Getting Started
          </Tab>
          <Tab color={tabColor} _selected={{ color: activeTabColor, borderColor: activeTabColor }}>
            <Flex align="center">
              Announcements
              <Box
                ml={2}
                px={1.5}
                py={0.5}
                borderRadius="full"
                fontSize="xs"
                bg="blue.50"
                color="blue.700"
              >
                7
              </Box>
            </Flex>
          </Tab>
          <Tab color={tabColor} _selected={{ color: activeTabColor, borderColor: activeTabColor }}>
            Recent Updates
          </Tab>
        </TabList>
      </Tabs>
      
      <Button
        size="sm"
        variant="ghost"
        color="blue.500"
        leftIcon={<FiPlus />}
        mr={6}
        _hover={{ bg: 'transparent' }}
      >
        New Dashboard
      </Button>
    </Flex>
  )
} 