'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const auth = localStorage.getItem('auth');
      if (auth !== 'true') {
        router.push('/auth');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
