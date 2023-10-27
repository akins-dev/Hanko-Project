"use client"

import * as z from "zod";
import axios from "axios";
import OpenAI from "openai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {Empty} from "@/components/empty";
import {Loader} from "@/components/loader";
import { Input } from "@/components/ui/input"
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/markdown";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<OpenAI.Chat.Completions.ChatCompletionMessageParam[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      });
      
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
      
    } catch (error: any) {
      console.log(error)
    } finally {
        router.refresh()
    }
  }

  return (
    <div>
        <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
        />
        <div className="px-4 lg:px-8">
          <div>
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                         className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                         disabled={isLoading}
                         placeholder="What is grit mindset?"
                         {...field}
                         />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading}>
                  Generate
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <Empty label="No conversation started." />
            )}
            <div className="flex flex-col-reverse gap-y-4 pb-4">
                  {messages?.map((message) => (
                    <div 
                      className={cn(
                      "p-8 w-full flex items-start gap-x-8 rounded-lg",
                      message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                        )}
                      key={message.content}
                    >
                      {message.role === "user" ? <UserAvatar customClassName="h-8 w-8" /> : <BotAvatar />}
                      <Markdown content={message.content} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ConversationPage