import { redirect } from "next/navigation"

import { ApplicationList } from "@/components/application-list"
import { CreateApplication } from "@/components/create-application"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { auth } from "@/lib/auth"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Applications" text="Create and manage your API applications.">
        <CreateApplication />
      </DashboardHeader>
      <ApplicationList />
    </DashboardShell>
  )
}

