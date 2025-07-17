'use client'

import { useState } from 'react'
import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { NavTabs } from './components/nav-tabs'
import { NotificationBanner } from './components/notification-banner'
import { SupportSection } from './components/support-section'
import { FinancialOverview } from './components/financial-overview'
import { CashFlow } from './components/cash-flow'

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('default')
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const containerBg = useColorModeValue('white', 'gray.700')
  // const borderColor = useColorModeValue('gray.100', 'gray.700')
  const containerPadding = useBreakpointValue({ base: 2, sm: 4 })
  const headerDirection = useBreakpointValue({ base: 'column', sm: 'row' } as const)
  const headerSpacing = useBreakpointValue({ base: 4, sm: 0 })

  return (
    <Box 
      height="100vh"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <Box bg={bgColor}>
        <Container maxW="container.xl" px={{ base: 0, sm: 4 }}>
          <Box 
            bg={containerBg}
            p={containerPadding}
          >
            {/* Header Section */}
            <Flex 
              direction={headerDirection} 
              justify="space-between" 
              align={{ base: 'stretch', sm: 'center' }} 
              mb={6}
              gap={headerSpacing}
            >
              <Heading size={{ base: 'md', sm: 'lg' }} fontWeight="semibold">Integrations</Heading>
              <Button
                leftIcon={<Icon as={FiSettings} boxSize={5} />}
                size="md"
                colorScheme="green"
                fontWeight="medium"
                width={{ base: 'full', sm: 'auto' }}
              >
                Manage Settings
              </Button>
            </Flex>

            {/* Support Section */}
            <Box mb={0}>
              <SupportSection />
            </Box>

            {/* Navigation Tabs */}
            <Box>
              <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </Box>

            {/* Content Area */}
            <Box mt={4}>
              <NotificationBanner
                title="TDS Rate Updates in Zoho Books"
                description="The Union Budget 2024-25 has revised the Tax Deducted at Source (TDS) rates for various sections. These changes will take effect from October 1, 2024. To ensure compliance, Zoho Books updates the TDS rates in your organization."
                onClose={() => {}}
              />

              {/* Financial Overview */}
              <Box mt={4}>
                <FinancialOverview />
              </Box>

              {/* Cash Flow */}
              <Box mt={4}>
                <CashFlow />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}