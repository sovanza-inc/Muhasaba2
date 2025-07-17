'use client'

import { Box, Button, Flex, Tab, TabList, Tabs, useColorModeValue, useBreakpointValue, Grid } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

interface NavTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  const tabColor = useColorModeValue('gray.600', 'gray.400')
  const activeTabColor = useColorModeValue('blue.500', 'blue.300')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const showNewDashboardButton = useBreakpointValue({ base: false, md: true })
  const padding = useBreakpointValue({ base: 4, md: 6 })
  const isMobile = useBreakpointValue({ base: true, md: false })

  const tabItems = [
    { id: 'default', label: 'Default Dashboard' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'announcements', label: 'Announcements', badge: '7' },
    { id: 'updates', label: 'Recent Updates' }
  ]

  const renderTabContent = (tab: typeof tabItems[0]) => (
    <Flex align="center" justify={{ base: 'center', md: 'flex-start' }} width="full">
      {tab.label}
      {tab.badge && (
        <Box
          ml={2}
          px={1.5}
          py={0.5}
          borderRadius="full"
          fontSize="xs"
          bg="blue.50"
          color="blue.700"
        >
          {tab.badge}
        </Box>
      )}
    </Flex>
  )

  return (
    <Box 
      borderBottom="1px" 
      borderColor={borderColor}
      px={padding}
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'center' }} 
        justify="space-between" 
        gap={2}
      >
        <Box width="full">
          <Tabs 
            index={tabItems.findIndex(tab => tab.id === activeTab)}
            onChange={(index) => onTabChange(tabItems[index].id)}
            colorScheme="blue"
            variant="line"
            width="full"
          >
            {isMobile ? (
              <Box>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <Tab
                    color={tabColor}
                    _selected={{ color: activeTabColor, borderColor: activeTabColor }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={2}
                    py={3}
                  >
                    {renderTabContent(tabItems[0])}
                  </Tab>
                  <Tab
                    color={tabColor}
                    _selected={{ color: activeTabColor, borderColor: activeTabColor }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={2}
                    py={3}
                  >
                    {renderTabContent(tabItems[1])}
                  </Tab>
                  <Tab
                    color={tabColor}
                    _selected={{ color: activeTabColor, borderColor: activeTabColor }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={2}
                    py={3}
                  >
                    {renderTabContent(tabItems[2])}
                  </Tab>
                  <Tab
                    color={tabColor}
                    _selected={{ color: activeTabColor, borderColor: activeTabColor }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={2}
                    py={3}
                  >
                    {renderTabContent(tabItems[3])}
                  </Tab>
                </Grid>
              </Box>
            ) : (
              <TabList border="none" whiteSpace="nowrap">
                {tabItems.map(tab => (
                  <Tab
                    key={tab.id}
                    color={tabColor}
                    _selected={{ color: activeTabColor, borderColor: activeTabColor }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 2, md: 4 }}
                    py={3}
                  >
                    {renderTabContent(tab)}
                  </Tab>
                ))}
              </TabList>
            )}
          </Tabs>
        </Box>
        
        {showNewDashboardButton && (
          <Button
            size="sm"
            variant="ghost"
            color="blue.500"
            leftIcon={<FiPlus />}
            mr={6}
            _hover={{ bg: 'transparent' }}
            flexShrink={0}
          >
            New Dashboard
          </Button>
        )}
      </Flex>
    </Box>
  )
} 