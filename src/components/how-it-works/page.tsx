import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const HowItWorksSection: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <p className="text-xl text-center mb-12">
          Joining Mingle Eat Talk (M.E.T.) Community is as easy (and fun) as ordering your favorite dessert. Here&apos;s how to become part of the coolest social crew around:
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Click the Magic Link</h3>
              <p className="text-gray-600">Hit that button and start your journey to a better social life—no overthinking allowed.</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fill Out a Fun Form</h3>
              <p className="text-gray-600">Tell us a little about yourself. Don&apos;t worry, we&apos;re not nosy—just making sure you&apos;re as awesome as you look!</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Join the 15-Minute Vibe Check</h3>
              <p className="text-gray-600">It&apos;s not an interrogation, we promise. Just a quick, chill chat to make sure M.E.T. is the perfect match for you (spoiler: it probably is).</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Seal the Deal</h3>
              <p className="text-gray-600">Clear the call, confirm your membership, and BOOM—you&apos;re officially part of the coolest crew in town.</p>
            </CardContent>
          </Card>
        </div>
  
        <div className="text-center mt-12 space-y-6">
          <p className="text-xl">Ready to start the fun? Click that link and let&apos;s get this party started—your future friends are waiting!</p>
          <Button 
            size="lg"
            className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Join M.E.T. Now
          </Button>
        </div>
      </div>
    );
  };