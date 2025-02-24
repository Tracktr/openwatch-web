'use client';

import { Loader2, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useDefaultServiceDeleteApplicationsById, useDefaultServiceGetApplications } from '@/openapi/queries';
import CopyButton from './copy-button';
import { Button } from './ui/button';
import { getQueryClient } from '@/providers/query';
import { toast } from 'sonner';

export function ApplicationList() {
  const { data, isLoading } = useDefaultServiceGetApplications();
  const queryClient = getQueryClient();

  const { mutate: deleteApplication } = useDefaultServiceDeleteApplicationsById({
    mutationKey: ['deleteApplication'],
    onSuccess: () => {
      toast.success('Application deleted successfully.');
      queryClient.invalidateQueries({ queryKey: ['DefaultServiceGetApplications'] });
    },
    onError: () => {
      toast.error('Failed to delete application. Please try again.');
    }
  });

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
    <div className="grid gap-4">
      {data?.applications.map((application) => (
        <Card key={application.id}>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              {application.name}
              <Button
                variant="destructive"
                size="icon"
                onClick={() => deleteApplication({ id: application.id })}
                className='ml-auto'
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
            <CardDescription>Application ID: {application.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                {application.apiKey.key}
              </code>
              <CopyButton valueToCopy={application.apiKey.key} />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Use this API key to authenticate requests to the OpenWatch API.
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
