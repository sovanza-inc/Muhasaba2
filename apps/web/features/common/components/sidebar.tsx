'use client'

import * as React from 'react'

import {
  Box,
  Stack,
  useBreakpointValue,
  Image,
  Flex,
} from '@chakra-ui/react'
import {
  Command,
  ResizeHandle,
  ResizeHandler,
  Resizer,
} from '@saas-ui-pro/react'
import {
  NavGroup,
  NavItem,
  NavItemProps,
  Sidebar,
  SidebarOverlay,
  SidebarProps,
  SidebarSection,
  useHotkeysShortcut,
} from '@saas-ui/react'
import { Route } from 'next'
import { useRouter } from 'next/navigation'

import { useActivePath } from '@acme/next'

import { usePath } from '#features/common/hooks/use-path'
import { useUserSettings } from '#lib/user-settings/use-user-settings'

export interface AppSidebarProps extends SidebarProps {}

interface AppSidebarLinkBaseProps {
  href: Route
  label: string
  hotkey?: string
  iconPath: string
}

// Create a type that excludes 'icon' from NavItemProps and combines with our base props
type AppSidebarLinkProps = Omit<NavItemProps, 'icon' | keyof AppSidebarLinkBaseProps> & AppSidebarLinkBaseProps

const AppSidebarLink: React.FC<AppSidebarLinkProps> = (props) => {
  const { href, label, hotkey, iconPath, ...rest } = props
  const { push } = useRouter()
  const isActive = useActivePath(href as string)

  // Move hook outside conditional
  const hotkeyCommand = useHotkeysShortcut(hotkey || '', () => {
    if (hotkey?.startsWith('navigation.')) {
      push(href as string)
    }
  }, [href, hotkey])

  const command = hotkey?.startsWith('navigation.') ? hotkeyCommand : null

  return (
    <NavItem
      href={href}
      isActive={isActive}
      {...rest}
      px={4}
      py={3}
      fontSize="sm"
      fontWeight="medium"
      color="gray.600"
      sx={{
        _dark: { color: 'gray.300' },
        _hover: {
          bg: 'gray.100',
          _dark: { bg: 'gray.700' }
        },
        _active: {
          bg: 'gray.200',
          _dark: { bg: 'gray.600' }
        }
      }}
      display="flex"
      alignItems="center"
      gap={3}
      icon={
        <Box 
          sx={{
            color: isActive ? 'blue.500' : 'gray.500',
            _dark: { color: isActive ? 'blue.400' : 'gray.400' }
          }}
        >
          <Image 
            src={iconPath} 
            alt={`${label} icon`}
            width="20px"
            height="20px"
            filter={isActive ? 'none' : 'grayscale(100%)'}
            opacity={isActive ? 1 : 0.7}
            transition="all 0.2s"
            _hover={{ opacity: 0.9 }}
          />
        </Box>
      }
      tooltipProps={{
        label: (
          <>
            {label} {<Command>{command}</Command>}
          </>
        ),
      }}
    >
      <Box as="span" noOfLines={1}>
        {label}
      </Box>
    </NavItem>
  )
}

export const AppSidebar: React.FC<AppSidebarProps> = (props) => {
  const [{ sidebarWidth }, setUserSettings] = useUserSettings()
  const { variant, colorScheme } = props
  const isCompact = variant === 'compact'

  const onResize: ResizeHandler = ({ width }) => {
    setUserSettings('sidebarWidth', width)
  }

  return (
    <Resizer
      defaultWidth={isCompact ? 60 : sidebarWidth}
      onResize={onResize}
      isResizable={useBreakpointValue(
        { base: false, lg: true },
        { fallback: 'lg' },
      )}
    >
      <Sidebar
        {...props}
        variant={variant}
        colorScheme={colorScheme}
        suppressHydrationWarning
        bg="white"
        borderRightWidth="1px"
        borderRightColor="gray.200"
        height="100vh"
        overflow="hidden"
        sx={{
          _dark: {
            bg: 'gray.900',
            borderRightColor: 'gray.700'
          }
        }}
      >
        <Stack flex="1" spacing="0">
          <SidebarSection>
            <Flex 
              px={4} 
              py={4} 
              alignItems="center" 
              height="64px" 
              borderBottomWidth="1px" 
              borderBottomColor="gray.200"
              sx={{
                _dark: {
                  borderBottomColor: 'gray.700'
                }
              }}
            >
              <Image
                src="/img/onboarding/muhasaba-logo.svg"
                alt="Muhasaba"
                height="32px"
                objectFit="contain"
              />
            </Flex>
          </SidebarSection>

          <SidebarSection flex="1">
            <NavGroup>
              <AppSidebarLink
                href={usePath('/integrations')}
                label="Integrations"
                iconPath="/img/onboarding/sidebar-icons/integration-icon.svg"
                hotkey="navigation.integrations"
              />
              <AppSidebarLink
                href={usePath('/')}
                label="Dashboard"
                iconPath="/img/onboarding/sidebar-icons/dashboard-icon.svg"
                hotkey="navigation.dashboard"
              />
              <AppSidebarLink
                href={usePath('/reconciliation')}
                label="Reconciliation"
                iconPath="/img/onboarding/sidebar-icons/reconciliation-icon.svg"
                hotkey="navigation.reconciliation"
              />
              <AppSidebarLink
                href={usePath('/ai-assistant')}
                label="AI Assistant"
                iconPath="/img/onboarding/sidebar-icons/ai-assistant-icon.svg"
                hotkey="navigation.aiAssistant"
              />
              <AppSidebarLink
                href={usePath('/reports')}
                label="Reports"
                iconPath="/img/onboarding/sidebar-icons/reports-icon.svg"
                hotkey="navigation.reports"
              />
              <AppSidebarLink
                href={usePath('/human-accountants')}
                label="Human Accountants"
                iconPath="/img/onboarding/sidebar-icons/human-accountants-icon.svg"
                hotkey="navigation.humanAccountants"
              />
              <AppSidebarLink
                href={usePath('/settings')}
                label="Settings"
                iconPath="/img/onboarding/sidebar-icons/settings-icon.svg"
                hotkey="navigation.settings"
              />
            </NavGroup>
          </SidebarSection>
        </Stack>
        <SidebarOverlay />
        <ResizeHandle />
      </Sidebar>
    </Resizer>
  )
}
