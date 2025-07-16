'use client'

import * as React from 'react'
import {
  Page,
  PageBody,
  PageHeader,
} from '@saas-ui-pro/react'
import { EmptyState } from '@saas-ui/react'
import { LuWallet } from 'react-icons/lu'
import {
  Button,
  useToast,
  VStack,
  HStack,
  Box,
  Text,
  Icon,
  SimpleGrid,
  Badge,
  Spinner,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

// Mock data for bank entities
const MOCK_CONNECTED_ENTITIES = [
  {
    id: 'bank-1',
    customer_id: 'cust-1',
    bank_identifier: 'EMIRATES ISLAMIC BANK',
    permissions: {
      identity: true,
      accounts: true,
      balance: true,
      transactions: true,
      identities: true,
      scheduled_payments: false,
      standing_orders: false,
      direct_debits: false,
      beneficiaries: true,
    },
    bank_type: 'PERSONAL',
    created_at: '2024-03-15T10:00:00Z',
  },
  {
    id: 'bank-2',
    customer_id: 'cust-1',
    bank_identifier: 'DUBAI ISLAMIC BANK',
    permissions: {
      identity: true,
      accounts: true,
      balance: true,
      transactions: true,
      identities: true,
      scheduled_payments: true,
      standing_orders: true,
      direct_debits: false,
      beneficiaries: true,
    },
    bank_type: 'BUSINESS',
    created_at: '2024-03-14T15:30:00Z',
  }
]

// Mock data for bank accounts
const MOCK_BANK_ACCOUNT = {
  account_id: 'acc-12345',
  status: 'ENABLED',
  status_update_date_time: '2024-03-15T12:00:00Z',
  currency: 'AED',
  account_type: 'CURRENT',
  account_sub_type: 'CHECKING',
  nickname: 'Main Account',
  opening_date: '2023-01-01T00:00:00Z',
  account: [
    {
      scheme_name: 'IBAN',
      identification: 'AE070331234567890123456',
      name: 'Main Current Account'
    }
  ],
  description: 'Primary business account'
}

// Mock data for bank balance
const MOCK_BANK_BALANCE = {
  account_id: 'acc-12345',
  balance: 50000.75,
  currency: 'AED',
  type: 'AVAILABLE',
  credit_debit_indicator: 'CREDIT',
  updated_at: new Date().toISOString()
}

// Mock data for transactions
const MOCK_TRANSACTIONS = [
  {
    transaction_id: 'tx-1',
    account_id: 'acc-12345',
    transaction_information: 'Payment for Services',
    transaction_reference: 'REF123456',
    amount: {
      amount: 1500.00,
      currency: 'AED'
    },
    credit_debit_indicator: 'CREDIT',
    status: 'BOOKED',
    booking_date_time: '2024-03-15T09:30:00Z',
    value_date_time: '2024-03-15T09:30:00Z'
  },
  {
    transaction_id: 'tx-2',
    account_id: 'acc-12345',
    transaction_information: 'Office Rent',
    transaction_reference: 'REF123457',
    amount: {
      amount: 5000.00,
      currency: 'AED'
    },
    credit_debit_indicator: 'DEBIT',
    status: 'BOOKED',
    booking_date_time: '2024-03-14T14:20:00Z',
    value_date_time: '2024-03-14T14:20:00Z'
  },
  {
    transaction_id: 'tx-3',
    account_id: 'acc-12345',
    transaction_information: 'Client Payment',
    transaction_reference: 'REF123458',
  amount: {
      amount: 3750.50,
      currency: 'AED'
    },
    credit_debit_indicator: 'CREDIT',
    status: 'BOOKED',
    booking_date_time: '2024-03-13T11:15:00Z',
    value_date_time: '2024-03-13T11:15:00Z'
  }
]

export function BankIntegrationsPage() {
  const toast = useToast()
  const [selectedBank, setSelectedBank] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleAddBankIntegration = React.useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      toast({
        title: 'Demo Mode',
        description: 'This is a demo. In production, this would connect to your bank.',
        status: 'info',
        duration: 3000,
        isClosable: true
      })
      setIsLoading(false)
    }, 1000)
  }, [toast])

  const handleBankSelect = React.useCallback((bank) => {
    setSelectedBank(bank)
  }, [])

  return (
    <Page>
      <PageHeader 
        title="Bank Integrations" 
        description="Connect and manage your bank accounts securely"
      />
      <PageBody>
        <VStack spacing={8} align="stretch" maxW="container.lg" mx="auto">
          {/* Add New Bank Section */}
              <Box 
                p={8}
                bg="white" 
                borderRadius="xl"
                boxShadow="lg"
                maxW="800px"
                mx="auto"
                mb={8}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  width="300px"
                  height="300px"
                  bg="green.50"
                  borderRadius="full"
                  transform="translate(50%, -50%)"
                  opacity={0.3}
                />
                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} alignItems="center" position="relative">
                  <VStack align="start" spacing={5}>
                    <VStack align="start" spacing={2}>
                      <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                        Add Another Bank
                      </Text>
                      <Text color="gray.600" fontSize="md" lineHeight="tall">
                        Connect additional bank accounts to manage all your finances in one place.
                      </Text>
                    </VStack>
                    <Button
                      size="lg"
                      leftIcon={<LuWallet />}
                  onClick={handleAddBankIntegration}
                      isLoading={isLoading}
                      backgroundColor="#1AB294"
                      color="white"
                      _hover={{ backgroundColor: 'green.600', transform: 'translateY(-2px)' }}
                      _focus={{ boxShadow: 'none' }}
                      _active={{ backgroundColor: 'green.700' }}
                      px={6}
                      py={5}
                      fontSize="md"
                      width={{ base: "full", md: "auto" }}
                      transition="all 0.2s"
                    >
                      Connect New Bank
                    </Button>
                  </VStack>

                  <Box 
                    display={{ base: 'none', lg: 'flex' }}
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Icon 
                      as={LuWallet} 
                      boxSize={24} 
                      color="#1AB294" 
                      opacity={0.9}
                    />
                  </Box>
                </SimpleGrid>
              </Box>

              {/* Connected Banks List */}
                <Box>
                  <HStack justify="space-between" align="center" mb={6}>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xl" fontWeight="semibold">Connected Banks</Text>
                      <Text color="gray.600" fontSize="sm">
                  {MOCK_CONNECTED_ENTITIES.length} banks connected
                      </Text>
                    </VStack>
                  </HStack>

                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {MOCK_CONNECTED_ENTITIES.map((entity) => (
                      <Box
                        key={entity.id}
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        boxShadow="sm"
                        cursor="pointer"
                        onClick={() => handleBankSelect(entity)}
                        _hover={{ 
                          transform: 'translateY(-2px)', 
                          boxShadow: 'md',
                          borderColor: 'green.200'
                        }}
                        transition="all 0.2s"
                        border="1px solid"
                        borderColor="gray.100"
                        position="relative"
                      >
                        <Box
                          position="absolute"
                          top={4}
                          right={4}
                          width={2}
                          height={2}
                          borderRadius="full"
                          bg="green.400"
                        />
                        <VStack align="start" spacing={4}>
                          <HStack justify="space-between" width="100%">
                            <Badge 
                              colorScheme="green" 
                              px={3} 
                              py={1} 
                              borderRadius="full"
                              textTransform="capitalize"
                            >
                              {entity.bank_type.toLowerCase()}
                            </Badge>
                            <Text fontSize="sm" color="gray.500">
                              Connected {new Date(entity.created_at).toLocaleDateString()}
                            </Text>
                          </HStack>
                          
                          <Text fontWeight="semibold" fontSize="lg">{entity.bank_identifier}</Text>
                          
                          <Box width="100%" bg="gray.50" p={3} borderRadius="md">
                            <Text fontSize="sm" color="gray.600" mb={3} fontWeight="medium">
                              Active Permissions
                            </Text>
                            <SimpleGrid columns={2} spacing={3}>
                              {Object.entries(entity.permissions).map(([key, value]) => (
                                value && (
                                  <HStack key={key} spacing={2}>
                                    <Icon as={LuWallet} color="green.500" boxSize={3.5} />
                                    <Text fontSize="xs" color="gray.700">
                                      {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </Text>
                                  </HStack>
                                )
                              ))}
                            </SimpleGrid>
                          </Box>
                          
                          <HStack 
                            width="100%" 
                            justify="space-between" 
                            align="center"
                            pt={2}
                          >
                            <Text fontSize="sm" color="gray.500">
                              View Details
                            </Text>
                            <Icon 
                              as={LuWallet} 
                              color="green.500" 
                              boxSize={4}
                            />
                          </HStack>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
        </VStack>

        {/* Bank Details Drawer */}
        <Drawer
          isOpen={!!selectedBank}
          onClose={() => setSelectedBank(null)}
          placement="right"
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Bank Details - {selectedBank?.bank_identifier}
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                {/* Balance Information Section */}
                <Box>
                  <Text fontSize="lg" fontWeight="medium" mb={3}>Balance Information</Text>
                    <Box
                      p={5}
                      bg="white"
                      borderRadius="lg"
                      boxShadow="sm"
                      border="1px"
                      borderColor="gray.200"
                    >
                      <VStack spacing={4} align="start">
                        <Text fontSize="sm" color="gray.600">Account Balance</Text>
                        <HStack spacing={2} align="center">
                          <Icon as={LuWallet} boxSize={6} color="blue.500" />
                          <Text fontSize="2xl" fontWeight="bold">
                          {MOCK_BANK_BALANCE.balance.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                          })} {MOCK_BANK_BALANCE.currency}
                          </Text>
                        </HStack>
                        <Box width="100%">
                          <Text fontSize="xs" color="gray.500">
                          Last updated: {new Date(MOCK_BANK_BALANCE.updated_at).toLocaleString()}
                          </Text>
                        </Box>
                      </VStack>
                    </Box>
                </Box>

                {/* Account Details Section */}
                  <Box mt={4}>
                    <Text fontSize="lg" fontWeight="medium" mb={3}>Account Details</Text>
                    <Box
                      p={4}
                      bg="white"
                      borderRadius="lg"
                      boxShadow="sm"
                      border="1px"
                      borderColor="gray.200"
                    >
                      <SimpleGrid columns={2} spacing={4}>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Account ID</Text>
                          <Text fontSize="sm" fontFamily="mono">
                          {MOCK_BANK_ACCOUNT.account_id}
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Currency</Text>
                          <Text fontSize="sm">
                          {MOCK_BANK_ACCOUNT.currency}
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Status</Text>
                        <Badge colorScheme={MOCK_BANK_ACCOUNT.status === "ENABLED" ? "green" : "yellow"}>
                          {MOCK_BANK_ACCOUNT.status}
                          </Badge>
                        </Box>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Account Type</Text>
                          <Text fontSize="sm">
                          {MOCK_BANK_ACCOUNT.account_type}
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Account Sub Type</Text>
                          <Text fontSize="sm">
                          {MOCK_BANK_ACCOUNT.account_sub_type}
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize="xs" color="gray.500">Nickname</Text>
                          <Text fontSize="sm">
                          {MOCK_BANK_ACCOUNT.nickname}
                          </Text>
                        </Box>
                      </SimpleGrid>
                      
                      {/* Account Numbers */}
                    {MOCK_BANK_ACCOUNT.account && MOCK_BANK_ACCOUNT.account.length > 0 && (
                        <Box mt={4}>
                          <Text fontSize="sm" fontWeight="medium" mb={2}>Account Numbers</Text>
                          <VStack align="start" spacing={2}>
                          {MOCK_BANK_ACCOUNT.account.map((acc, index) => (
                                <Box key={index} width="100%">
                                  <Text fontSize="xs" color="gray.500">{acc.scheme_name}</Text>
                                  <Text fontSize="sm" fontFamily="mono">{acc.identification}</Text>
                                </Box>
                          ))}
                          </VStack>
                        </Box>
                      )}
                    </Box>
                  </Box>

                {/* Transactions Section */}
                <Box mt={4}>
                  <Text fontSize="lg" fontWeight="medium" mb={3}>Recent Transactions</Text>
                    <Box
                      maxH="400px"
                      overflowY="auto"
                      bg="white"
                      borderRadius="lg"
                      boxShadow="sm"
                      border="1px"
                      borderColor="gray.200"
                    >
                      <VStack spacing={0} align="stretch">
                      {MOCK_TRANSACTIONS.map((transaction, index) => (
                          <Box
                            key={transaction.transaction_id}
                            p={4}
                          borderBottomWidth={index < MOCK_TRANSACTIONS.length - 1 ? 1 : 0}
                            borderColor="gray.100"
                          >
                            <HStack justify="space-between" align="start">
                              <VStack align="start" spacing={1}>
                                <Text fontSize="sm" fontWeight="medium">
                                  {transaction.transaction_information}
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                  {new Date(transaction.booking_date_time).toLocaleString()}
                                </Text>
                                {transaction.transaction_reference && (
                                  <Text fontSize="xs" color="gray.500">
                                    Ref: {transaction.transaction_reference}
                                  </Text>
                                )}
                              </VStack>
                              <Box textAlign="right">
                                <Text
                                  fontSize="sm"
                                  fontWeight="medium"
                                  color={transaction.credit_debit_indicator === 'CREDIT' ? 'green.500' : 'red.500'}
                                >
                                  {transaction.credit_debit_indicator === 'CREDIT' ? '+' : '-'}
                                  {transaction.amount.amount.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })} {transaction.amount.currency}
                                </Text>
                                <Badge
                                  size="sm"
                                  colorScheme={transaction.status === 'BOOKED' ? 'green' : 'yellow'}
                                >
                                  {transaction.status}
                                </Badge>
                              </Box>
                            </HStack>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </PageBody>
    </Page>
  )
}