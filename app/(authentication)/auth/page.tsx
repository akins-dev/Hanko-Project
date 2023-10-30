"use client"

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const HankoAuth = dynamic(() => import('@/components/hanko/hanko-auth'), { ssr: false })

const Auth = () => {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if(!isMounted) {
    return null
  }
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
        <HankoAuth />
    </div>
  )
}

export default Auth;