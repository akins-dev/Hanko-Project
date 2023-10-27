"use client"

import ReactMarkdown from "react-markdown";

interface MarkdownProps {
    content: string | null
}

export const Markdown = ({
    content
}: MarkdownProps) => {
  return (
    <ReactMarkdown components={{
        pre: ({ node, ...props }) => (
            <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
            <pre {...props} />
            </div>
        ),
        code: ({ node, ...props }) => (
            <code className="bg-black/10 rounded-lg p-1" {...props} />
        )
        }} className="text-sm overflow-hidden leading-7">
        {content || ""}
    </ReactMarkdown>
  )
}
