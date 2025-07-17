'use client'

import { Box, Flex, Text, Button, Icon, useColorModeValue, Link } from '@chakra-ui/react'
import { FiAlertTriangle, FiX } from 'react-icons/fi'

interface NotificationBannerProps {
  title: string
  description: string
  onClose?: () => void
}

export function NotificationBanner({ title, description, onClose }: NotificationBannerProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      p={4}
      mb={6}
      bg={bgColor}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      position="relative"
    >
      <Flex align="flex-start" gap={4}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          bg="#FFD78F"
          width="40px"
          height="40px"
        >
          <Icon 
            as={FiAlertTriangle} 
            boxSize={6} 
            color="#F57C00"
          />
        </Box>
        
        <Box flex="1">
          <Text fontWeight="medium" mb={1}>{title}</Text>
          <Text color="gray.600">
            {description}
            {' '}
            <Link color="blue.500" href="#">Learn more about handling TDS rate updates</Link>.
          </Text>
        </Box>

        <Flex direction="column" align="flex-end" gap={4}>
          {onClose && (
            <Icon 
              as={FiX} 
              boxSize={5} 
              cursor="pointer" 
              onClick={onClose}
              color="gray.500"
              _hover={{ color: 'gray.700' }}
            />
          )}
          
          <Button
            colorScheme="blue"
            size="md"
            px={4}
          >
            View TDS Rate Updates
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
} 