"use client"

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';

const LoginCallbackPage = () => {
  useEffect(() => {
    // Get access token from URL search params
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = searchParams.get('access_token');

    // Log the tokens
    console.log('Access Token:', accessToken);

    // Note: Cookies should be handled server-side in Next.js
    // Client-side can only read cookies using document.cookie
    console.log('Document cookies:', document.cookie);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderCircle className='h-10 w-10 animate-spin' />
    </div>
  );
};

export default LoginCallbackPage;
