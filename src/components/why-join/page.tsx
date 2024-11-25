import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyJoin() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Why Join M.E.T.?</h1>
      <div className="space-y-8">
        <section className="text-center">
          <p className="text-2xl font-semibold mb-4">Because making friends as an adult shouldn&apos;t be this hard!</p>
          <p className="text-lg text-muted-foreground">
            Let&apos;s face it—your couch is comfy, but it&apos;s not introducing you to new people. Enter Mingle Eat Talk (M.E.T.), the premium socializing platform that makes finding your kind of people fun, effortless, and way less awkward than trying to strike up a conversation at the gym.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">What makes M.E.T. So special?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Curated Members Only</h3>
                <p className="text-muted-foreground">No random strangers here—just an exclusive squad of handpicked, awesome humans who get you.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Goodbye, Small Talk</h3>
                <p className="text-muted-foreground">Our experiences are designed to spark real conversations and genuine laughs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quality Over Quantity</h3>
                <p className="text-muted-foreground">This isn&apos;t about meeting everyone—it&apos;s about finding your people.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Unforgettable Experiences</h3>
                <p className="text-muted-foreground">Life&apos;s too short for boring weekends and stale friendships. With M.E.T., you&apos;ll connect with amazing individuals and share unforgettable experiences.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center space-y-6">
          <p className="text-xl">
            So why wait? Join M.E.T. now—because your future besties are cooler than you think, and they're already here!
          </p>
          <Button size="lg" className="font-semibold">
            Join M.E.T. Now
          </Button>
        </section>
      </div>
    </div>
  )
}