'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ChatInputProps {
  onSend: (text: string) => void
  onExecuteTrade: () => void
}

export default function ChatInput({ onSend, onExecuteTrade }: ChatInputProps) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (text.trim()) {
      onSend(text)
      setText('')
    }
  }

  return (
    <div className="relative flex items-center gap-2 w-full p-2 border border-gray-700 rounded-md bg-gray-800">
      {/* Input Field */}
      <Input
        type="text"
        className="flex-1 bg-transparent placeholder-gray-400 focus-visible:ring-0"
        placeholder="Tell me which pair on Solana and how would you like to trade..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Trade Button */}
      <Button
        variant="secondary"
        className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md"
        onClick={onExecuteTrade}
      >
        Trade
      </Button>

      {/* Send Button */}
      <Button
        variant="default"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
        onClick={handleSend}
      >
        Send
      </Button>
    </div>
  )
}
