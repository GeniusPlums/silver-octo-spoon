import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Utensils, Plane, Music } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl text-gray-900">
      <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>
      <div className="space-y-12">
        <Card className="bg-yellow-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-semibold mb-6">Welcome to Mingle Eat Talk (M.E.T.)</h2>
            <p className="text-xl mb-6">
              A premium offline non-dating community designed to help you expand your social circle and create lasting friendships!
            </p>
            <p className="text-lg text-gray-700">
              At M.E.T., we bring together like-minded individuals who value meaningful connections and unforgettable experiences. This isn&apos;t a dating platform—it&apos;s a vibrant, handpicked community of people who love to share good vibes, exciting adventures, and enriching conversations.
            </p>
          </CardContent>
        </Card>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Our Premium Community Stands Out:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Utensils, title: "Curated Brunches", description: "Indulge in incredible food and great company to start your weekends right." },
              { icon: Plane, title: "Luxury Travel Experiences", description: "Explore new destinations with a fun-loving, adventurous group." },
              { icon: Music, title: "Exclusive Dance Workshops", description: "Learn, laugh, and groove with our energetic sessions." },
              { icon: Users, title: "High-Energy Mixers", description: "Forge meaningful friendships in a dynamic, engaging atmosphere." },
            ].map((item, index) => (
              <Card key={index} className="bg-yellow-50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 mb-4 text-yellow-600" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-yellow-100">
          <CardContent className="p-8 text-center">
            <p className="text-xl mb-8">
              As a premium member, you gain access to thoughtfully curated events and experiences that make meeting new people effortless and exciting. Our goal is to help you expand and refresh your social circle in the most enjoyable way possible.
            </p>
            <Button size="lg" className="font-semibold bg-yellow-400 text-black px-8 py-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl text-lg">
              Join Mingle Eat Talk
            </Button>
          </CardContent>
        </Card>

        <section className="bg-yellow-50 p-8 rounded-lg text-center">
          <p className="text-2xl font-semibold">
            Join Mingle Eat Talk (M.E.T.), where connection meets community, and every interaction feels extraordinary!
          </p>
        </section>
      </div>
    </div>
  )
}