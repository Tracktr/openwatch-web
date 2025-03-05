'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';
import { ApiKeyItem } from './api-key-item';
import { ApplicationDto } from '@/openapi/requests';

interface ApplicationCardProps {
  application: ApplicationDto;
  onDelete: (id: string) => void;
  onCreateKey: (id: string) => void;
  onToggleKey: (applicationId: string, key: string) => void;
  onDeleteKey: (applicationId: string, key: string) => void;
}

export function ApplicationCard({
  application,
  onDelete,
  onCreateKey,
  onToggleKey,
  onDeleteKey
}: ApplicationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          {application.name}
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(application.id)}
            className="ml-auto"
            title="Delete application"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>Application ID: {application.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="text-base font-semibold text-foreground">API Keys</div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCreateKey(application.id)}
          >
            <Plus className="mr-2 h-4 w-4" />
            New API Key
          </Button>
        </div>

        {application.apiKeys && application.apiKeys.length > 0 ? (
          <div className="divide-y divide-border">
            {application.apiKeys.map((apiKey, index) => (
              <ApiKeyItem
                key={index}
                apiKey={apiKey}
                applicationId={application.id}
                onToggle={onToggleKey}
                onDelete={onDeleteKey}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No API keys available for this application.</p>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Use these API keys to authenticate requests to the OpenWatch API.
        </p>
      </CardFooter>
    </Card>
  );
}
