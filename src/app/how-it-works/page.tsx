import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MousePointerClickIcon as Click, FileText, PhoneCall, CheckCircle } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    { title: "Click the Magic Link", description: "Hit that button and start your journey to a better social life—no overthinking allowed.", icon: Click },
    { title: "Fill Out a Fun Form", description: "Tell us a little about yourself. Don't worry, we're not nosy—just making sure you're as awesome as you look!", icon: FileText },
    { title: "Join the 15-Minute Vibe Check", description: "It's not an interrogation, we promise. Just a quick, chill chat to make sure M.E.T. is the perfect match for you (spoiler: it probably is).", icon: PhoneCall },
    { title: "Seal the Deal", description: "Clear the call, confirm your membership, and BOOM—you're officially part of the coolest crew in town.", icon: CheckCircle },
  ]

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gradient-to-b from-yellow-50 to-white">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-6xl text-gray-900">
          <h1 className="text-5xl font-bold text-center mb-8">How It Works</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Joining Mingle Eat Talk (M.E.T.) Community is as easy (and fun) as ordering your favorite dessert. Here&apos;s how to become part of the coolest social crew around:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-y-6 bg-yellow-100 p-8 rounded-2xl">
            <p className="text-2xl font-semibold">Ready to start the fun?</p>
            <p className="text-xl">Click that link and let&apos;s get this party started—your future friends are waiting!</p>
            <Button 
              size="lg"
              className="bg-yellow-400 text-black px-8 py-6 rounded-full font-bold text-xl hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Join M.E.T. Now <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

