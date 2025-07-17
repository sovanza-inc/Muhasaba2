'use client'

import { Box, Button, Flex, Text, Icon, VStack, Card, CardBody, Table, Thead, Tbody, Tr, Th, Td, Input, InputGroup, InputLeftElement, Badge } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

// Sample transaction data
const transactions = [
  {
    id: 1,
    bankTransaction: {
      name: 'Netflix Subscription',
      date: 'Jan 15',
      amount: 19.99
    },
    suggestedMatch: {
      reference: 'Invoice #INV-2024-001',
      description: 'Netflix Inc.',
      amount: 19.99
    },
    confidence: {
      score: 95,
      type: 'Exact'
    }
  },
  {
    id: 2,
    bankTransaction: {
      name: 'Office Supplies',
      date: 'Jan 10',
      amount: 120.50
    },
    suggestedMatch: {
      reference: 'Bill #BILL-2024-005',
      description: 'Staples',
      amount: 120.50
    },
    confidence: {
      score: 95,
      type: 'Exact'
    }
  },
  {
    id: 3,
    bankTransaction: {
      name: 'Software License Fee',
      date: 'Jan 08',
      amount: 49.00
    },
    suggestedMatch: {
      reference: 'Invoice #INV-2024-003',
      description: 'Adobe Creative',
      amount: 49.00
    },
    confidence: {
      score: 85,
      type: 'Fuzzy'
    }
  },
  {
    id: 4,
    bankTransaction: {
      name: 'Utility Bill',
      date: 'Jan 20',
      amount: 75.00
    },
    suggestedMatch: {
      reference: 'Bill #BILL-2024-007',
      description: 'Local Electric Co.',
      amount: 75.00
    },
    confidence: {
      score: 65,
      type: 'Fuzzy'
    }
  },
  {
    id: 5,
    bankTransaction: {
      name: 'Lunch Meeting',
      date: 'Jan 12',
      amount: 45.00
    },
    suggestedMatch: {
      reference: 'No suggested match',
      description: '',
      amount: null
    },
    confidence: {
      score: 0,
      type: 'Unmatched'
    }
  }
]

