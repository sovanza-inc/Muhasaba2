'use client'

import { AppShell, AppShellProps } from '@saas-ui/react'

import { PaymentOverdueBanner } from '#features/billing/components/payment-overdue-banner'

export interface AppLayoutProps extends AppShellProps {}

/**
 * Base layout for app pages.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  sidebar,
  ...rest
}) => {
  return (
    <AppShell
      h="100vh"
      sidebar={sidebar}
      navbar={<PaymentOverdueBanner />}
      sx={{
        '& > div:last-child': { // Main content container
          height: '100vh',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none'
        }
      }}
      {...rest}
    >
      {children}
    </AppShell>
  )
}
