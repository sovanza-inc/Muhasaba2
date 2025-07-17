'use client'

import { Box, Flex, Text, Icon, VStack, Card, CardHeader, CardBody, Button, Table, Thead, Tbody, Tr, Th, Td, Input, InputGroup, InputLeftElement, Badge } from '@chakra-ui/react'
import { FiUpload, FiDownload, FiClock, FiSearch } from 'react-icons/fi'

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
      invoice: 'INV-2024-001',
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
      name: 'AWS Cloud Services',
      date: 'Jan 16',
      amount: 245.50
    },
    suggestedMatch: {
      invoice: 'INV-2024-002',
      description: 'Amazon Web Services',
      amount: 245.50
    },
    confidence: {
      score: 90,
      type: 'Exact'
    }
  },
  {
    id: 3,
    bankTransaction: {
      name: 'Office Supplies',
      date: 'Jan 17',
      amount: 156.75
    },
    suggestedMatch: {
      invoice: 'INV-2024-003',
      description: 'Staples Inc.',
      amount: 156.75
    },
    confidence: {
      score: 85,
      type: 'Partial'
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
      {/* Page Title */}
      <Flex gap={3} mb={6} alignItems="center" direction={{ base: 'column', sm: 'row' }}>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">AI Reconciliation</Text>
        <Text color="gray.500">Reconciliation Complete</Text>
      </Flex>

      <Flex gap={6} mb={8} direction={{ base: 'column', lg: 'row' }}>
        {/* Left Section */}
        <Box flex={1}>
          {/* Data Standardized Bar */}
          <Box 
            bg="green.500" 
            p={4} 
            borderRadius="md" 
            mb={6}
          >
            <Flex gap={2} color="white" alignItems="center">
              <Icon as={FiClock} />
              <Text>Data Standardized</Text>
            </Flex>
          </Box>

          {/* Data Collection Card */}
          <Card>
            <CardHeader>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">1. Data Collection</Text>
            </CardHeader>
            <CardBody>
              {/* File Upload Box */}
              <Box
                border="2px"
                borderStyle="dashed"
                borderColor="gray.200"
                borderRadius="md"
                p={{ base: 4, md: 6 }}
                textAlign="center"
                mb={6}
              >
                <VStack spacing={2}>
                  <Icon as={FiUpload} boxSize={6} color="gray.400" />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Drag & drop or <Text as="span" color="green.500" cursor="pointer">browse</Text> bank statement (CSV, Excel, PDF)
                  </Text>
                </VStack>
              </Box>

              {/* File Preview Section */}
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mb={4}>File Preview & Extracted Data</Text>
                <VStack align="stretch" spacing={3}>
                  <Flex justify="space-between">
                    <Text color="gray.600">File Name:</Text>
                    <Text>80</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Extracted Fields:</Text>
                    <Text>45</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Total Transactions:</Text>
                    <Text>2 minutes ago</Text>
                  </Flex>
                </VStack>

                {/* API Fetch Summary */}
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mt={6} mb={4}>API Fetch Summary (Xero/QuickBooks)</Text>
                <VStack align="stretch" spacing={3}>
                  <Flex justify="space-between">
                    <Text color="gray.600">Invoices Fetched:</Text>
                    <Text>BankStatement_Jan2024.csv</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Bills Fetched:</Text>
                    <Text>Date, Amount, Description, Payee</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Last Sync:</Text>
                    <Text>125</Text>
                  </Flex>
                </VStack>
              </Box>
            </CardBody>
          </Card>
        </Box>

        {/* Right Section */}
        <Box width={{ base: "100%", lg: "400px" }}>
          <Card>
            <CardHeader>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">3. Reconciliation Summary</Text>
            </CardHeader>
            <CardBody>
              <VStack align="stretch" spacing={4} mb={6}>
                <Flex justify="space-between">
                  <Text color="gray.600">Total Reconciled:</Text>
                  <Text fontWeight="semibold">$12,500.00</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.600">Total Unmatched:</Text>
                  <Text fontWeight="semibold">$1,200.00</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.600">Amount Variance:</Text>
                  <Text fontWeight="semibold">-</Text>
                </Flex>
              </VStack>

              <Button
                leftIcon={<FiDownload />}
                colorScheme="green"
                width="full"
                mb={6}
              >
                Download Monthly Report
              </Button>

              {/* Audit & History Section */}
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mb={2}>Audit & History</Text>
                <Text color="gray.500" fontSize="sm" mb={6}>
                  Click on a transaction in the table to view its detailed audit trail and history in a side drawer.
                </Text>

                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mb={4}>Example Details:</Text>
                <VStack align="stretch" spacing={3}>
                  <Flex justify="space-between">
                    <Text color="gray.600">Original Bank Entry:</Text>
                    <Text>&quot;Netflix Inc. 19.99&quot;</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Accounting Record:</Text>
                    <Text>&quot;Invoice #INV-2024-001&quot;</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Status:</Text>
                    <Text color="green.500">Matched</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Confidence:</Text>
                    <Text>95%</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Match Type:</Text>
                    <Text>Exact</Text>
                  </Flex>
                </VStack>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Flex>

      {/* Matching Engine Section */}
      <Box mb={6}>
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

        {/* Transactions Table/Cards */}
        <Box>
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
                      <Text>Invoice #{transaction.suggestedMatch.invoice}</Text>
                      <Text color="gray.500">
                        {transaction.suggestedMatch.description} (${transaction.suggestedMatch.amount})
                      </Text>
                    </Td>
                    <Td>
                      <Badge 
                        colorScheme={transaction.confidence.score >= 90 ? "green" : "yellow"} 
                        px={2} 
                        py={1} 
                        borderRadius="full"
                      >
                        {transaction.confidence.score}% {transaction.confidence.type}
                      </Badge>
                    </Td>
                    <Td>
                      <Flex gap={2}>
                        <Button size="sm" colorScheme="green" width="100px" borderRadius="md">
                          Accept
                        </Button>
                        <Button 
                          size="sm" 
                          bg="gray.100" 
                          color="black"
                          width="80px"
                          borderRadius="md"
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
                      <Text>Invoice #{transaction.suggestedMatch.invoice}</Text>
                      <Text color="gray.500" fontSize="sm">
                        {transaction.suggestedMatch.description} (${transaction.suggestedMatch.amount})
                      </Text>
                    </Box>

                    <Box pt={2}>
                      <Badge 
                        colorScheme={transaction.confidence.score >= 90 ? "green" : "yellow"} 
                        px={2} 
                        py={1} 
                        borderRadius="full"
                      >
                        {transaction.confidence.score}% {transaction.confidence.type}
                      </Badge>
                    </Box>

                    <Flex gap={2} pt={2}>
                      <Button colorScheme="green" width="full" size="sm">
                        Accept
                      </Button>
                      <Button 
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
      </Box>
    </Box>
  )
} 