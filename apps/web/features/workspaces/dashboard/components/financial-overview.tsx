'use client'

import {
  Box,
  Grid,
  Flex,
  Text,
  Icon,
  Button,
  useColorModeValue,
  Progress,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi'

interface FinancialCardProps {
  title: string
  totalAmount: string
  currentAmount: string
  overdueAmount: string
  progress?: number
}

function FinancialCard({ title, totalAmount, currentAmount, overdueAmount, progress = 0 }: FinancialCardProps) {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const bgColor = useColorModeValue('white', 'gray.700')
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' })
  const headingSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const padding = useBreakpointValue({ base: 4, md: 6 })

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      p={padding}
    >
      <Flex 
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between" 
        align={{ base: 'flex-start', sm: 'center' }} 
        mb={4}
        gap={2}
      >
        <Flex align="center" gap={2}>
          <Text fontSize={headingSize} fontWeight="semibold">{title}</Text>
          <Icon as={FiHelpCircle} color="gray.400" />
        </Flex>
        <Button
          variant="ghost"
          color="blue.500"
          size="sm"
          fontWeight="medium"
          leftIcon={<Text as="span" fontSize="lg">+</Text>}
          width={{ base: 'full', sm: 'auto' }}
        >
          New
        </Button>
      </Flex>

      <Text color="gray.600" mb={4} fontSize={fontSize}>{totalAmount}</Text>

      <Progress
        value={progress}
        size="sm"
        mb={6}
        borderRadius="full"
        bg="gray.100"
        sx={{
          '& > div': {
            background: '#FFD78F'
          }
        }}
      />

      <Grid 
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
        gap={{ base: 4, sm: 8 }}
      >
        <Box>
          <Text color="gray.500" fontSize="sm" mb={1}>CURRENT</Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">₹{currentAmount}</Text>
        </Box>
        <Box>
          <Text 
            color="red.500" 
            fontSize="sm" 
            textAlign={{ base: 'left', sm: 'right' }} 
            mb={1}
          >
            OVERDUE
          </Text>
          <Flex 
            justify={{ base: 'flex-start', sm: 'flex-end' }} 
            align="center" 
            gap={1}
          >
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
              ₹{overdueAmount}
            </Text>
            <Icon as={FiChevronDown} color="gray.400" boxSize={4} />
          </Flex>
        </Box>
      </Grid>
    </Box>
  )
}

export function FinancialOverview() {
  return (
    <Grid 
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
      gap={6}
    >
      <FinancialCard
        title="Total Receivables"
        totalAmount="Total Unpaid Invoices ₹112.00"
        currentAmount="0.00"
        overdueAmount="112.00"
        progress={10}
      />
      <FinancialCard
        title="Total Payables"
        totalAmount="Total Unpaid Bills ₹0.00"
        currentAmount="0.00"
        overdueAmount="0.00"
        progress={0}
      />
    </Grid>
  )
} 