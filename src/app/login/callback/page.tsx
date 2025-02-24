"use client"

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'next/navigation';

const LoginCallbackPage = () => {
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = searchParams.get('access_token');
    // TODO: Set refresh token as cookie
    // const refreshToken = searchParams.get('refresh_token');

    if (accessToken) {
      setAccessToken(accessToken);
      router.push('/dashboard');
    }
  }, [setAccessToken, router]);

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderCircle className='h-10 w-10 animate-spin' />
    </div>
  );
};

export default LoginCallbackPage;
