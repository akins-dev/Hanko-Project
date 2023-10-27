"use client"

import { useEffect } from "react";

import { register } from "@teamhanko/hanko-elements";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {UserAvatar} from "@/components/user-avatar";


const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

const Profile = () => {
  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      throw new Error("ERROR[HANKO PROFILE]", error)
    });
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <button >
            <UserAvatar />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <section >
            <hanko-profile />
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Profile;
