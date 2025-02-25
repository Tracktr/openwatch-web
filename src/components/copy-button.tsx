import { useClipboard } from '@mantine/hooks';
import { Button } from './ui/button';
import { Copy, CopyCheck } from 'lucide-react';
import { toast } from 'sonner';

const CopyButton = ({ valueToCopy }: { valueToCopy: string }) => {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        clipboard.copy(valueToCopy);
        toast.success('Copied to clipboard');
      }}
    >
      {clipboard.copied ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};

export default CopyButton;
