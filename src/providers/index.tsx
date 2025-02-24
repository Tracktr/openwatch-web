'use client';

import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import QueryProvider from './query';

const Providers = ({ children }: { children: ReactNode }) => (
  <QueryProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </QueryProvider>
);

export default Providers;
