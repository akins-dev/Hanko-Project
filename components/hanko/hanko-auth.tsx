"use client"

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { Hanko, register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const HankoAuth = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    //
    register(hankoApi ?? "").catch((error) => {
        throw new Error("ERROR[HANKO AUTH]", error)
    });
  }, []);

  return <hanko-auth />
}

export default HankoAuth;