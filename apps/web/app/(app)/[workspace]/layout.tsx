import { Suspense } from 'react'

import { ErrorBoundary } from '@saas-ui/react'
import { DashboardLayout } from '#features/common/layouts/dashboard-layout'
import { BillingProvider } from '#features/billing/providers/billing-provider'
import { WorkspaceLoading } from '#features/workspaces/workspace.loading'
import { WorkspaceNotFound } from '#features/workspaces/workspace.not-found'
import { HydrateClient, api } from '#lib/trpc/rsc'
import { QuestionnaireFlow } from '#components/Questionnaire/QuestionnaireFlow'
import { QuestionnaireProvider } from '#components/Questionnaire/QuestionnaireProvider'

export default async function WorkspaceLayout(props: {
  params: Promise<{
    workspace: string
  }>
  children: React.ReactNode
}) {
  const slug = (await props.params).workspace

  api.workspaces.bySlug.prefetch({
    slug,
  })

  return (
    <HydrateClient>
      <Suspense fallback={<WorkspaceLoading />}>
        <ErrorBoundary fallback={<WorkspaceNotFound />}>
          <QuestionnaireFlow>
            <QuestionnaireProvider>
              <BillingProvider>
                <DashboardLayout>
                  {props.children}
                </DashboardLayout>
              </BillingProvider>
            </QuestionnaireProvider>
          </QuestionnaireFlow>
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  )
}
