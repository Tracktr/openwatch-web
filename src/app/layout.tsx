"use client"

import type React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/providers';
import { Toaster } from '@/components/ui/sonner';
import Link from 'next/link';
import { ArrowRight, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/useUserStore';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { accessToken } = useUserStore();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex-col">
            <header className="sticky flex justify-center top-0 z-40 w-full border-b bg-background">
              <div className="container flex h-16 items-center justify-between py-4 px-8 md:px-0">
                <div className="flex items-center gap-2">
                  <Boxes className="h-6 w-6" />
                  <span className="text-lg font-bold">OpenWatch</span>
                </div>
                <nav className="flex items-center gap-4">
                  <Button asChild>
                    {accessToken ? (
                      <Link href="/logout">
                        Sign Out
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <Link href="/login">
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t">
              <div className="container flex flex-col items-center justify-between gap-4 py-4 px-8 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                  <Boxes className="h-6 w-6" />
                  <p className="text-center text-sm leading-loose md:text-left">
                    Built by{' '}
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4"
                    >
                      OpenWatch
                    </a>
                    . The source code is available on{' '}
                    <a
                      href="https://github.com/example/openwatch"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
