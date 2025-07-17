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
  useBreakpointValue,
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
  const chartHeight = useBreakpointValue({ base: '300px', md: '400px' });
  const gridLayout = useBreakpointValue({ base: '1fr', md: '1fr auto' }) as string;
  const contentPadding = useBreakpointValue({ base: 4, md: 6 });
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const headingSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      bg={bgColor}
      position="relative"
    >
      {/* Header */}
      <Flex 
        justify="space-between" 
        align="center" 
        p={contentPadding} 
        borderBottomWidth="1px" 
        borderColor={borderColor}
        direction={{ base: 'column', sm: 'row' }}
        gap={3}
      >
        <HStack spacing={2}>
          <Text fontSize={headingSize} fontWeight="medium">Cash Flow</Text>
          <Icon as={FiHelpCircle} color="gray.400" boxSize={4} />
        </HStack>
        <Select
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
          size="sm"
          width={{ base: 'full', sm: 'auto' }}
          borderColor={borderColor}
          _hover={{ borderColor: 'gray.300' }}
          bg="transparent"
        >
          <option value="This Fiscal Year">This Fiscal Year</option>
          <option value="Last Fiscal Year">Last Fiscal Year</option>
        </Select>
      </Flex>

      {/* Main Content */}
      <Grid templateColumns={gridLayout} minHeight={chartHeight}>
        {/* Graph Section */}
        <GridItem position="relative" p={contentPadding}>
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
          borderLeftWidth={{ base: 0, md: '1px' }}
          borderTopWidth={{ base: '1px', md: 0 }}
          borderColor={borderColor}
          width={{ base: 'auto', md: '300px' }}
          p={contentPadding}
        >
          <Box>
            <Text color="gray.600" fontSize={fontSize} mb={2}>
              Cash as on 01/04/2024
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" mb={6}>
              ₹1,05,750.00
            </Text>

            <Box mb={4}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="green.500" fontSize={fontSize}>Incoming</Text>
                <HStack spacing={1}>
                  <Text color="green.500" fontSize={fontSize}>₹7,85,752.40</Text>
                  <Text color="green.500" fontSize={fontSize}>+</Text>
                </HStack>
              </Flex>
            </Box>

            <Box mb={4}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="red.500" fontSize={fontSize}>Outgoing</Text>
                <HStack spacing={1}>
                  <Text color="red.500" fontSize={fontSize}>₹0.00</Text>
                  <Text color="red.500" fontSize={fontSize}>-</Text>
                </HStack>
              </Flex>
            </Box>

            <Box pt={4} borderTopWidth="1px" borderColor={borderColor}>
              <Flex justify="space-between" align="center" mb={1}>
                <Text color="gray.600" fontSize={fontSize}>
                  Cash as on 31/03/2025
                </Text>
                <Text fontSize={fontSize} fontWeight="semibold">
                  ₹8,91,502.40
                </Text>
              </Flex>
              <Text fontSize={fontSize} color="gray.400" textAlign="right">=</Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      {/* Contact Support Button */}
      <Button
        position="absolute"
        bottom={4}
        right={4}
        colorScheme="blue"
        size="sm"
        leftIcon={<Icon as={FiHelpCircle} boxSize={4} />}
        zIndex={1}
        display={{ base: 'none', md: 'flex' }}
      >
        Contact Support
      </Button>
    </Box>
  );
}; 