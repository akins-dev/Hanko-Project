import Replicate from "replicate";
import { NextResponse } from "next/server";

import { userId } from "@/lib/get-user-id";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit"

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
})

export async function POST(
    req: Request
) {
    try {
        const userID = await userId();
        const body = await req.json();
        const { prompt } = body;

        if (!userID) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial has expired.", { status: 403 })
        }

        const response = await replicate.run(
            "anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f",
            {
                input: {
                    prompt
                }
            }
        )

        await incrementApiLimit();

        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("Internal error", { status: 500 });
    }
}