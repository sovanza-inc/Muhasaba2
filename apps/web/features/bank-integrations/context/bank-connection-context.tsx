'use client'

import React, { createContext, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { useWorkspace } from '#features/common/hooks/use-workspace'

interface BankConnectionContextType {
  hasBankConnection: boolean
  isRedirecting: boolean
  showConnectionModal: boolean
  redirectToBankIntegration: () => void
  initialCheckDone: boolean
  isLoading: boolean
  shouldRestrictUI: boolean
}

const BankConnectionContext = createContext<BankConnectionContextType | undefined>(undefined)

export function BankConnectionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const workspaceSlug = useWorkspace()

  const redirectToBankIntegration = React.useCallback(async () => {
    if (workspaceSlug) {
      router.push(`/${workspaceSlug}/bank-integrations`)
    }
  }, [router, workspaceSlug])

  // Always return positive states to remove restrictions
  const value = React.useMemo(() => ({
    hasBankConnection: true, // Always return true to remove restrictions
    isRedirecting: false,
    showConnectionModal: false,
    redirectToBankIntegration,
    initialCheckDone: true,
    isLoading: false,
    shouldRestrictUI: false // Always false to remove UI restrictions
  }), [redirectToBankIntegration])

  return (
    <BankConnectionContext.Provider value={value}>
      {children}
    </BankConnectionContext.Provider>
  )
}

export function useBankConnection() {
  const context = useContext(BankConnectionContext)
  if (context === undefined) {
    throw new Error('useBankConnection must be used within a BankConnectionProvider')
  }
  return context
} 