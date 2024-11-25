import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is M.E.T.?</AccordionTrigger>
          <AccordionContent>
            M.E.T. (Mingle Eat Talk) is a premium social platform designed to help you meet like-minded individuals, build lasting friendships, and enjoy unique experiences like travel adventures, dance workshops, and mixers!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is M.E.T. a dating platform?</AccordionTrigger>
          <AccordionContent>
            Nope! M.E.T. is strictly a non-dating platform and is all about genuine connections and friendships, not dating. Think of it as your go-to space for expanding your social circle and meeting cool people.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What kind of people can I expect?</AccordionTrigger>
          <AccordionContent>
            You can expect people who are like-minded, safe, mature, great communicators and purely seeking friendships. Ex Profiles: Chefs, Architects, Entrepreneurs, CEOs, CFOs, product, Project, Program managers, VPs, Directors, Investors, Politicians, students, House wives etc.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How do I join M.E.T.?</AccordionTrigger>
          <AccordionContent>
            Simply click on the registration link, fill out a quick form, and schedule a short 15-minute curation call. If all goes well, you&apos;ll confirm your membership and start connecting!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What&apos;s a curation call?</AccordionTrigger>
          <AccordionContent>
            It&apos;s a quick 15-minute chat where we get to know you a little better and make sure M.E.T. is the right fit for your social goals. No stress—just a friendly conversation!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How do you select members for M.E.T.?</AccordionTrigger>
          <AccordionContent>
            We handpick members to ensure a vibrant, like-minded community. We want to create a space where everyone feels comfortable and excited to connect!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>What kind of events does M.E.T. host?</AccordionTrigger>
          <AccordionContent>
            From brunches and travel adventures to dance workshops and mixers, M.E.T. offers a range of fun, curated experiences designed to bring people together and spark new friendships.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Can I bring a friend to an event?</AccordionTrigger>
          <AccordionContent>
            M.E.T. is all about expanding your social circle, so while most events are for members only, we occasionally host special gatherings where you can invite a friend to join the fun!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Is there a membership fee?</AccordionTrigger>
          <AccordionContent>
            Yes, M.E.T. is a premium community, so there is a membership fee to ensure high-quality events and experiences. It&apos;s worth every penny for the connections and fun you&apos;ll have!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>What happens if I don&apos;t get along with someone?</AccordionTrigger>
          <AccordionContent>
            No worries! M.E.T. is about finding the right people for you. If you ever feel uncomfortable, we have a support system in place to ensure everyone feels safe and respected.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>How often can I attend events?</AccordionTrigger>
          <AccordionContent>
            You can attend as many events as you like! We host regular events to keep the fun rolling and help you continuously expand and refresh your social circle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}