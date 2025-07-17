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
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
      p={{ base: 4, md: 6 }}
    >
      {/* Header Section */}
      <Flex 
        justify="space-between" 
        align={{ base: 'stretch', sm: 'center' }} 
        mb={6}
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 4, sm: 0 }}
      >
        <Heading size={{ base: "md", lg: "lg" }} fontWeight="semibold">IFRS Statements</Heading>
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={{ base: 4, md: 5 }} />}
          colorScheme="green"
          size={{ base: "sm", md: "md" }}
          width={{ base: 'full', sm: 'auto' }}
        >
          Manage Settings
        </Button>
      </Flex>

      {/* Template Selection Section */}
      <Box 
        bg="white" 
        borderRadius="lg" 
        p={{ base: 4, md: 6 }}
        borderWidth="1px"
        borderColor={borderColor}
        mb={6}
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.600'
        }}
      >
        <Heading size={{ base: "sm", md: "md" }} mb={{ base: 4, md: 6 }}>Template Selection</Heading>

        <Grid 
          templateColumns={{ 
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }} 
          gap={{ base: 3, md: 6 }}
        >
          {/* Template cards... */}
          <Card 
            p={{ base: 3, md: 4 }}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2} fontSize={{ base: "sm", md: "md" }}>
              Standard IFRS Income
            </Text>
            <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
              Preview: Revenue, COGS, Net Income...
            </Text>
          </Card>

          <Card 
            p={{ base: 3, md: 4 }}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2} fontSize={{ base: "sm", md: "md" }}>
              Standard IFRS Balance
            </Text>
            <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
              Preview: Assets, Liabilities, Equity...
            </Text>
          </Card>

          <Card 
            p={{ base: 3, md: 4 }}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2} fontSize={{ base: "sm", md: "md" }}>
              Cash Flow Statement
            </Text>
            <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
              Preview: Operating, Investing, Financing...
            </Text>
          </Card>

          <Card 
            p={{ base: 3, md: 4 }}
            cursor="pointer"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ borderColor: 'green.500' }}
            transition="all 0.2s"
          >
            <Text fontWeight="medium" mb={2} fontSize={{ base: "sm", md: "md" }}>
              Custom Template 1
            </Text>
            <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
              Preview: User-defined sections...
            </Text>
          </Card>
        </Grid>
      </Box>

      {/* Statement Editor Section */}
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
        <Heading size={{ base: "sm", md: "md" }} mb={{ base: 4, md: 6 }}>Statement Editor</Heading>

        <VStack spacing={{ base: 3, md: 4 }} align="stretch" mb={{ base: 4, md: 6 }}>
          <Box 
            p={{ base: 3, md: 4 }}
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>Income Statement - Revenue Section</Text>
          </Box>

          <Box 
            p={{ base: 3, md: 4 }}
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>Income Statement - Expense Section</Text>
          </Box>

          <Box 
            p={{ base: 3, md: 4 }}
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>Balance Sheet - Assets</Text>
          </Box>

          <Box 
            p={{ base: 3, md: 4 }}
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="md"
            cursor="pointer"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>Balance Sheet - Liabilities & Equity</Text>
          </Box>

          <Box 
            p={{ base: 2, md: 3 }}
            borderWidth="2px"
            borderStyle="dashed"
            borderColor="green.200"
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            bg="#CEECE5"
            _hover={{ borderColor: 'green.500' }}
          >
            <Text color="green.500" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>Add New Component</Text>
          </Box>
        </VStack>

        <Flex 
          justify="flex-end" 
          gap={{ base: 2, md: 4 }}
          direction={{ base: 'column', sm: 'row' }}
          width="full"
        >
          <Button 
            colorScheme="green"
            size={{ base: "sm", md: "md" }}
            width={{ base: 'full', sm: 'auto' }}
          >
            Save Statement
          </Button>
          <Button 
            variant="outline" 
            colorScheme="green"
            size={{ base: "sm", md: "md" }}
            width={{ base: 'full', sm: 'auto' }}
          >
            Export (PDF/Excel)
          </Button>
        </Flex>
      </Box>
    </Box>
  )
} 