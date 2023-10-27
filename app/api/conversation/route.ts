import { NextResponse } from "next/server";

import OpenAI from "openai";

import { userId } from "@/utils/getUserId";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const instructionMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
  role: "system",
  content: "You are a conversation bot."
};

export async function POST(
    req: Request
) {
    try {
        const userID = userId();
        const body = await req.json();
        const { messages } = body;

        if (!userID) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });

        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        return new NextResponse("Internal error", { status: 500 });
    }
}