"use client"

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { Hanko } from "@teamhanko/hanko-elements";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const Logout = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const renewSession = useCallback(() => {
    router.replace("/");
    }, [router]);

    useEffect(
    () =>
        hanko?.onSessionExpired(() => {
        renewSession();
        }),

    [hanko, renewSession]
    );

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch((error) => {
        throw new Error("EROR[HANKO LOGOUT]", error)
      });
  };
  return (
    <>
      <Button variant="ghost" size="icon" onClick={logout}>
        <LogOut className="text-black" />
      </Button>
    </>
  );
};


export default Logout;