'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { OpenAPI as OpenAPIConfig } from '@/openapi/requests/core/OpenAPI';

import { useUserStore } from '@/stores/useUserStore';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

type ProvidersProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: ProvidersProps) => {
  const { accessToken } = useUserStore();
  const router = useRouter()
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);
  const [accessTokenSet, setAccessTokenIsSet] = useState(false);

  useEffect(() => {
    const checkHydration = async () => {
      const hydrated = await useUserStore.persist.hasHydrated();
      setIsHydrated(hydrated);
    };

    checkHydration();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      if (accessToken) {
        OpenAPIConfig.HEADERS = {
          'Authorization': `Bearer ${accessToken}`
        };
        setAccessTokenIsSet(true);
      } else {
        router.push('/login');
      }
    }
  }, [accessToken, pathname, isHydrated, router]);

  if (accessTokenSet) {
    return <>{children}</>;
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderCircle className='h-10 w-10 animate-spin' />
    </div>
  );
};

export default AuthProvider;
