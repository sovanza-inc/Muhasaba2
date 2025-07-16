import { NextResponse } from 'next/server'

export async function GET() {
  // Mock identity data in the expected format
  const identityData = {
    data: {
      identities: [
        {
          full_legal_name: 'Al Baraka Investment Management LLC',
          email_address: 'operations@albaraka-investments.ae',
          mobile_number: '+971 50 123 4567',
          address: {
            address_line: 'Office 1501, Al Moosa Tower 2, Sheikh Zayed Road, Dubai, UAE'
          },
          regional_data: {
            data: {
              full_name: 'Al Baraka Investment Management LLC',
              email_address: 'operations@albaraka-investments.ae',
              mobile_number: '+971 50 123 4567',
              gender: 'COMPANY',
              birth_date: '2018-03-15', // Company establishment date
              national_identity_number: 'DMCC-9276514',
              address: 'Office 1501, Al Moosa Tower 2, Sheikh Zayed Road, Dubai, UAE',
              additional_details: {
                trade_license: 'DED-892371',
                tax_registration: 'TRN-100384756200',
                legal_status: 'Limited Liability Company',
                authorized_capital: 'AED 5,000,000',
                business_activities: [
                  'Investment Management',
                  'Financial Advisory',
                  'Asset Management'
                ],
                regulatory_status: 'DFSA Regulated',
                establishment_date: '2018-03-15',
                expiry_date: '2024-03-14',
                manager_name: 'Ahmed Al Mahmood',
                manager_nationality: 'UAE',
                manager_position: 'Managing Director'
              }
            }
          }
        }
      ]
    }
  }

  return NextResponse.json(identityData)
} 