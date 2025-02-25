import { ApplicationList } from '@/components/application-list';
import { CreateApplication } from '@/components/create-application';
import { DashboardHeader } from '@/components/dashboard-header';

export default async function DashboardPage() {
  return (
    <div className='space-y-4 p-4 md:p-8 pt-6 min-h-screen'>
      <DashboardHeader heading="Applications" text="Create and manage your API applications.">
        <CreateApplication />
      </DashboardHeader>
      <ApplicationList />
    </div>
  );
}
