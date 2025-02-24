'use client';

import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GoogleSignInButton() {
  return (
    <Button asChild className="w-full flex">
      <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`}>
        <LogIn className="h-4 w-4" />
        Continue with Google
      </a>
    </Button>
  );
}
