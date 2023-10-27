"use client"

import Logout from "@/components/hanko/logout";
import MobileSidebar from "@/components/mobile-sidebar";
import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('@/components/hanko/profile'), { ssr: false })

const NavBar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
        <div className="flex w-full justify-end gap-x-3">
            <Profile />
            <Logout />
        </div>
    </div>
  )
}

export default NavBar