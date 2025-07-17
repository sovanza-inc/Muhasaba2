'use client'

import { Box, Flex, Text, Button, Icon, useColorModeValue, Link, useBreakpointValue } from '@chakra-ui/react'
import { FiAlertTriangle, FiX } from 'react-icons/fi'

interface NotificationBannerProps {
  title: string
  description: string
  onClose?: () => void
}

export function NotificationBanner({ title, description, onClose }: NotificationBannerProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' } as const)
  const iconBoxSize = useBreakpointValue({ base: '32px', md: '40px' })
  const iconSize = useBreakpointValue({ base: 5, md: 6 })
  const spacing = useBreakpointValue({ base: 3, md: 4 })
  const buttonWidth = useBreakpointValue({ base: 'full', md: 'auto' })

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
      <Flex 
        direction={flexDirection} 
        gap={spacing}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          bg="#FFD78F"
          width={iconBoxSize}
          height={iconBoxSize}
          flexShrink={0}
        >
          <Icon 
            as={FiAlertTriangle} 
            boxSize={iconSize} 
            color="#F57C00"
          />
        </Box>
        
        <Box flex="1">
          <Text fontWeight="medium" mb={1}>{title}</Text>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
            {description}
            {' '}
            <Link color="blue.500" href="#">Learn more about handling TDS rate updates</Link>.
          </Text>
        </Box>

        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align={{ base: 'stretch', md: 'center' }} 
          gap={3}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            colorScheme="blue"
            size="md"
            px={4}
            width={buttonWidth}
            order={{ base: 2, md: 1 }}
          >
            View TDS Rate Updates
          </Button>
          
          {onClose && (
            <Icon 
              as={FiX} 
              boxSize={5} 
              cursor="pointer" 
              onClick={onClose}
              color="gray.500"
              _hover={{ color: 'gray.700' }}
              alignSelf={{ base: 'flex-end', md: 'center' }}
              order={{ base: 1, md: 2 }}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  )
} 