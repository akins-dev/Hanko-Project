import OpenAI from "openai";
import { NextResponse } from "next/server";

import { userId } from "@/lib/get-user-id";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export async function POST(
    req: Request
) {
    try {
        const userID = await userId();
        const body = await req.json();
         const { prompt, amount = 1, resolution = "512x512" } = body;

        if (!userID) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key not configured", { status: 500 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }

        if (!resolution) {
            return new NextResponse("Resolution is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial has expired.", { status: 403 })
        } 

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        });

        await incrementApiLimit();

        return NextResponse.json(response.data);

    } catch (error) {
        return new NextResponse("Internal error", { status: 500 });
    }
}