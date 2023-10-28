"use client"

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TestimonialProps {
    imageUrl: string,
    imageFallback: string,
    name: string,
    title: string,
    description: string,
    className: string
}

const Testimonial = ({
    imageUrl,
    imageFallback,
    name,
    title,
    description,
    className
}: TestimonialProps) => {
  return (
    <div>
        <Card className={cn("bg-[#192339] hover:scale-[1.03] outline outline-1 outline-zinc-400 rounded-xl border-none text-white", className)}>
            <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                <Avatar>
                    <AvatarImage className="text-center" src={imageUrl} />
                    <AvatarFallback>{imageFallback}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-lg">{name}</p>
                    <p className="text-zinc-400 text-sm">{title}</p>
                </div>
                </CardTitle>
                <CardContent className="pt-4 px-0 text-zinc-300">
                    {description}
                </CardContent>
            </CardHeader>
        </Card>
    </div>
  )
}

export default Testimonial