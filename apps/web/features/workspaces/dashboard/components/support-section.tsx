'use client'

import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  HStack,
  VStack,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'

export function SupportSection() {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const padding = useBreakpointValue({ base: 4, md: 6 })
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' }) as 'column' | 'row'
  const spacing = useBreakpointValue({ base: 4, md: 0 })
  
  return (
    <Box 
      borderTop="1px" 
      borderColor={borderColor}
      py={padding}
      px={padding}
    >
      <Flex 
        justify="space-between" 
        align={{ base: 'stretch', md: 'center' }}
        direction={flexDirection}
        gap={spacing}
      >
        {/* Left Section - Profile and Greeting */}
        <HStack spacing={4} align="center">
          <Box 
            borderRadius="md" 
            overflow="hidden"
            width={{ base: '40px', md: '48px' }}
            height={{ base: '40px', md: '48px' }}
            flexShrink={0}
          >
            <Image
              src="/img/onboarding/supportbar-img.svg"
              alt="Support Profile"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={0}>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">Hello, support</Text>
            <Text fontSize="sm" color="gray.600">Vrajatechnologies</Text>
          </VStack>
        </HStack>

        {/* Right Section - Helpline Info */}
        <VStack 
          align={{ base: 'start', md: 'end' }} 
          spacing={1}
          width={{ base: 'full', md: 'auto' }}
        >
          <HStack spacing={2}>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Zoho Books India Helpline:</Text>
            <Link 
              href="tel:18003093036" 
              color="blue.500"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              18003093036
            </Link>
          </HStack>
          <Text fontSize="sm" color="gray.600">Mon - Fri • 9:00 AM - 7:00 PM • Toll Free</Text>
          <Text fontSize="sm" color="gray.500">
            English, हिंदी, தமிழ், తెలుగు, മലയാളം, ಕನ್ನಡ
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
} 