import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

const FAQSection = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-4">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Everything you need to know about M.E.T. community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search FAQs..." 
                className="pl-10 bg-yellow-50 border-yellow-200 focus:border-yellow-300 focus:ring-yellow-300"
              />
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={`item-${index + 1}`} 
              value={`item-${index + 1}`}
              className="border border-yellow-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-yellow-50 hover:no-underline">
                <span className="text-lg font-medium text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mt-12 bg-yellow-100 border-yellow-200">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-medium mb-4">Still have questions?</p>
            <p className="text-gray-600 mb-6">We're here to help! Reach out to our friendly support team.</p>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
              Contact Support
            </button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

const faqData = [
  {
    question: "What is M.E.T.?",
    answer: "M.E.T. (Mingle Eat Talk) is a premium social platform designed to help you meet like-minded individuals, build lasting friendships, and enjoy unique experiences like travel adventures, dance workshops, and mixers!"
  },
  {
    question: "Is M.E.T. a dating platform?",
    answer: "Nope! M.E.T. is strictly a non-dating platform and is all about genuine connections and friendships, not dating. Think of it as your go-to space for expanding your social circle and meeting cool people."
  },
  {
    question: "What kind of people can I expect?",
    answer: "You can expect people who are like-minded, safe, mature, great communicators and purely seeking friendships. Ex Profiles: Chefs, Architects, Entrepreneurs, CEOs, CFOs, product, Project, Program managers, VPs, Directors, Investors, Politicians, students, House wives etc."
  },
  {
    question: "How do I join M.E.T.?",
    answer: "Simply click on the registration link, fill out a quick form, and schedule a short 15-minute curation call. If all goes well, you'll confirm your membership and start connecting!"
  },
  {
    question: "What's a curation call?",
    answer: "It's a quick 15-minute chat where we get to know you a little better and make sure M.E.T. is the right fit for your social goals. No stress—just a friendly conversation!"
  },
  {
    question: "How do you select members for M.E.T.?",
    answer: "We handpick members to ensure a vibrant, like-minded community. We want to create a space where everyone feels comfortable and excited to connect!"
  },
  {
    question: "What kind of events does M.E.T. host?",
    answer: "From brunches and travel adventures to dance workshops and mixers, M.E.T. offers a range of fun, curated experiences designed to bring people together and spark new friendships."
  },
  {
    question: "Can I bring a friend to an event?",
    answer: "M.E.T. is all about expanding your social circle, so while most events are for members only, we occasionally host special gatherings where you can invite a friend to join the fun!"
  },
  {
    question: "Is there a membership fee?",
    answer: "Yes, M.E.T. is a premium community, so there is a membership fee to ensure high-quality events and experiences. It's worth every penny for the connections and fun you'll have!"
  },
  {
    question: "What happens if I don't get along with someone?",
    answer: "No worries! M.E.T. is about finding the right people for you. If you ever feel uncomfortable, we have a support system in place to ensure everyone feels safe and respected."
  },
  {
    question: "How often can I attend events?",
    answer: "You can attend as many events as you like! We host regular events to keep the fun rolling and help you continuously expand and refresh your social circle."
  }
]

export default FAQSection