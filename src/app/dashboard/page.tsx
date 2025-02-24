import { ApplicationList } from '@/components/application-list';
import { CreateApplication } from '@/components/create-application';
import { DashboardHeader } from '@/components/dashboard-header';

export default async function DashboardPage() {
  return (
    <>
      <DashboardHeader heading="Applications" text="Create and manage your API applications.">
        <CreateApplication />
      </DashboardHeader>
      <ApplicationList />
    </>
  );
}
