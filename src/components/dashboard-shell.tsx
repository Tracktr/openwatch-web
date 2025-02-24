import type React from "react"
import { Boxes } from "lucide-react"
import Link from "next/link"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Boxes className="h-6 w-6" />
            <Link href="/" className="font-bold">
              OpenWatch
            </Link>
          </div>
          <nav>
            <Link href="/auth/signout" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Sign Out
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
    </div>
  )
}

