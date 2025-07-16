import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const appUserId = searchParams.get('app_user_id')

  // Return mock customer data
  return NextResponse.json({
    customer_id: `mock-customer-${appUserId}`,
    created_at: new Date().toISOString(),
    status: 'active'
  })
} 