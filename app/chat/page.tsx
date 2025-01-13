// app/chat/page.tsx
import LeftSidebar from '@/components/LeftSidebar'
import ChatArea from '@/components/ChatArea'

export default function ChatPage() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-64 bg-[#202123] border-r border-gray-800">
        <LeftSidebar />
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col">
        <ChatArea />
      </div>
    </div>
  )
}
