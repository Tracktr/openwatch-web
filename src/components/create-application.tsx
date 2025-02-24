'use client';

import type React from 'react';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDefaultServicePostApplications } from '@/openapi/queries';
import { toast } from 'sonner';
import { getQueryClient } from '@/providers/query';

export function CreateApplication() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const queryClient = getQueryClient()

  const { mutate: createApplication, isPending } = useDefaultServicePostApplications({
    mutationKey: ['createApplication'],
    onSuccess: () => {
      toast.success("Your new application has been created successfully.");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["DefaultServiceGetApplications"] });
    },
    onError: () => {
      toast.error("Failed to create application. Please try again.");
    }
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createApplication({ requestBody: { name } });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Application
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Create Application</DialogTitle>
            <DialogDescription>Create a new application to get an API key for the OpenWatch API.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="My Application" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Creating...' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
