'use client';

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useUserStore } from '@/stores/useUserStore';

import { OpenAPI as OpenAPIConfig } from '@/openapi/requests/core/OpenAPI';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const router = useRouter()

  useEffect(() => {
    setAccessToken('');
    OpenAPIConfig.HEADERS = {
      Authorization: ''
    };
    router.push('/');
  }, [setAccessToken, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderCircle className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default LogoutPage;
