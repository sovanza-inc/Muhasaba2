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
} from '@chakra-ui/react'

export function SupportSection() {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  return (
    <Box 
      borderTop="1px" 
      borderColor={borderColor}
      py={4}
      px={8}
    >
      <Flex justify="space-between" align="center">
        {/* Left Section - Profile and Greeting */}
        <HStack spacing={4}>
          <Box 
    
            borderRadius="md" 
            overflow="hidden"
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
            <Text fontSize="lg" fontWeight="medium">Hello, support</Text>
            <Text fontSize="sm" color="gray.600">Vrajatechnologies</Text>
          </VStack>
        </HStack>

        {/* Right Section - Helpline Info */}
        <VStack align="end" spacing={1}>
          <HStack>
            <Text>Zoho Books India Helpline:</Text>
            <Link href="tel:18003093036" color="blue.500">18003093036</Link>
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