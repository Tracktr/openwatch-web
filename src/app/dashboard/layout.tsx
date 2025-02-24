import AuthProvider from '@/providers/auth';
import { Boxes } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background flex justify-center">
        <div className="flex h-16 items-center justify-between py-4 px-8 w-full">
          <div className="flex items-center gap-2">
            <Boxes className="h-6 w-6" />
            <Link href="/" className="font-bold">
              OpenWatch
            </Link>
          </div>
          <Link href="/logout" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Sign Out
          </Link>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-8 pt-6">
        <AuthProvider>{children}</AuthProvider>
      </main>
    </>
  );
}
