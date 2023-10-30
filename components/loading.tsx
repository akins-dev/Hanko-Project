"use client"

import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
        <div className="w-10 h-10 relative animate-spin">
            <Image 
            alt="logo"
            fill
            src="/logo.png"
            />
        </div>
    </div>
  )
}
