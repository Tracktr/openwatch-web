import AuthProvider from '@/providers/auth';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
