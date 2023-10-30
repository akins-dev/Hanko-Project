import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const HankoAuth = dynamic(() => import('@/components/hanko/hanko-auth'), { ssr: false })

const Auth = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
        <HankoAuth />
    </div>
  )
}

export default Auth;