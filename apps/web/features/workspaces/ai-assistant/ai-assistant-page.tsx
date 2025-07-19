'use client'

import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
  Button,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { FiSearch, FiUpload, FiSend, FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import { Page, PageBody, PageHeader, Toolbar, ToolbarButton } from '@saas-ui-pro/react'

export function AIAssistantPage() {
  const [messageInput, setMessageInput] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const showSidebar = useBreakpointValue({ base: false, lg: true })

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput('')
    }
  }

  const KnowledgeBaseSidebar = () => (
    <VStack spacing={6} width="full" p={6}>
      <Text fontSize="xl" fontWeight="semibold">Knowledge Base</Text>
      
      {/* Upload Section */}
      <Box 
        bg="white" 
        p={6} 
        borderRadius="lg" 
        borderWidth="2px" 
        borderStyle="dashed" 
        borderColor="gray.200" 
        textAlign="center"
        width="full"
      >
        <Icon as={FiUpload} boxSize={6} color="gray.400" mb={2} />
        <Text mb={2}>
          Drag & drop your PDFs here, or{' '}
          <Text as="span" color="green.500" cursor="pointer">browse files</Text>
        </Text>
        <Button colorScheme="green" size="sm" mt={4}>
          Upload Document
        </Button>
      </Box>

      {/* Uploaded Documents */}
      <VStack align="stretch" spacing={3} width="full">
        <Text fontSize="lg" fontWeight="semibold" mb={2}>Uploaded Documents</Text>
        <Flex justify="space-between" align="center" p={3} bg="white" borderRadius="md">
          <Text>Q1_2024_Financial_Report.pdf</Text>
          <Icon as={FiUpload} cursor="pointer" />
        </Flex>
        <Flex justify="space-between" align="center" p={3} bg="white" borderRadius="md">
          <Text>Annual_Budget_2024.pdf</Text>
          <Icon as={FiUpload} cursor="pointer" />
        </Flex>
        <Flex justify="space-between" align="center" p={3} bg="white" borderRadius="md">
          <Text>Tax_Returns_2023.pdf</Text>
          <Icon as={FiUpload} cursor="pointer" />
        </Flex>
      </VStack>
    </VStack>
  )

  return (
    <Page height="100vh" position="relative">
      <PageHeader
        title="AI Assistant"
        toolbar={
          <Toolbar>
            <InputGroup maxW={{ base: "200px", md: "300px" }}>
              <InputLeftElement>
                <Icon as={FiSearch} color="gray.400" />
              </InputLeftElement>
              <Input 
                placeholder="Search transactions..." 
                bg="gray.100"
                borderRadius="md"
              />
            </InputGroup>
            {!showSidebar && (
              <ToolbarButton
                icon={<FiMenu />}
                label="Knowledge Base"
                onClick={onOpen}
              />
            )}
          </Toolbar>
        }
      />
      <PageBody>
        <Flex height="full">
          {/* Main Chat Area */}
          <Box flex="1" display="flex" flexDirection="column">
            {/* Chat Messages */}
            <VStack
              flex="1"
              spacing={4}
              p={4}
              overflowY="auto"
              align="stretch"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none'
              }}
            >
              {/* AI Message */}
              <Box 
                bg="#E5F9F4" 
                p={4} 
                borderRadius="lg" 
                maxW={{ base: "90%", md: "80%" }}
                mb={4}
              >
                <Text>Hello! I'm Muhasaba AI, your intelligent accounting assistant. How can I help you today?</Text>
                <Text fontSize="sm" color="gray.500" mt={2}>10:00 AM</Text>
              </Box>

              {/* User Message */}
              <Box 
                bg="green.500" 
                color="white" 
                p={4} 
                borderRadius="lg" 
                maxW={{ base: "90%", md: "80%" }}
                ml="auto" 
                mb={4}
              >
                <Text>Can you summarize the Q3 2023 financial performance?</Text>
                <Text fontSize="sm" color="whiteAlpha.800" mt={2}>10:02 AM</Text>
              </Box>

              {/* AI Response */}
              <Box 
                bg="#E5F9F4" 
                p={4} 
                borderRadius="lg" 
                maxW={{ base: "90%", md: "80%" }}
              >
                <Text>
                  Certainly! For Q3 2023, our revenue increased by 15% to $1.2M, driven by strong sales in the new product line. Net profit stood at $350K, a 10% improvement from the previous quarter. Operating expenses were well-managed, showing a slight decrease. Would you like a detailed breakdown of any specific area?
                </Text>
                <Text fontSize="sm" color="gray.500" mt={2}>10:00 AM</Text>
              </Box>
            </VStack>

            {/* Message Input */}
            <Box p={4} borderTop="1px" borderColor={borderColor}>
              <InputGroup size="lg">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Ask Muhasaba AI anything..."
                  bg="white"
                  borderColor={borderColor}
                  pr="4.5rem"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage()
                    }
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button 
                    h="1.75rem" 
                    size="sm" 
                    onClick={handleSendMessage}
                    colorScheme="green"
                    isDisabled={!messageInput.trim()}
                  >
                    <Icon as={FiSend} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>

          {/* Knowledge Base Sidebar - Desktop */}
          {showSidebar && (
            <Box 
              w="400px" 
              bg="gray.50" 
              borderLeft="1px" 
              borderColor={borderColor}
              display={{ base: 'none', lg: 'block' }}
            >
              <KnowledgeBaseSidebar />
            </Box>
          )}

          {/* Knowledge Base Sidebar - Mobile Drawer */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Knowledge Base</DrawerHeader>
              <DrawerBody>
                <KnowledgeBaseSidebar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </PageBody>
    </Page>
  )
} 