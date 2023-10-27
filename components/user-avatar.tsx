"use client"

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";

interface UserAvatarProps {
  customClassName?: string
}

export const UserAvatar = ({
  customClassName
}: UserAvatarProps) => {
  return (
    <div>
      <Avatar className={customClassName}>
        <AvatarImage src="https://github.com/shadcn.png" alt="user avatar" />
        <AvatarFallback>X</AvatarFallback>
      </Avatar>
    </div>
  )
}