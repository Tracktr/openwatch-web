'use client';

import { Loader2 } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  useApplicationsServiceDeleteApplicationsById,
  useApplicationsServiceDeleteApplicationsByIdApiKeysByKey,
  useApplicationsServiceGetApplications,
  useApplicationsServicePatchApplicationsByIdApiKeysByKey,
  useApplicationsServicePostApplicationsByIdApiKeys
} from '@/openapi/queries';
import { getQueryClient } from '@/providers/query';
import { toast } from 'sonner';
import { useState } from 'react';
import { ApplicationCard } from './applications/application-card';
import { CreateApiKeyDialog } from './applications/create-api-key-dialog';

export function ApplicationList() {
  const { data, isLoading } = useApplicationsServiceGetApplications();
  const queryClient = getQueryClient();
  const [createKeyDialogOpen, setCreateKeyDialogOpen] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null);

  const { mutate: deleteApplication } = useApplicationsServiceDeleteApplicationsById({
    mutationKey: ['deleteApplication'],
    onSuccess: () => {
      toast.success('Application deleted successfully.');
      queryClient.invalidateQueries({ queryKey: ['ApplicationsServiceGetApplications'] });
    },
    onError: () => {
      toast.error('Failed to delete application. Please try again.');
    }
  });

  const { mutate: toggleApiKeyEnabled } = useApplicationsServicePatchApplicationsByIdApiKeysByKey({
    mutationKey: ['toggleApiKeyEnabled'],
    onSuccess: () => {
      toast.success('API key successfully updated.');
      queryClient.invalidateQueries({ queryKey: ['ApplicationsServiceGetApplications'] });
    },
    onError: () => {
      toast.error('Failed to update application. Please try again.');
    }
  });

  const { mutate: deleteApiKey } = useApplicationsServiceDeleteApplicationsByIdApiKeysByKey({
    mutationKey: ['deleteApiKey'],
    onSuccess: () => {
      toast.success('API key successfully deleted.');
      queryClient.invalidateQueries({ queryKey: ['ApplicationsServiceGetApplications'] });
    },
    onError: () => {
      toast.error('Failed to delete API key. Please try again.');
    }
  });

  const { mutate: createApiKey, isPending: isCreatingApiKey } = useApplicationsServicePostApplicationsByIdApiKeys({
    mutationKey: ['createApiKey'],
    onSuccess: () => {
      toast.success('API key successfully created.');
      queryClient.invalidateQueries({ queryKey: ['ApplicationsServiceGetApplications'] });
      setCreateKeyDialogOpen(false);
      setSelectedApplicationId(null);
    },
    onError: () => {
      toast.error('Failed to create API key. Please try again.');
    }
  });

  const handleCreateApiKey = (applicationId: string) => {
    setSelectedApplicationId(applicationId);
    setCreateKeyDialogOpen(true);
  };

  const handleSubmitApiKey = (name: string) => {
    if (selectedApplicationId) {
      createApiKey({
        id: selectedApplicationId,
        requestBody: { name }
      });
    }
  };

  const handleToggleApiKey = (applicationId: string, key: string) => {
    toggleApiKeyEnabled({ id: applicationId, key });
  };

  const handleDeleteApiKey = (applicationId: string, key: string) => {
    deleteApiKey({ id: applicationId, key });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (data?.applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No applications</CardTitle>
          <CardDescription>You haven&apos;t created any applications yet.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <div className="grid gap-4">
        {data?.applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onDelete={(id) => deleteApplication({ id })}
            onCreateKey={handleCreateApiKey}
            onToggleKey={handleToggleApiKey}
            onDeleteKey={handleDeleteApiKey}
          />
        ))}
      </div>

      <CreateApiKeyDialog
        open={createKeyDialogOpen}
        onOpenChange={setCreateKeyDialogOpen}
        onSubmit={handleSubmitApiKey}
        isCreating={isCreatingApiKey}
      />
    </>
  );
}
