'use client'

import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'

export function ReportsPage() {
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
      p={6}
    >
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg" fontWeight="semibold">IFRS Statements</Heading>
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={5} />}
          colorScheme="green"
          size="md"
        >
          Manage Settings
        </Button>
      </Flex>

      {/* Template Selection Section */}
      <Box 
        bg="white" 
        borderRadius="lg" 
        p={6}
        borderWidth="1px"
        borderColor={borderColor}
        mb={6}
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.600'
        }}
      >
        <Heading size="md" mb={6}>Template Selection</Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {/* Template cards... */}
          <Card 
            p={4} 
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2}>
              Standard IFRS Income
            </Text>
            <Text color="gray.500" fontSize="sm">
              Preview: Revenue, COGS, Net Income...
            </Text>
          </Card>

          <Card 
            p={4}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2}>
              Standard IFRS Balance
            </Text>
            <Text color="gray.500" fontSize="sm">
              Preview: Assets, Liabilities, Equity...
            </Text>
          </Card>

          <Card 
            p={4}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2}>
              Cash Flow Statement
            </Text>
            <Text color="gray.500" fontSize="sm">
              Preview: Operating, Investing, Financing...
            </Text>
          </Card>

          <Card 
            p={4}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2}>
              Custom Template 1
            </Text>
            <Text color="gray.500" fontSize="sm">
              Preview: User-defined sections...
            </Text>
          </Card>
        </Grid>
      </Box>

      {/* Statement Editor Section */}
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
        <Heading size="md" mb={6}>Statement Editor</Heading>

        <VStack spacing={4} align="stretch" mb={6}>
          <Box 
            p={4} 
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium">Income Statement - Revenue Section</Text>
          </Box>

          <Box 
            p={4} 
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium">Income Statement - Expense Section</Text>
          </Box>

          <Box 
            p={4} 
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium">Balance Sheet - Assets</Text>
          </Box>

          <Box 
            p={4} 
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium">Balance Sheet - Liabilities & Equity</Text>
          </Box>

          <Box 
            p={3}
            borderWidth="2px"
            borderStyle="dashed"
            borderColor="green.200"
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            bg="#CEECE5"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text color="green.500" fontWeight="medium">Add New Component</Text>
          </Box>
        </VStack>

        <Flex justify="flex-end" gap={4}>
          <Button colorScheme="green">Save Statement</Button>
          <Button variant="outline" colorScheme="green">Export (PDF/Excel)</Button>
        </Flex>
      </Box>
    </Box>
  )
} 