import { NextResponse } from 'next/server'

export async function GET() {
  // Return mock connected banks
  return NextResponse.json([
    {
      id: 'mock-bank-1',
      bank_identifier: 'EMIRATES ISLAMIC BANK',
      name: 'Emirates Islamic Bank',
      status: 'connected',
      created_at: new Date().toISOString(),
      permissions: {
        identity: true,
        accounts: true,
        balance: true,
        transactions: true
      }
    },
    {
      id: 'mock-bank-2',
      bank_identifier: 'DUBAI ISLAMIC BANK',
      name: 'Dubai Islamic Bank',
      status: 'connected',
      created_at: new Date().toISOString(),
      permissions: {
        identity: true,
        accounts: true,
        balance: true,
        transactions: true
      }
    }
  ])
} 