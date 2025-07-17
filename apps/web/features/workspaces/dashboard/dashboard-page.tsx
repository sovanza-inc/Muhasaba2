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
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box 
      height="100vh"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        'scrollbarWidth': 'none',
        '-ms-overflow-style': 'none'
      }}
    >
      <Box bg={bgColor}>
        <Container maxW="container.xl" px={0}>
          <Box 
            bg={containerBg}
            borderX="1px"
            borderColor={borderColor}
            p={4}
          >
            {/* Header Section */}
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="lg" fontWeight="semibold">Integrations</Heading>
              <Button
                leftIcon={<Icon as={FiSettings} boxSize={5} />}
                size="md"
                colorScheme="green"
                fontWeight="medium"
              >
                Manage Settings
              </Button>
            </Flex>

            {/* Support Section */}
            <SupportSection />

            {/* Navigation Tabs */}
            <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />

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