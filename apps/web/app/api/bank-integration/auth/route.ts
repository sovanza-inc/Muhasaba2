import { NextResponse } from 'next/server'

export async function GET() {
  // Return mock auth token
  return NextResponse.json({
    access_token: 'mock-auth-token',
    expires_in: 3600,
    token_type: 'Bearer'
  })
} 