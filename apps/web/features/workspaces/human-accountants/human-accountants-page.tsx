'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'

export function HumanAccountantsPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.600', 'gray.400')

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
      p={6}
    >
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg" fontWeight="semibold">Human Accountant Oversight</Heading>
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={5} />}
          colorScheme="green"
          size="md"
        >
          Manage Settings
        </Button>
      </Flex>

      {/* Main Content Box */}
      <Box 
        bg="white" 
        borderRadius="lg" 
        p={6}
        borderWidth="1px"
        borderColor={borderColor}
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.600'
        }}
      >
        <Heading size="md" mb={6}>Accountant Review Panel</Heading>

        <Box mb={8}>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>Pending Reviews</Text>
          
          <VStack spacing={4} align="stretch">
            {/* First Review Item */}
            <Box
              p={4}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="md" fontWeight="medium">
                    Transaction ID: #TRN7890 - Large Expense Categorization
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Submitted by: John Doe on 2023-10-26
                  </Text>
                </Box>
                <HStack spacing={3}>
                  <Button size="sm" colorScheme="green">
                    Approve
                  </Button>
                  <Button size="sm" colorScheme="red">
                    Reject
                  </Button>
                  <Button size="sm" bg="#E5F6F4" color="green.500" _hover={{ bg: '#D1F0EC' }}>
                    Modify
                  </Button>
                </HStack>
              </Flex>
            </Box>

            {/* Second Review Item */}
            <Box
              p={4}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="md" fontWeight="medium">
                    Reconciliation Batch: #REC1234 - Bank Statement Discrepancy
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Submitted by: AI System on 2023-10-25
                  </Text>
                </Box>
                <HStack spacing={3}>
                  <Button size="sm" colorScheme="green">
                    Approve
                  </Button>
                  <Button size="sm" colorScheme="red">
                    Reject
                  </Button>
                  <Button size="sm" bg="#E5F6F4" color="green.500" _hover={{ bg: '#D1F0EC' }}>
                    Modify
                  </Button>
                </HStack>
              </Flex>
            </Box>
          </VStack>
        </Box>

        {/* Audit Trail Section */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>Audit Trail</Text>
          
          <VStack spacing={4} align="stretch">
            <Flex gap={4}>
              <Text color={textColor} minW="120px">
                2023-10-24<br/>14:30
              </Text>
              <Text>Jane Smith approved 'Invoice #INV5678' reconciliation.</Text>
            </Flex>

            <Flex gap={4}>
              <Text color={textColor} minW="120px">
                2023-10-23 10:15
              </Text>
              <Text>John Doe requested modification for 'Payroll Batch #PAY9012'.</Text>
            </Flex>

            <Flex gap={4}>
              <Text color={textColor} minW="120px">
                2023-10-22<br/>09:00
              </Text>
              <Text>AI System submitted 'Q3 Revenue Report' for review.</Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
} 