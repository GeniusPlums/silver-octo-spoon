import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>
      <div className="space-y-8">
        <p className="text-xl text-center">
          Joining Mingle Eat Talk (M.E.T.) Community is as easy (and fun) as ordering your favorite dessert. Here's how to become part of the coolest social crew around:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">1. Click the Magic Link</h2>
              <p className="text-muted-foreground">Hit that button and start your journey to a better social life—no overthinking allowed.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">2. Fill Out a Fun Form</h2>
              <p className="text-muted-foreground">Tell us a little about yourself. Don't worry, we're not nosy—just making sure you're as awesome as you look!</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">3. Join the 15-Minute Vibe Check</h2>
              <p className="text-muted-foreground">It's not an interrogation, we promise. Just a quick, chill chat to make sure M.E.T. is the perfect match for you (spoiler: it probably is).</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">4. Seal the Deal</h2>
              <p className="text-muted-foreground">Clear the call, confirm your membership, and BOOM—you're officially part of the coolest crew in town.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <p className="text-xl">Ready to start the fun? Click that link and let's get this party started—your future friends are waiting!</p>
          <Button size="lg" className="font-semibold">
            Join M.E.T. Now
          </Button>
        </div>
      </div>
    </div>
  )
}