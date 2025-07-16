import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const accountId = searchParams.get('account_id')

  // Return mock balance based on account ID
  const balances = {
    'acc-1': {
      account_id: 'acc-1',
      balance: 50000,
      currency: 'AED',
      type: 'AVAILABLE',
      credit_debit_indicator: 'CREDIT',
      updated_at: new Date().toISOString()
    },
    'acc-2': {
      account_id: 'acc-2',
      balance: 75000,
      currency: 'AED',
      type: 'AVAILABLE',
      credit_debit_indicator: 'CREDIT',
      updated_at: new Date().toISOString()
    },
    'acc-3': {
      account_id: 'acc-3',
      balance: 100000,
      currency: 'AED',
      type: 'AVAILABLE',
      credit_debit_indicator: 'CREDIT',
      updated_at: new Date().toISOString()
    }
  }

  return NextResponse.json(balances[accountId as keyof typeof balances] || {
    account_id: accountId || 'unknown',
    balance: 0,
    currency: 'AED',
    type: 'AVAILABLE',
    credit_debit_indicator: 'CREDIT',
    updated_at: new Date().toISOString()
  })
} 