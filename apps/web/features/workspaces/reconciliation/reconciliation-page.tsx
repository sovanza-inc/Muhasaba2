'use client'

import { Box, Flex, Text, Icon, VStack, Card, CardHeader, CardBody, Button, Table, Thead, Tbody, Tr, Th, Td, Input, InputGroup, InputLeftElement, Badge, HStack } from '@chakra-ui/react'
import { FiUpload, FiDownload, FiClock, FiSearch } from 'react-icons/fi'

export function ReconciliationPage() {
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
      {/* Page Title */}
      <Flex gap={3} mb={6} alignItems="center">
        <Text fontSize="2xl" fontWeight="semibold">AI Reconciliation</Text>
        <Text color="gray.500">Reconciliation Complete</Text>
      </Flex>

      <Flex gap={6} mb={8}>
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
              <Text fontSize="lg" fontWeight="medium">1. Data Collection</Text>
            </CardHeader>
            <CardBody>
              {/* File Upload Box */}
              <Box
                border="2px"
                borderStyle="dashed"
                borderColor="gray.200"
                borderRadius="md"
                p={6}
                textAlign="center"
                mb={6}
              >
                <VStack spacing={2}>
                  <Icon as={FiUpload} boxSize={6} color="gray.400" />
                  <Text>
                    Drag & drop or <Text as="span" color="green.500" cursor="pointer">browse</Text> bank statement (CSV, Excel, PDF)
                  </Text>
                </VStack>
              </Box>

              {/* File Preview Section */}
              <Box>
                <Text fontSize="md" fontWeight="medium" mb={4}>File Preview & Extracted Data</Text>
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
                <Text fontSize="md" fontWeight="medium" mt={6} mb={4}>API Fetch Summary (Xero/QuickBooks)</Text>
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
        <Box width="400px">
          <Card>
            <CardHeader>
              <Text fontSize="lg" fontWeight="medium">3. Reconciliation Summary</Text>
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
                <Text fontSize="md" fontWeight="medium" mb={2}>Audit & History</Text>
                <Text color="gray.500" fontSize="sm" mb={6}>
                  Click on a transaction in the table to view its detailed audit trail and history in a side drawer.
                </Text>

                <Text fontSize="md" fontWeight="medium" mb={4}>Example Details:</Text>
                <VStack align="stretch" spacing={3}>
                  <Flex justify="space-between">
                    <Text color="gray.600">Original Bank Entry:</Text>
                    <Text>"Netflix Inc. 19.99"</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.600">Accounting Record:</Text>
                    <Text>"Invoice #INV-2024-001"</Text>
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
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          2. Matching Engine Insights & Review Queue
        </Text>
        
        <Flex gap={4} mb={6} alignItems="center">
          <Button
            colorScheme="green"
            variant="solid"
            size="md"
            borderRadius="full"
          >
            Auto-Matched (80)
          </Button>
          <Button
            variant="ghost"
            size="md"
            borderRadius="full"
          >
            Suggested (20)
          </Button>
          <Button
            variant="ghost"
            size="md"
            borderRadius="full"
          >
            Unmatched (25)
          </Button>
          
          <InputGroup maxW="300px" ml="auto">
            <InputLeftElement>
              <Icon as={FiSearch} color="gray.400" />
            </InputLeftElement>
            <Input 
              placeholder="Search transactions..." 
              bg="gray.50"
              borderRadius="md"
            />
          </InputGroup>
        </Flex>

        {/* Transactions Table */}
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
            <Tr>
              <Td>
                <Text fontWeight="medium">Netflix Subscription</Text>
                <Text color="gray.600" fontSize="sm">Jan 15, $19.99</Text>
              </Td>
              <Td>
                <Text>Invoice #INV-2024-001</Text>
                <Text color="gray.500">Netflix Inc. ($19.99)</Text>
              </Td>
              <Td>
                <Badge colorScheme="green" px={2} py={1} borderRadius="full">
                  95% Exact
                </Badge>
              </Td>
              <Td>
                <Flex gap={4}>
                  <Box width="100px">
                    <Button size="sm" colorScheme="green" width="full" borderRadius="md">
                      Accept
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100" 
                      color="black"
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Edit
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100"
                      color="black" 
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Skip
                    </Button>
                  </Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="medium">Office Supplies</Text>
                <Text color="gray.600" fontSize="sm">Jan 10, $120.50</Text>
              </Td>
              <Td>
                <Text>Bill #BILL-2024-005</Text>
                <Text color="gray.500">Staples ($120.50)</Text>
              </Td>
              <Td>
                <Badge colorScheme="green" px={2} py={1} borderRadius="full">
                  95% Exact
                </Badge>
              </Td>
              <Td>
                <Flex gap={4}>
                  <Box width="100px">
                    <Button size="sm" colorScheme="green" width="full" borderRadius="md">
                      Accept
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100" 
                      color="black"
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Review
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100"
                      color="black" 
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Skip
                    </Button>
                  </Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="medium">Software License Fee</Text>
                <Text color="gray.600" fontSize="sm">Jan 08, $49.00</Text>
              </Td>
              <Td>
                <Text>Invoice #INV-2024-003</Text>
                <Text color="gray.500">Adobe Creative ($49.00)</Text>
              </Td>
              <Td>
                <Badge colorScheme="orange" px={2} py={1} borderRadius="full">
                  85% Fuzzy
                </Badge>
              </Td>
              <Td>
                <Flex gap={4}>
                  <Box width="100px">
                    <Button size="sm" colorScheme="green" width="full" borderRadius="md">
                      Accept
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100" 
                      color="black"
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Review
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100"
                      color="black" 
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Skip
                    </Button>
                  </Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="medium">Utility Bill</Text>
                <Text color="gray.600" fontSize="sm">Jan 20, $75.00</Text>
              </Td>
              <Td>
                <Text>Bill #BILL-2024-007</Text>
                <Text color="gray.500">Local Electric Co. ($75.00)</Text>
              </Td>
              <Td>
                <Badge colorScheme="red" px={2} py={1} borderRadius="full">
                  65% Fuzzy
                </Badge>
              </Td>
              <Td>
                <Flex gap={4}>
                  <Box width="100px">
                    <Button size="sm" colorScheme="green" width="full" borderRadius="md">
                      Accept
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100" 
                      color="black"
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Review
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100"
                      color="black" 
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Skip
                    </Button>
                  </Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="medium">Lunch Meeting</Text>
                <Text color="gray.600" fontSize="sm">Jan 12, $45.00</Text>
              </Td>
              <Td>
                <Text>No suggested match</Text>
              </Td>
              <Td>
                <Badge colorScheme="red" px={2} py={1} borderRadius="full">
                  0% Unmatched
                </Badge>
              </Td>
              <Td>
                <Flex gap={4}>
                  <Box width="100px">
                    <Button size="sm" colorScheme="green" width="full" borderRadius="md">
                      Categorize
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100" 
                      color="black"
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Review
                    </Button>
                  </Box>
                  <Box width="80px">
                    <Button 
                      size="sm" 
                      bg="gray.100"
                      color="black" 
                      _hover={{ bg: 'gray.200' }} 
                      width="full" 
                      borderRadius="md"
                    >
                      Skip
                    </Button>
                  </Box>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
} 