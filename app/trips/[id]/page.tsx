"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for demonstration
const mockTripData = {
  id: '1',
  destination: 'Paris, France',
  startDate: '2023-09-15',
  endDate: '2023-09-22',
  theme: 'City Exploration',
  visibility: 'private',
};

const mockMessages = [
  { id: 1, user: 'Alice', content: 'Hey everyone! Excited for our trip!', timestamp: '2023-08-01T10:00:00Z' },
  { id: 2, user: 'Bob', content: 'Me too! What should we visit first?', timestamp: '2023-08-01T10:05:00Z' },
  { id: 3, user: 'Charlie', content: 'How about the Eiffel Tower?', timestamp: '2023-08-01T10:10:00Z' },
];

export default function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(mockTripData);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Here you would typically fetch trip details and messages from your backend
    // For now, we're using mock data
    console.log(`Fetching trip details for trip ${id}`);
  }, [id]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        content: newMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{trip.destination}</h1>
      <div className="mb-6">
        <p>Date: {trip.startDate} to {trip.endDate}</p>
        <p>Theme: {trip.theme}</p>
        <p>Visibility: {trip.visibility}</p>
      </div>
      
      <div className="bg-card rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Trip Chat</h2>
        <ScrollArea className="h-[400px] mb-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-4 flex items-start">
              <Avatar className="mr-2">
                <AvatarFallback>{message.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{message.user}</p>
                <p>{message.content}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

// Add this function to generate static params for the dynamic route
export async function generateStaticParams() {
  // In a real application, you would fetch the list of trip IDs from your data source
  // For now, we'll return a static list of IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}