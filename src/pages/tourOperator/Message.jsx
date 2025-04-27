import React, { useState } from 'react'

const Message = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Smith",
      email: "john.smith@example.com",
      date: "2025-04-20",
      subject: "Tour Inquiry",
      message:
        "Hello, I am interested in booking the Cape Coast Tour for a family of 4. Do you offer any family discounts?",
      read: true,
    },
    {
      id: 2,
      sender: "Sarah Johnson",
      email: "sarah.j@example.com",
      date: "2025-04-22",
      subject: "Booking Confirmation",
      message:
        "Thank you for confirming my booking. I have a question about the pickup location. Could you please provide more details?",
      read: false,
    },
    {
      id: 3,
      sender: "Michael Wong",
      email: "michael.w@example.com",
      date: "2025-04-23",
      subject: "Special Requirements",
      message:
        "I have booked the Mountain Adventure tour and I have some dietary restrictions. Is it possible to arrange vegetarian meals?",
      read: false,
    },
  ])

  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleMessageClick = (message) => {
    setSelectedMessage(message)

    // Mark message as read
    if (!message.read) {
      setMessages(messages.map((m) => (m.id === message.id ? { ...m, read: true } : m)))
    }
  }

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  return (
    <div>

<div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <p className="text-gray-600">Manage customer inquiries and communications</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Message List */}
          <div className="w-full md:w-1/3 border-r border-gray-200">
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full p-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="overflow-y-auto h-[calc(600px-64px)]">
              {filteredMessages.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No messages found</div>
              ) : (
                filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => handleMessageClick(message)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedMessage?.id === message.id ? "bg-gray-100" : ""
                    } ${!message.read ? "font-semibold" : ""}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{message.sender}</p>
                        <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">{message.date}</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 truncate">{message.message}</p>
                    {!message.read && <span className="inline-block w-2 h-2 bg-teal-500 rounded-full ml-1"></span>}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 flex flex-col">
            {selectedMessage ? (
              <>
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">{selectedMessage.subject}</h2>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-sm">
                        From: <span className="font-medium">{selectedMessage.sender}</span> ({selectedMessage.email})
                      </p>
                      <p className="text-xs text-gray-500">{selectedMessage.date}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                  <p className="whitespace-pre-line">{selectedMessage.message}</p>
                </div>
                <div className="p-4 border-t">
                  <textarea
                    className="w-full p-3 border rounded-md"
                    rows="3"
                    placeholder="Type your reply here..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                      Send Reply
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">Select a message to view</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Message