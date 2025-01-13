// components/ChatArea.tsx
'use client'

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import ChatInput from './ChatInput'

interface Message {
  id: number
  text: string
  role: 'user' | 'assistant'
}

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! Set up swing trade for fun?', role: 'assistant' },
  ])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return
    const newMessage: Message = {
      id: Date.now(),
      text,
      role: 'user',
    }
    setMessages((prev) => [...prev, newMessage])

    // Simulate AI assistant reply:
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'This is a placeholder assistant response.',
          role: 'assistant',
        },
      ])
    }, 1000)
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-2xl ${
              msg.role === 'assistant' ? 'self-start' : 'self-end'
            }`}
          >
            <MessageBubble text={msg.text} role={msg.role} />
          </div>
        ))}
      </ScrollArea>

      {/* Chat Input */}
      <div className="border-t border-gray-800 p-4">
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  )
}

function MessageBubble({ text, role }: { text: string; role: string }) {
  const isAssistant = role === 'assistant'
  return (
    <div
      className={`rounded-md px-4 py-2 whitespace-pre-wrap ${
        isAssistant ? 'bg-[#40414F]' : 'bg-[#2A2B32]'
      }`}
    >
      {text}
    </div>
  )
}
