import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Select,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AreaChart } from '@saas-ui/charts';
import { FiHelpCircle } from 'react-icons/fi';

const mockData = [
  { date: 'Apr 2024', value: 105750 },
  { date: 'May 2024', value: 105750 },
  { date: 'Jun 2024', value: 105750 },
  { date: 'Jul 2024', value: 105750 },
  { date: 'Aug 2024', value: 105750 },
  { date: 'Sep 2024', value: 785752.40 },
  { date: 'Oct 2024', value: 785752.40 },
  { date: 'Nov 2024', value: 785752.40 },
  { date: 'Dec 2024', value: 785752.40 },
  { date: 'Jan 2025', value: 785752.40 },
  { date: 'Feb 2025', value: 785752.40 },
  { date: 'Mar 2025', value: 891502.40 },
];

export const CashFlow = () => {
  const [fiscalYear, setFiscalYear] = useState('This Fiscal Year');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      bg={bgColor}
      position="relative"
    >
      {/* Header */}
      <Flex justify="space-between" align="center" p={6} borderBottomWidth="1px" borderColor={borderColor}>
        <HStack spacing={2}>
          <Text fontSize="lg" fontWeight="medium">Cash Flow</Text>
          <Icon as={FiHelpCircle} color="gray.400" boxSize={4} />
        </HStack>
        <Select
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
          size="sm"
          width="auto"
          borderColor={borderColor}
          _hover={{ borderColor: 'gray.300' }}
          bg="transparent"
        >
          <option value="This Fiscal Year">This Fiscal Year</option>
          <option value="Last Fiscal Year">Last Fiscal Year</option>
        </Select>
      </Flex>

      {/* Main Content */}
      <Grid templateColumns="1fr auto" height="400px">
        {/* Graph Section */}
        <GridItem position="relative" p={6}>
          <AreaChart
            data={mockData}
            categories={['value']}
            index="date"
            height="100%"
            valueFormatter={(value: number) => 
              new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 2
              }).format(value)
            }
            showLegend={false}
            showGrid={true}
            colors={["#60A5FA"]}
            variant="gradient"
            yAxisWidth={80}
          />
        </GridItem>

        {/* Stats Section with Separator */}
        <GridItem 
          borderLeftWidth="1px" 
          borderColor={borderColor}
          width="300px"
          p={6}
        >
          <Box>
            <Text color="gray.600" fontSize="sm" mb={2}>
              Cash as on 01/04/2024
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb={6}>
              ₹1,05,750.00
            </Text>

            <Box mb={4}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="green.500" fontSize="sm">Incoming</Text>
                <HStack spacing={1}>
                  <Text color="green.500" fontSize="sm">₹7,85,752.40</Text>
                  <Text color="green.500" fontSize="sm">+</Text>
                </HStack>
              </Flex>
            </Box>

            <Box mb={4}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="red.500" fontSize="sm">Outgoing</Text>
                <HStack spacing={1}>
                  <Text color="red.500" fontSize="sm">₹0.00</Text>
                  <Text color="red.500" fontSize="sm">-</Text>
                </HStack>
              </Flex>
            </Box>

            <Box pt={4} borderTopWidth="1px" borderColor={borderColor}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="gray.600" fontSize="sm">
                  Cash as on 31/03/2025
                </Text>
                <Text fontSize="sm" fontWeight="semibold">
                  ₹8,91,502.40
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.400" textAlign="right">=</Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      {/* Contact Support Button - Now outside the grid, at the bottom right of the entire box */}
      <Button
        position="absolute"
        bottom={4}
        right={4}
        colorScheme="blue"
        size="sm"
        leftIcon={<Icon as={FiHelpCircle} boxSize={4} />}
        zIndex={1}
      >
        Contact Support
      </Button>
    </Box>
  );
}; 