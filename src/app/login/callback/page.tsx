"use client"

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';

const LoginCallbackPage = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    console.log({ accessToken, refreshToken });
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderCircle className='h-10 w-10 animate-spin' />
    </div>
  );
};

export default LoginCallbackPage;