export function ReconciliationPage() {
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
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" mb={4}>
        2. Matching Engine Insights & Review Queue
      </Text>
      
      <Flex 
        gap={{ base: 2, md: 4 }} 
        mb={6} 
        alignItems="center" 
        direction={{ base: 'column', md: 'row' }}
        width="full"
      >
        <Flex gap={2} width={{ base: 'full', md: 'auto' }} flexWrap="wrap">
          <Button
            colorScheme="green"
            variant="solid"
            size={{ base: 'xs', md: 'md' }}
            borderRadius="full"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontSize={{ base: 'xs', md: 'sm' }}
            height="auto"
            flex={{ base: 1, md: 'initial' }}
          >
            Auto-Matched (80)
          </Button>
          <Button
            variant="ghost"
            size={{ base: 'xs', md: 'md' }}
            borderRadius="full"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontSize={{ base: 'xs', md: 'sm' }}
            height="auto"
            flex={{ base: 1, md: 'initial' }}
          >
            Suggested (20)
          </Button>
          <Button
            variant="ghost"
            size={{ base: 'xs', md: 'md' }}
            borderRadius="full"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontSize={{ base: 'xs', md: 'sm' }}
            height="auto"
            flex={{ base: 1, md: 'initial' }}
          >
            Unmatched (25)
          </Button>
        </Flex>
        
        <InputGroup maxW={{ base: "full", md: "300px" }} width="full">
          <InputLeftElement>
            <Icon as={FiSearch} color="gray.400" boxSize={{ base: 4, md: 5 }} />
          </InputLeftElement>
          <Input 
            placeholder="Search transactions..." 
            bg="gray.50"
            borderRadius="md"
            size={{ base: 'sm', md: 'md' }}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </InputGroup>
      </Flex>

      {/* Desktop View - Table */}
      <Box display={{ base: 'none', md: 'block' }} overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Bank Transaction</Th>
              <Th>Suggested Match</Th>
              <Th>Confidence</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>
                  <Text fontWeight="medium">{transaction.bankTransaction.name}</Text>
                  <Text color="gray.600" fontSize="sm">
                    {transaction.bankTransaction.date}, ${transaction.bankTransaction.amount}
                  </Text>
                </Td>
                <Td>
                  <Text>{transaction.suggestedMatch.reference}</Text>
                  {transaction.suggestedMatch.description && (
                    <Text color="gray.500">
                      {transaction.suggestedMatch.description} (${transaction.suggestedMatch.amount})
                    </Text>
                  )}
                </Td>
                <Td>
                  <Badge 
                    colorScheme={
                      transaction.confidence.score >= 90 ? "green" : 
                      transaction.confidence.score >= 70 ? "orange" :
                      transaction.confidence.score > 0 ? "red" : "gray"
                    }
                    px={2} 
                    py={1} 
                    borderRadius="full"
                  >
                    {transaction.confidence.score > 0 ? `${transaction.confidence.score}% ${transaction.confidence.type}` : '0% Unmatched'}
                  </Badge>
                </Td>
                <Td>
                  <Flex gap={2}>
                    <Button 
                      size="sm" 
                      colorScheme="green"
                      width="auto"
                    >
                      Accept
                    </Button>
                    {transaction.confidence.score === 0 ? (
                      <Button 
                        size="sm" 
                        variant="solid"
                        bg="gray.100"
                        color="black"
                        _hover={{ bg: 'gray.200' }}
                      >
                        Categorize
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="solid"
                        bg="gray.100"
                        color="black"
                        _hover={{ bg: 'gray.200' }}
                      >
                        {transaction.confidence.score >= 90 ? 'Edit' : 'Review'}
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="solid"
                      bg="gray.100"
                      color="black"
                      _hover={{ bg: 'gray.200' }}
                    >
                      Skip
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Mobile View - Cards */}
      <VStack spacing={4} display={{ base: 'flex', md: 'none' }} width="full">
        {transactions.map((transaction) => (
          <Card key={transaction.id} width="full">
            <CardBody>
              <VStack align="stretch" spacing={3}>
                <Box>
                  <Text fontWeight="medium" fontSize="lg">{transaction.bankTransaction.name}</Text>
                  <Text color="gray.600">
                    {transaction.bankTransaction.date}, ${transaction.bankTransaction.amount}
                  </Text>
                </Box>
                
                <Box pt={2}>
                  <Text color="gray.600" fontSize="sm">Suggested Match:</Text>
                  <Text>{transaction.suggestedMatch.reference}</Text>
                  {transaction.suggestedMatch.description && (
                    <Text color="gray.500" fontSize="sm">
                      {transaction.suggestedMatch.description} (${transaction.suggestedMatch.amount})
                    </Text>
                  )}
                </Box>

                <Box pt={2}>
                  <Badge 
                    colorScheme={
                      transaction.confidence.score >= 90 ? "green" : 
                      transaction.confidence.score >= 70 ? "orange" :
                      transaction.confidence.score > 0 ? "red" : "gray"
                    }
                    px={2} 
                    py={1} 
                    borderRadius="full"
                  >
                    {transaction.confidence.score > 0 ? `${transaction.confidence.score}% ${transaction.confidence.type}` : '0% Unmatched'}
                  </Badge>
                </Box>

                <Flex gap={2} pt={2}>
                  <Button colorScheme="green" width="full" size="sm">
                    Accept
                  </Button>
                  {transaction.confidence.score === 0 ? (
                    <Button 
                      variant="solid"
                      bg="gray.100"
                      color="black"
                      width="full"
                      size="sm"
                      _hover={{ bg: 'gray.200' }}
                    >
                      Categorize
                    </Button>
                  ) : (
                    <Button 
                      variant="solid"
                      bg="gray.100"
                      color="black"
                      width="full"
                      size="sm"
                      _hover={{ bg: 'gray.200' }}
                    >
                      {transaction.confidence.score >= 90 ? 'Edit' : 'Review'}
                    </Button>
                  )}
                  <Button 
                    variant="solid"
                    bg="gray.100"
                    color="black"
                    width="full"
                    size="sm"
                    _hover={{ bg: 'gray.200' }}
                  >
                    Skip
                  </Button>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Box>
  )
} 