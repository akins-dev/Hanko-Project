"use client"

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AlphaGPT from "./alpha-gpt";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
            </div>
            <AlphaGPT />
        </Link>
        <div className="flex items-center gap-x-2">
            <Link href={"/auth"}>
            <Button variant="outline" className="rounded-full">
                Get Started
            </Button>
            </Link>
        </div>
        </nav>
    )
}