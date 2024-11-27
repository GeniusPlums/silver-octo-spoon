import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Star, Sparkles } from 'lucide-react'

export default function WhyJoin() {
  const features = [
    { title: "Curated Members Only", description: "No random strangers here—just an exclusive squad of handpicked, awesome humans who get you.", icon: Users },
    { title: "Goodbye, Small Talk", description: "Our experiences are designed to spark real conversations and genuine laughs.", icon: MessageSquare },
    { title: "Quality Over Quantity", description: "This isn't about meeting everyone—it's about finding your people.", icon: Star },
    { title: "Unforgettable Experiences", description: "Life's too short for boring weekends and stale friendships. With M.E.T., you'll connect with amazing individuals and share unforgettable experiences.", icon: Sparkles },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl text-gray-900">
      <h1 className="text-5xl font-bold text-center mb-12">Why Join M.E.T.?</h1>
      <div className="space-y-16">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-semibold mb-6">Because making friends as an adult shouldn&apos;t be this hard!</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Let&apos;s face it—your couch is comfy, but it&apos;s not introducing you to new people. Enter Mingle Eat Talk (M.E.T.), the premium socializing platform that makes finding your kind of people fun, effortless, and way less awkward than trying to strike up a conversation at the gym.
            </p>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">What makes M.E.T. So special?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-yellow-400 text-black rounded-full p-3">
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-yellow-100 border-yellow-200">
          <CardContent className="p-8 text-center space-y-6">
            <p className="text-2xl font-semibold">
              So why wait? Join M.E.T. now—because your future besties are cooler than you think, and they&apos;re already here!
            </p>
            <Button 
              size="lg" 
              className="font-semibold bg-yellow-400 text-black px-8 py-6 text-xl rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Join M.E.T. Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

