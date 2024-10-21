import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to KohLeo</h1>
        <p className="text-xl mb-8">Plan trips, chat with friends, and create lasting memories together.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/trips/create">Create a Trip</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/trips">Explore Trips</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}