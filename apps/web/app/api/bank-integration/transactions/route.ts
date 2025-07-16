import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const accountId = searchParams.get('account_id')

  // Generate mock transactions based on account ID
  const transactions = Array.from({ length: 10 }, (_, index) => {
    const isCredit = Math.random() > 0.5
    const amount = Math.floor(Math.random() * 10000) + 100
    const date = new Date()
    date.setDate(date.getDate() - index)

    return {
      transaction_id: `tx-${accountId}-${index}`,
      account_id: accountId,
      transaction_information: isCredit ? 'Payment Received' : 'Payment Sent',
      transaction_reference: `REF${Math.random().toString(36).substring(7).toUpperCase()}`,
      amount: {
        amount: amount,
        currency: 'AED'
      },
      credit_debit_indicator: isCredit ? 'CREDIT' : 'DEBIT',
      status: 'COMPLETED',
      booking_date_time: date.toISOString(),
      value_date_time: date.toISOString(),
      merchant: {
        name: isCredit ? 'Client Payment' : 'Supplier Payment',
        category: isCredit ? 'Income' : 'Expense'
      }
    }
  })

  return NextResponse.json({
    transactions: transactions,
    links: {
      next: null
    }
  })
} 