import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const entityId = searchParams.get('entity_id')

  // Return mock accounts based on bank ID
  const accounts = entityId === 'mock-bank-1' ? [
    {
      account_id: 'acc-1',
      status: 'ACTIVE',
      status_update_date_time: new Date().toISOString(),
      currency: 'AED',
      account_type: 'CURRENT',
      account_sub_type: 'CHECKING',
      nickname: 'Main Business Account',
      opening_date: '2023-01-01',
      account: [{
        scheme_name: 'IBAN',
        identification: 'AE123456789012345678901',
        name: 'Business Current Account'
      }]
    },
    {
      account_id: 'acc-2',
      status: 'ACTIVE',
      status_update_date_time: new Date().toISOString(),
      currency: 'AED',
      account_type: 'SAVINGS',
      account_sub_type: 'BUSINESS_SAVINGS',
      nickname: 'Business Savings',
      opening_date: '2023-01-01',
      account: [{
        scheme_name: 'IBAN',
        identification: 'AE987654321098765432109',
        name: 'Business Savings Account'
      }]
    }
  ] : [
    {
      account_id: 'acc-3',
      status: 'ACTIVE',
      status_update_date_time: new Date().toISOString(),
      currency: 'AED',
      account_type: 'CURRENT',
      account_sub_type: 'CHECKING',
      nickname: 'Secondary Business Account',
      opening_date: '2023-02-01',
      account: [{
        scheme_name: 'IBAN',
        identification: 'AE567890123456789012345',
        name: 'Business Current Account'
      }]
    }
  ]

  return NextResponse.json(accounts)
} 