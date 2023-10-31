import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const HankoAuth = dynamic(() => import('@/components/hanko/hanko-auth'), { ssr: false })

const Auth = () => {
  return (
    <div>
        <HankoAuth />
    </div>
  )
}

export default Auth;