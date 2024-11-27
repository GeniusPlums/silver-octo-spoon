import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="space-y-8">
        <section className="text-center">
          <p className="text-xl mb-4">
            Welcome to Mingle Eat Talk (M.E.T.), a premium offline non-dating community designed to help you expand your social circle and create lasting friendships!
          </p>
          <p className="text-lg text-gray-700">
            At M.E.T., we bring together like-minded individuals who value meaningful connections and unforgettable experiences. This isn&apos;t a dating platform—it&apos;s a vibrant, handpicked community of people who love to share good vibes, exciting adventures, and enriching conversations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Our Premium Community Stands Out:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Curated Brunches: Indulge in incredible food and great company to start your weekends right.</li>
            <li>Luxury Travel Experiences: Explore new destinations with a fun-loving, adventurous group.</li>
            <li>Exclusive Dance Workshops: Learn, laugh, and groove with our energetic sessions.</li>
            <li>High-Energy Mixers: Forge meaningful friendships in a dynamic, engaging atmosphere.</li>
          </ul>
        </section>

        <section className="text-center">
          <p className="text-lg mb-6">
            As a premium member, you gain access to thoughtfully curated events and experiences that make meeting new people effortless and exciting. Our goal is to help you expand and refresh your social circle in the most enjoyable way possible.
          </p>
          <Button size="lg" className="font-semibold bg-yellow-400 text-black px-8 py-3 rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl">
            Join Mingle Eat Talk
          </Button>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg text-center">
          <p className="text-xl font-semibold">
            Join Mingle Eat Talk (M.E.T.), where connection meets community, and every interaction feels extraordinary!
          </p>
        </section>
      </div>
    </div>
  )
}