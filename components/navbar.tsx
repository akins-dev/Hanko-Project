import dynamic from 'next/dynamic';

import Logout from "@/components/hanko/logout";
import MobileSidebar from "@/components/mobile-sidebar";

const Profile = dynamic(() => import('@/components/hanko/profile'), { ssr: false })

interface NavBarProps {
  apiLimitCount: number;
}

const NavBar = ({
  apiLimitCount
}: NavBarProps) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
        <div className="flex w-full justify-end gap-x-3">
            <Profile />
            <Logout />
        </div>
    </div>
  )
}

export default NavBar