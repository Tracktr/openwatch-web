import AuthProvider from '@/providers/auth';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
}
