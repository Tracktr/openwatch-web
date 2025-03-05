'use client';

import { Button } from '@/components/ui/button';
import { ApiKeyDto } from '@/openapi/requests';
import { useClipboard } from '@mantine/hooks'
import { toast } from 'sonner';

interface ApiKeyItemProps {
  apiKey: ApiKeyDto;
  applicationId: string;
  onToggle: (applicationId: string, key: string) => void;
  onDelete: (applicationId: string, key: string) => void;
}

export function ApiKeyItem({ apiKey, applicationId, onToggle, onDelete }: ApiKeyItemProps) {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <div className="py-3 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="text-sm font-medium text-muted-foreground">{apiKey.name}</div>
          <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full select-none ${apiKey.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {apiKey.enabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <div className="flex gap-2">
        </div>
      </div>
      <div className="flex items-center gap-2 max-w-[90%]">
        <code className="relative rounded bg-muted px-2 py-1 font-mono text-xs overflow-x-auto max-w-[80%] select-none">
          {apiKey.key}
        </code>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs"
          onClick={() => {
            clipboard.copy(apiKey.key);
            toast.success('Copied to clipboard');
          }}
        >
          {clipboard.copied ? <>Copied</> : <>Copy</>}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs"
          onClick={() => onToggle(applicationId, apiKey.key || '')}
        >
          {apiKey.enabled ? 'Disable' : 'Enable'}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="h-7 text-xs"
          onClick={() => onDelete(applicationId, apiKey.key || '')}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
