import { NextRequest, NextResponse } from "next/server";

import * as jose from "jose";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export default async function middleware(req: NextRequest) {
    const token = req.cookies.get("hanko")?.value || "";
    const JWKS = jose.createRemoteJWKSet(
      new URL(`${hankoApi}/.well-known/jwks.json`)
    );
    try {
        const verifiedJWT = await jose.jwtVerify(token, JWKS);
        // console.log(verifiedJWT);
    } catch (error) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
  matcher: ["/dashboard"],
};
