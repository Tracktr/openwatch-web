import { ApplicationList } from "@/components/application-list"
import { CreateApplication } from "@/components/create-application"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Applications" text="Create and manage your API applications.">
        <CreateApplication />
      </DashboardHeader>
      <ApplicationList />
    </DashboardShell>
  )
}

