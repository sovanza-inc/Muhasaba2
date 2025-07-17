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
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
      p={{ base: 4, md: 6 }}
    >
      {/* Header Section */}
      <Flex 
        justify="space-between" 
        align={{ base: 'stretch', sm: 'center' }}
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 4, sm: 0 }}
        mb={6}
      >
        <Heading size={{ base: "md", lg: "lg" }} fontWeight="semibold">Human Accountant Oversight</Heading>
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={{ base: 4, md: 5 }} />}
          colorScheme="green"
          size={{ base: "sm", md: "md" }}
          width={{ base: 'full', sm: 'auto' }}
        >
          Manage Settings
        </Button>
      </Flex>

      {/* Main Content Box */}
      <Box 
        bg="white" 
        borderRadius="lg" 
        p={{ base: 4, md: 6 }}
        borderWidth="1px"
        borderColor={borderColor}
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.600'
        }}
      >
        <Heading size={{ base: "sm", md: "md" }} mb={{ base: 4, md: 6 }}>Accountant Review Panel</Heading>

        <Box mb={{ base: 6, md: 8 }}>
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="semibold" mb={{ base: 3, md: 4 }}>Pending Reviews</Text>
          
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            {/* First Review Item */}
            <Box
              p={{ base: 3, md: 4 }}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex 
                justify="space-between" 
                align={{ base: 'stretch', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 3, md: 0 }}
              >
                <Box>
                  <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    Transaction ID: #TRN7890 - Large Expense Categorization
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
                    Submitted by: John Doe on 2023-10-26
                  </Text>
                </Box>
                <HStack 
                  spacing={{ base: 2, md: 3 }}
                  width={{ base: 'full', md: 'auto' }}
                  justify={{ base: 'stretch', md: 'flex-end' }}
                >
                  <Button 
                    size="sm" 
                    colorScheme="green"
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Approve
                  </Button>
                  <Button 
                    size="sm" 
                    colorScheme="red"
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Reject
                  </Button>
                  <Button 
                    size="sm" 
                    bg="#E5F6F4" 
                    color="green.500" 
                    _hover={{ bg: '#D1F0EC' }}
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Modify
                  </Button>
                </HStack>
              </Flex>
            </Box>

            {/* Second Review Item */}
            <Box
              p={{ base: 3, md: 4 }}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex 
                justify="space-between" 
                align={{ base: 'stretch', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 3, md: 0 }}
              >
                <Box>
                  <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    Reconciliation Batch: #REC1234 - Bank Statement Discrepancy
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
                    Submitted by: AI System on 2023-10-25
                  </Text>
                </Box>
                <HStack 
                  spacing={{ base: 2, md: 3 }}
                  width={{ base: 'full', md: 'auto' }}
                  justify={{ base: 'stretch', md: 'flex-end' }}
                >
                  <Button 
                    size="sm" 
                    colorScheme="green"
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Approve
                  </Button>
                  <Button 
                    size="sm" 
                    colorScheme="red"
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Reject
                  </Button>
                  <Button 
                    size="sm" 
                    bg="#E5F6F4" 
                    color="green.500" 
                    _hover={{ bg: '#D1F0EC' }}
                    flex={{ base: 1, md: 'initial' }}
                  >
                    Modify
                  </Button>
                </HStack>
              </Flex>
            </Box>
          </VStack>
        </Box>

        {/* Audit Trail Section */}
        <Box>
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="semibold" mb={{ base: 3, md: 4 }}>Audit Trail</Text>
          
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Flex gap={{ base: 3, md: 4 }} direction={{ base: 'column', sm: 'row' }}>
              <Text color={textColor} minW={{ base: 'auto', sm: '120px' }} fontSize={{ base: 'xs', md: 'sm' }}>
                2023-10-24<br/>14:30
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>Jane Smith approved &apos;Invoice #INV5678&apos; reconciliation.</Text>
            </Flex>

            <Flex gap={{ base: 3, md: 4 }} direction={{ base: 'column', sm: 'row' }}>
              <Text color={textColor} minW={{ base: 'auto', sm: '120px' }} fontSize={{ base: 'xs', md: 'sm' }}>
                2023-10-23 10:15
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>John Doe requested modification for &apos;Payroll Batch #PAY9012&apos;.</Text>
            </Flex>

            <Flex gap={{ base: 3, md: 4 }} direction={{ base: 'column', sm: 'row' }}>
              <Text color={textColor} minW={{ base: 'auto', sm: '120px' }} fontSize={{ base: 'xs', md: 'sm' }}>
                2023-10-22<br/>09:00
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>AI System submitted &apos;Q3 Revenue Report&apos; for review.</Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
} 